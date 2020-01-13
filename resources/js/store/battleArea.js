import router from '../router'//リダイレクト用
import { OK } from '../util.js'
const battleArea = {
  namespaced: true,
  state: {
    //キャラクター
    characterHp: null,
    characterId: null,
    battleCharacterData: [],
    spSkillGaugeCircle: 0,
    maxSpSkillGaugeCircle: 100,
    hasSpSkill: false,
    recoveryUseTimes: 5,
    //モンスター
    monsterHp: null,
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
    setBattleMonster(state, data) {
      state.battleMonsterData = data
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
    reduceBattleMonsterHp(state, myAttackResult) {
      state.monsterHp -= myAttackResult
    },
    incrementMonsterCount(state) {
      state.totalMonsterCount++
    },
    setSkillEffectAttribute(state, attribute) {
      state.skillEffectAttribute = attribute
    },
    resetSkillEffectAttribute(state) {
      //透明な画像を呼び出す
      state.skillEffectAttribute = "effect-off"
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
    setTotalData(state, myAttackResult) {
      state.totalTurn++
      state.totalDamage += myAttackResult
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
    async getBattleCharacterData({ commit,state, rootState}) {
      state.characterId = { id: rootState.route.params.characterId }
      const response = await axios.get('/api/battle-character', { params: state.characterId} )

      if (response.status !== OK) {
        this.$store.commit('error/setCode', response.status)
        return false
      }

      commit('setBattleCharacterData', response.data)
    },
    //バトルモンスター
    async getRandomMonster({ commit }) {
      const response = await axios.get('/api/battle-monster')
      if (response.status !== OK) {
        this.$store.commit('error/setCode', response.status)
        return false
      }
      commit('setBattleMonster', response.data)
    },
    //サタン降臨
    async descendSatan({ commit }) {
      const response = await axios.get('/api/battle-satan')
      if (response.status !== OK) {
        this.$store.commit('error/setCode', response.status)
        return false
      }
      commit('setBattleMonster', response.data)
    },
    //スキル使用
    async useSkill({ dispatch, commit, state }, skillData) {
      skillData['characterId'] = state.characterId.id

      const response = await axios.post('/api/use-skill', { character:skillData, monster:state.battleMonsterData })

      if (response.data === "") {
        router.push({ path: '/500'})
        return false
      }

      //保留
      dispatch('increaseGauge')
      commit('addBattleLog', skillData.name + '！<br>' + state.battleMonsterData.name + 'に' + response.data['myAttackResult'] + 'のダメージ！')
      commit('setTotalData', response.data['myAttackResult'])
      dispatch('reduceMonsterHp', response.data['myAttackResult'])
      dispatch('showSkillEffect', skillData['attribute'])
    },

    //SPスキル
    async useSpSkill({ dispatch, commit, state }, skillData) {
      skillData['characterId'] = state.characterId.id

      const response = await axios.post('/api/use-skill', { character:skillData, monster:state.battleMonsterData })

      if (response.data === "") {
        router.push({ path: '/500'})
        return false
      }

      //保留
      commit('addBattleLog', '必殺！' + skillData.name + '！<br>' + state.battleMonsterData.name + 'に' + response.data['myAttackResult'] + 'のダメージ！')
      commit('setTotalData', response.data['myAttackResult'])
      dispatch('reduceMonsterHp', response.data['myAttackResult'])
      dispatch('showSkillEffect', 'sp-' + skillData['attribute'])
      commit('detachSpSkill')
    },
    //ゲージ増加
    increaseGauge({ state, commit, dispatch }) {
      dispatch('characterGaugeFilter')
      if (state.spSkillGaugeCircle >= state.maxSpSkillGaugeCircle) {
        commit('setSpGauge')
      }
    },
    // //ゲージの設定
    characterGaugeFilter({ state, commit }) {
      if (state.battleCharacterData.name === '勇者') {
        commit('setBraveGauge')
      } else {
        commit('setCharacterGauge')
      }
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
    reduceMonsterHp({ state, commit, dispatch }, myAttackResult) {
      commit('reduceBattleMonsterHp', myAttackResult)

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
    //次のモンスターを出現させる
    nextMonster( { state, commit, dispatch } ) {
      //4体をランダムで出現させ、討伐数が4体なら魔王を出現させる。
      if (state.totalMonsterCount === 4) {
        dispatch('descendSatan')
      } else {
        dispatch('getRandomMonster')
      }

      commit('setMonsterHp')
    },
    //敵の攻撃
    async enemyAttack( { state, commit, dispatch }) {
      const response = await axios.post('/api/enemy-attack', { monsterId:state.battleMonsterData.id })
      if (response.data === "") {
        router.push({ path: '/500'})
        return false
      }

      //登場時は攻撃しない
     if (state.monsterHp === state.battleMonsterData.hp) {
       return
     } else {
       commit('beginMonsterMotion')

       setTimeout(() => {
        commit('endMonsterMotion')
       },300)

       commit('addBattleLog',
        `${response.data['monsterName']}の${response.data['monsterSkill']['name']}！
        <br>${state.battleCharacterData.name}は${response.data['damageResult']}のダメージをうけた！`
       )
       //自身のhpを引く、0以下になったら,負けてしまったと表示し、result画面へ遷移する
       commit('reduceBattleCharacterHp', response.data['damageResult'])
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
    saveDataAndRedirect({ dispatch, rootState }) {
      // 認証しているならデータを保存する
      if (rootState.auth.user) {
        dispatch('saveBattleData')
      }
      dispatch('toRedirect')
    },
    async saveBattleData({ state, rootState }) {
      const battleData = {
        'user_id': rootState.auth.user.id,
        'character_id': state.battleCharacterData.id,
        'monster_count': state.totalMonsterCount,
        'total_turn': state.totalTurn,
        'total_damage': state.totalDamage
      }
      const response = await axios.post('/api/save-battle-data', battleData)

      if (response.status !== OK) {
        this.$store.commit('error/setCode', response.status)
        return false
      }
      
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