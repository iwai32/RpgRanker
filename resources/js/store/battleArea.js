import router from '../router'//リダイレクト用
import { promised, reject } from 'q'
import { resolve } from 'path'
const battleArea = {
  namespaced: true,
  state: {
    //キャラクター
    characterHp: null,
    battleCharacterData: [],
    spSkillGaugeCircle: 0,
    maxSpSkillGaugeCircle: 100,
    hasSpSkill: false,
    myAttackResult: 0,
    recoveryUseTimes: 5,
    //モンスター
    monsterHp: null,
    monsterList: [],
    battleMonsterData: [],
    monsterMotion: false,
    battleLog: "",
    isSkillEffect: false,
    skillEffectAttribute: "",
    //集計データ
    totalTurn: 0,
    totalDamage: 0,
    totalMonsterCount: 0
  },

  mutations: {
    setBattleCharacterData(state, data) {
      state.battleCharacterData = data
    },
    setCharacterHp(state, hpValue) {
      state.characterHp = hpValue
    },
    setMonsterList(state, data) {
      state.monsterList = data
    },
    setRandomBattleMonster(state) {
      const randomNum = 1 + Math.floor(Math.random() * (state.monsterList.length-1))
      state.battleMonsterData = state.monsterList[randomNum]
    },
    addBattleLog(state, log) {
      state.battleLog += log + '<br>'
    },
    setSpGauge(state) {
      state.spSkillGaugeCircle = state.maxSpSkillGaugeCircle
      state.hasSpSkill = true
    },
    setBraveGauge(state) {
      state.spSkillGaugeCircle += state.maxSpSkillGaugeCircle / 8
    },
    setCharacterGauge(state) {
      state.spSkillGaugeCircle += state.maxSpSkillGaugeCircle / 5
    },
    makeSkillEffectOn(state) {
      state.isSkillEffect = true
    },
    makeSkillEffectOff(state) {
      state.isSkillEffect = false
    },
    beginMonsterMotion(state) {
      state.monsterMotion = true
    },
    endMonsterMotion(state) {
      state.monsterMotion = false
    },
    detachSpSkill(state) {
      state.spSkillGaugeCircle = 0
      state.hasSpSkill = false
    },
    setMonsterHp(state) {
      state.monsterHp = state.battleMonsterData.hp
    },
    reduceBattleMonsterHp(state) {
      state.monsterHp -= state.myAttackResult
    },
    weakDamageToMonsters(state, damageData) {
      state.myAttackResult = damageData.damage * 2
    },
    damageToMonsters(state, damageData) {
      state.myAttackResult = damageData.damage
    },
    addRandomDamage(state) {
      state.myAttackResult += Math.floor(Math.random() * 10)
    },
    incrementMonsterCount(state) {
      state.totalMonsterCount++
    },
    setSkillEffectAttribute(state, attribute) {
      state.skillEffectAttribute = attribute
    },
    resetSkillEffectAttribute(state) {
      state.skillEffectAttribute = ""
    },
    descendSatan(state) {
      state.battleMonsterData = state.monsterList[0]
    },
    reduceBattleCharacterHp(state, damageResult) {
      state.characterHp -= damageResult
    },
    lostCharacterHp(state) {
      state.characterHp = 0
    },
    recoverCharacter(state) {
      state.recoveryUseTimes--
      state.characterHp = state.battleCharacterData.hp
      state.totalTurn++
    },
    setTotalData(state) {
      state.totalTurn++
      state.totalDamage += state.myAttackResult
    },
    //遷移時データをリセットする
    resetData(state) {
      state.battleLog = ""
      state.characterHp = state.battleCharacterData.hp
      state.totalTurn = 0
      state.totalDamage = 0
      state.totalMonsterCount = 0
      state.spSkillGaugeCircle = 0
      state.recoveryUseTimes = 5
      state.hasSpSkill = false
    }
  },
  actions: {
    //バトルキャラクター
    async getBattleCharacterData({ commit, rootState}) {
      const characterId = { id: rootState.route.params.characterId }
      const response = await axios.get('/api/battle-character', { params: characterId} )

      commit('setBattleCharacterData', response.data)
    },
    //バトルモンスター
    async getMonsterList({ commit }) {
      const response = await axios.get('/api/battle-monster')

      commit('setMonsterList', response.data)
    },
    //ゲージ増加
    increaseGauge({ state, commit, dispatch }) {
      dispatch('characterGaugeFilter')
      if (state.spSkillGaugeCircle >= state.maxSpSkillGaugeCircle) {
        commit('setSpGauge')
      }
    },
    //ゲージの設定
    characterGaugeFilter({ state, commit }) {
      if (state.battleCharacterData.name === '勇者') {
        commit('setBraveGauge')
      } else {
        commit('setCharacterGauge')
      }
    },
    //自分の攻撃
    myAttack({ state, commit, dispatch }, skillData) {
      let damageData = { damage: skillData.damage, attribute: skillData.attribute }
      dispatch('damageCalculation', damageData)
      commit('addBattleLog', skillData.skillName + '！<br>' + state.battleMonsterData.name + 'に' + state.myAttackResult + 'のダメージ！')
      commit('setTotalData')
      dispatch('reduceMonsterHp')
    },
    //スキルのエフェクト
    showSkillEffect({ commit, dispatch }, attribute) {
      commit('makeSkillEffectOn')
      commit('setSkillEffectAttribute', attribute)
      
      setTimeout(() => {
        //gif画像のループ処理をリセットする
        commit('resetSkillEffectAttribute')
      }, 1000)

      setTimeout(() => {
        dispatch('enemyAttack')
        commit('makeSkillEffectOff')
      }, 1000)
    },
    //モンスターのHPを減らす
    reduceMonsterHp({ state, commit, dispatch }) {
      commit('reduceBattleMonsterHp')

      if (state.monsterHp <= 0) {
        commit('addBattleLog', state.battleMonsterData.name + 'を倒した！')
        setTimeout(() => {
          dispatch('nextMonster')
        }, 1000)

        //討伐数を1増やす
        commit('incrementMonsterCount')
        if (state.totalMonsterCount === 5) {
          dispatch('saveDataAndRedirect')
        }
      }
    },
    //ダメージ計算
    damageCalculation({ state, commit }, damageData) {
      //モンスターの弱点を格納
      let weaknesses = []
      const monsterWeak = state.battleMonsterData.weak

      monsterWeak.forEach(function(obj, key) {
        weaknesses[key] = obj.name
      })

      if (weaknesses.includes(damageData.attribute)) {
        commit('weakDamageToMonsters', damageData)
      } else {
        commit('damageToMonsters', damageData)
      }
      //攻撃にランダム性を与える
      commit('addRandomDamage')
    },
    //次のモンスターを出現させる
    nextMonster( { state, commit } ) {
      //4体をランダムで出現させ、討伐数が4体なら魔王を出現させる。
      if (state.totalMonsterCount === 4) {
        commit('descendSatan')
      } else {
        commit('setRandomBattleMonster')
      }

      commit('setMonsterHp')
    },
    //敵の攻撃
    enemyAttack( { state, commit, dispatch }) {
      //モンスターが使用するスキルをランダムにする
      let monsterSkill = state.battleMonsterData.skills[
        Math.floor(Math.random() * state.battleMonsterData.skills.length)
      ]
      //モンスターが与えるダメージをランダムにする
      let damageResult = monsterSkill.power + Math.floor(Math.random() * 10)

      //登場時は攻撃しない
     if (state.monsterHp === state.battleMonsterData.hp) {
       return
     } else {
       commit('beginMonsterMotion')

       setTimeout(() => {
        commit('endMonsterMotion')
       },300)

       commit('addBattleLog',
        `${state.battleMonsterData.name}の${monsterSkill.name}！
        <br>${state.battleCharacterData.name}は${damageResult}のダメージをうけた！`
       )
       //自身のhpを引く、0以下になったら,負けてしまったと表示し、result画面へ遷移する
       commit('reduceBattleCharacterHp', damageResult)
     }

     if (state.characterHp <= 0) {
       commit('lostCharacterHp')
       dispatch('saveDataAndRedirect')
     }
    },
    //キャラクターのhpの回復
    toRecover( { commit, state, dispatch } ) {
      commit('commonModule/closeConfirmationDisplay', null, { root: true })
      dispatch('increaseGauge')
      commit('addBattleLog',`${state.battleCharacterData.name}はHPを回復した！`)
      commit('recoverCharacter')
    },
    //DBへデータを保存し、リザルト画面へ遷移する
    saveDataAndRedirect({ dispatch }) {
      dispatch('saveBattleData')
      dispatch('toRedirect')
    },
    //DBへ討伐数,合計ターン,合計ダメージ,キャラクターID,ユーザーIDを保存
    async saveBattleData({ state, rootState }) {
      const battleData = {
        'user_id': rootState.auth.user.id,
        'character_id': state.battleCharacterData.id,
        'monster_count': state.totalMonsterCount,
        'total_turn': state.totalTurn,
        'total_damage': state.totalDamage
      }
      const response = await axios.post('/api/save-battle-data', battleData)
      console.log(response)
    },
    //リザルト画面へ遷移する。リザルト画面にはバトル画面から取得したデータをパラメータとして渡す
    toRedirect({ state, rootGetters }) {
      const userName = rootGetters['auth/userName']
      
      router.push({ path: '/game/battle-result',
          query: {
            //URLとして渡すため文字列として扱う
             characterId: String(state.battleCharacterData.id),
             characterName: String(state.battleCharacterData.name),
             characterPass: String(state.battleCharacterData.pass),
             userName: userName,
             monsterCount: String(state.totalMonsterCount),
             totalTurn: String(state.totalTurn),
             totalDamage: String(state.totalDamage)
          }
      })
    }
  }
}
export default battleArea