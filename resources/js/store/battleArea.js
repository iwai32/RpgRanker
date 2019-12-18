import router from '../router'//リダイレクト用
import { promised, reject } from 'q'
import { resolve } from 'path'
const battleArea = {
  namespaced: true,
  state: {
    //モンスターリスト
    monsterList: [
      {
        id: 1,
        name: '大魔王サタン',
        pass: 'satan',
        hp: 800,
        weak: ['holy'],
        field: 'hell',
        skills: [
          { id: 1, name: '悪の波動', power: 120 },
          { id: 2, name: '地獄の大鎌', power: 90 },
          { id: 3, name: '闇一閃', power: 180 },
          { id: 4, name: '邪悪な眼差し', power: 80 }
        ]
      },
      {
        id: 2,
        name: 'ダークナイト',
        pass: 'dark-knight',
        hp: 420,
        weak: ['thunder', 'blow'],
        field: 'tower',
        skills: [
          { id: 1, name: '地獄斬り', power: 90 },
          { id: 2, name: '回転斬り', power: 40 },
          { id: 3, name: '刺突', power: 70 },
          { id: 4, name: '切り上げ', power: 80 }
        ]
      },
      {
        id: 3,
        name: 'デーモン',
        pass: 'demon',
        hp: 440,
        weak: ['thunder', 'slash'],
        field: 'tower',
        skills: [
          { id: 1, name: '不浄の爪', power: 80 },
          { id: 2, name: '炎の息', power: 60 },
          { id: 3, name: '噛みつき', power: 40 },
          { id: 4, name: '切り裂き', power: 60 }
        ]
      },
      {
        id: 4,
        name: 'プロミネンス',
        pass: 'prominence',
        hp: 340,
        weak: ['holy', 'ice'],
        field: 'purgatory',
        skills: [
          { id: 1, name: '超爆発', power: 140 },
          { id: 2, name: '炎獄握', power: 100 },
          { id: 3, name: '火球', power: 60 },
          { id: 4, name: '熱風', power: 40 }
        ]
      },
      {
        id: 5,
        name: 'イフリート',
        pass: 'ifrit',
        hp: 500,
        weak: ['ice', 'thunder', 'slash'],
        field: 'purgatory',
        skills: [
          { id: 1, name: '灼熱の息吹', power: 160 },
          { id: 2, name: '喰いちぎる', power: 100 },
          { id: 3, name: '咆哮', power: 60 },
          { id: 4, name: '尻尾を振り回す', power: 40 }
        ]
      },
      {
        id: 6,
        name: 'デュラハン',
        pass: 'dullahan',
        hp: 480,
        weak: ['flame', 'ice'],
        field: 'hell',
        skills: [
          { id: 1, name: '稲妻突き', power: 120 },
          { id: 2, name: '突進', power: 100 },
          { id: 3, name: '武器を振り回す', power: 80 },
          { id: 4, name: '死の嘶き', power: 100 }
        ]
      },
      {
        id: 7,
        name: 'デス',
        pass: 'death',
        hp: 380,
        weak: ['flame', 'holy'],
        field: 'hell',
        skills: [
          { id: 1, name: '地獄の大鎌', power: 160 },
          { id: 2, name: '八つ裂き', power: 120 },
          { id: 3, name: '武器を振り回す', power: 80 },
          { id: 4, name: '呪詛', power: 80 }
        ]
      },
      {
        id: 8,
        name: 'ノスフェラン',
        pass: 'nospheran',
        hp: 420,
        weak: ['flame', 'holy'],
        field: 'hell',
        skills: [
          { id: 1, name: '死の息吹', power: 140 },
          { id: 2, name: '不浄の爪', power: 80 },
          { id: 3, name: '不意打ち', power: 40 },
          { id: 4, name: '呪詛', power: 80 }
        ]
      }
    ],
    characterHp: null,
    battleCharacterData: [],
    spSkillGaugeCircle: 0,
    maxSpSkillGaugeCircle: 100,
    hasSpSkill: false,
    myAttackResult: 0,
    recoveryUseTimes: 5,
    //モンスター
    monsterHp: "",
    monsterId: 1,
    monsterIndex: 0,
    monsterMotion: false,
    battleLog: '',
    isSkillEffect: false,
    skillEffectAttribute: "",
    //集計データ
    totalTurn: 0,
    totalDamage: 0,
    totalMonsterCount: 0
  },
  getters: {
    firstMonsterAppearanceLog(state, getters) {
      return state.battleLog = getters.battleMonsterData.name + 'があらわれた！<br>'
    },
    battleMonsterData(state) {
      return state.monsterList[state.monsterIndex]
    }
  },
  mutations: {
    setBattleCharacterData(state, data) {
      state.battleCharacterData = data
    },
    setCharacterHp(state, hpValue) {
      state.characterHp = hpValue
    },
    setIndexRandomMonster(state) {
      state.monsterIndex = 1 + Math.floor(Math.random() * (state.monsterList.length-1))
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
      state.monsterHp = this.getters['battleArea/battleMonsterData'].hp
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
      state.monsterIndex = 0
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
    //遷移時一度データをリセットする
    resetData(state) {
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
    myAttack({ state, getters, commit, dispatch }, skillData) {
      let damageData = { damage: skillData.damage, attribute: skillData.attribute }
      dispatch('damageCalculation', damageData)
      commit('addBattleLog', skillData.skillName + '！<br>' + getters.battleMonsterData.name + 'に' + state.myAttackResult + 'のダメージ！')
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
    reduceMonsterHp({ state, getters, commit, dispatch }) {
      commit('reduceBattleMonsterHp')

      if (state.monsterHp <= 0) {
        commit('addBattleLog', getters.battleMonsterData.name + 'を倒した！')
        setTimeout(() => {
          dispatch('nextMonster')
        }, 1000)

        //討伐数を一増やす,次のモンスターを表示する五体倒してるならリダイレクト
        commit('incrementMonsterCount')

        if (state.totalMonsterCount === 5) {
          dispatch('dataSaveAndRedirect')
        }
      }
    },
    //ダメージ計算
    damageCalculation({ getters, commit }, damageData) {
      //モンスターの弱点を計算
      if (getters.battleMonsterData.weak.includes(damageData.attribute)) {
        commit('weakDamageToMonsters', damageData)
      } else {
        commit('damageToMonsters', damageData)
      }
      //攻撃にランダム性を与える
      commit('addRandomDamage')
    },
    //次のモンスターを出現させる
    nextMonster( { state, getters, commit } ) {
      //4体をランダムで出現させ、討伐数が4体なら魔王を出現させる。
      if (state.totalMonsterCount === 4) {
        commit('descendSatan')
      } else {
        commit('setIndexRandomMonster')
      }

      commit('addBattleLog', getters.battleMonsterData.name + 'があらわれた！')
      commit('setMonsterHp')
    },
    //敵の攻撃
    enemyAttack( { state, getters, commit, dispatch }) {
      //モンスターが使用するスキルをランダムにする
      let monsterSkill = getters.battleMonsterData.skills[
        Math.floor(Math.random() * getters.battleMonsterData.skills.length)
      ]
      //モンスターが与えるダメージをランダムにする
      let damageResult = monsterSkill.power + Math.floor(Math.random() * 10)

      //登場時は攻撃しない
     if (state.monsterHp === getters.battleMonsterData.hp) {
       return
     } else {
       commit('beginMonsterMotion')

       setTimeout(() => {
        commit('endMonsterMotion')
       },300)

       commit('addBattleLog',
        `${getters.battleMonsterData.name}の${monsterSkill.name}！
        <br>${state.battleCharacterData.name}は${damageResult}のダメージをうけた！`
       )
       //自身のhpを引く、0以下になったら,負けてしまったと表示し、result画面へ遷移する
       commit('reduceBattleCharacterHp', damageResult)
     }

     if (state.characterHp <= 0) {
       commit('lostCharacterHp')
       dispatch('dataSaveAndRedirect')
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
    dataSaveAndRedirect({ dispatch }) {
      //DBへ討伐数,合計ターン,合計ダメージ,使用キャラクター,ユーザーネームを保存
      dispatch('toRedirect')
    },
    //リザルト画面へ遷移する。リザルト画面にはバトル画面から取得したデータをパラメータとして渡す
    toRedirect({ state, getters, rootGetters }) {
      const userName = rootGetters['auth/userName']
      
      router.push({ path: '/game/battle-result',
          query: {
            //URLとして渡すため文字列として扱う
             characterIndex: String(state.characterIndex),
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