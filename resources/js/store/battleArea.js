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
    characterHp: "",
    characterIndex: 0,
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
    battleCharacterData(state, getters, rootState) {
      return rootState.characterSelect.characterList[state.characterIndex]
    },
    firstMonsterAppearanceLog(state, getters) {
      return state.battleLog = getters.battleMonsterData.name + 'があらわれた！<br>'
    },
    battleMonsterData(state) {
      return state.monsterList[state.monsterIndex]
    }
  },
  mutations: {
    makeParameterCharacterIndex(state, characterIndex) {
      state.characterIndex = characterIndex
    },
    battleCharacterHp(state) {
      state.characterHp = this.getters['battleArea/battleCharacterData'].hp
    },
    randomNormalMonsterIndex(state) {//あとで修正するかも
      state.monsterIndex = 1 + Math.floor(Math.random() * (state.monsterList.length-1))
    },
    setBattleLog(state, log) {
      state.battleLog += log + '<br>'
    },
    setSpGauge(state) {
      this.dispatch('battleArea/characterGaugeFilter')
      if (state.spSkillGaugeCircle >= state.maxSpSkillGaugeCircle) {
        state.spSkillGaugeCircle = state.maxSpSkillGaugeCircle
        state.hasSpSkill = true
      }
    },
    setGaugePerCharacter(state) {
      if (this.getters['battleArea/battleCharacterData'].name === '勇者') {
        state.spSkillGaugeCircle += state.maxSpSkillGaugeCircle / 8
      } else {
        state.spSkillGaugeCircle += state.maxSpSkillGaugeCircle / 5
      }
    },
    setSkillEffectToTrue(state) {
      state.isSkillEffect = true
    },
    setSkillEffectToFalse(state) {
      state.isSkillEffect = false
    },
    setSpSkillToFalse(state) {
      state.spSkillGaugeCircle = 0
      state.hasSpSkill = false
    },
    popSkillEffect(state, attribute) {
      this.dispatch('battleArea/makeSkillEffectOn')
      state.skillEffectAttribute = attribute
      setTimeout(() => {
        //gif画像のループ処理をリセットする
        state.skillEffectAttribute = ""
      }, 1000)

      setTimeout(() => {
        this.dispatch('battleArea/enemyAttack')
      }, 1000)
    },
    battleMonsterHp(state) {
      state.monsterHp = this.getters['battleArea/battleMonsterData'].hp
    },
    reduceBattleMonsterHp(state) {
      state.monsterHp -= state.myAttackResult

      if (state.monsterHp <= 0) {
        this.dispatch('battleArea/addBattleLog', this.getters['battleArea/battleMonsterData'].name + 'を倒した！')
        setTimeout(() => {
          this.dispatch('battleArea/nextMonster')
        }, 1000)

        //討伐数を一増やす,次のモンスターを表示する五体倒してるならリダイレクト
        state.totalMonsterCount++
        console.log('モンスター討伐数' + state.totalMonsterCount)

        if (state.totalMonsterCount === 5) {
          console.log('サタンを倒した!!!!')//リダイレクト
          this.dispatch('battleArea/dataSaveAndRedirect')
        }
      }
    },
    damageCalculatingResult(state, damageData) {
      //モンスターの弱点を計算
      if (this.getters['battleArea/battleMonsterData'].weak.includes(damageData.attribute)) {
        state.myAttackResult = damageData.damage * 2
      } else {
        state.myAttackResult = damageData.damage
      }
      //攻撃にランダム性を与える
      state.myAttackResult += Math.floor(Math.random() * 10)
    },
    demonDescentCeremony(state) {
      state.monsterIndex = 0
    },
    executeEnemyAttack(state) {
      //モンスターが使用するスキルをランダムにする
      var monsterSkill = this.getters['battleArea/battleMonsterData'].skills[
         Math.floor(Math.random() * this.getters['battleArea/battleMonsterData'].skills.length)
        ]
      //モンスターが与えるダメージをランダムにする
      var damageResult = monsterSkill.power + Math.floor(Math.random() * 10)

      //自身のエフェクトウィンドウを閉じる
      this.dispatch('battleArea/makeSkillEffectOff')

      //登場時は攻撃しない
      if (state.monsterHp === this.getters['battleArea/battleMonsterData'].hp) {
        return
      } else {
        state.monsterMotion = true
        setTimeout(() => {
          state.monsterMotion = false
        },300)
        
        this.dispatch('battleArea/addBattleLog',
         `${this.getters['battleArea/battleMonsterData'].name}の${monsterSkill.name}！
         <br>${this.getters['battleArea/battleCharacterData'].name}は${damageResult}のダメージをうけた！`
        )
        //自身のhpを引く、0以下になったら,負けてしまったと表示し、result画面へ遷移する
        state.characterHp -= damageResult
      }

      if (state.characterHp <= 0) {
        state.characterHp = 0
        this.dispatch('battleArea/dataSaveAndRedirect')
      }
    },
    recoverCharacter(state) {
      this.dispatch('commonModule/closeConfirmationDisplay')
      this.dispatch('battleArea/increaseGauge')
      this.dispatch('battleArea/addBattleLog',`${this.getters['battleArea/battleCharacterData'].name}はHPを回復した！`)

      state.recoveryUseTimes--
      state.characterHp = this.getters['battleArea/battleCharacterData'].hp
      state.totalTurn++
    },
    setTotalData(state) {
      state.totalTurn++
      state.totalDamage += state.myAttackResult
      console.log(state.totalTurn, state.totalDamage, state.totalMonsterCount)
    },
    initializeData(state) {
      state.totalTurn = 0
      state.totalDamage = 0
      state.totalMonsterCount = 0
      state.spSkillGaugeCircle = 0
      state.recoveryUseTimes = 5
      state.hasSpSkill = false
    }
  },
  actions: {
    //キャラクターを決めるパラメータ
    setCharacterIndex({ commit, rootState }) {
      var characterIndex = rootState.route.params.characterIndex
      commit('makeParameterCharacterIndex', characterIndex)
    },
    //キャラクターのHpをセットする
    setCharacterHp({ commit }) {
      commit('battleCharacterHp')
    },
    setIndexRandomMonster({ commit }) {
      commit('randomNormalMonsterIndex')
    },
    //バトルログ
    addBattleLog({ commit }, log) {
      commit('setBattleLog', log)
    },
    //ゲージ増加
    increaseGauge({ commit }) {
      commit('setSpGauge')
    },
    characterGaugeFilter({ commit }) {
      commit('setGaugePerCharacter')
    },
    //スキルエフェクト
    makeSkillEffectOn({ commit }) {
      commit('setSkillEffectToTrue')
    },
    makeSkillEffectOff({commit}) {
      commit('setSkillEffectToFalse')
    },
    //spスキル
    detachSpSkill({ commit }) {
      commit('setSpSkillToFalse')
    },
    //自分の攻撃
    myAttack({ state, getters, dispatch }, skillData) {
      var damageData = { damage: skillData.damage, attribute: skillData.attribute }
      dispatch('damageCalculation', damageData)
      dispatch('addBattleLog', skillData.skillName + '！<br>' + getters.battleMonsterData.name + 'に' + state.myAttackResult + 'のダメージ！')
      dispatch('getTotalData')
      dispatch('reduceMonsterHp')
    },
    //スキルのエフェクト
    showSkillEffect({ commit }, attribute) {
      commit('popSkillEffect', attribute)
    },
    //モンスターのHPをセットする
    setMonsterHp({ commit }) {
      commit('battleMonsterHp')
    },
    //モンスターのHPを減らす
    reduceMonsterHp({ commit }) {
      commit('reduceBattleMonsterHp')
    },
    // //ダメージ計算
    damageCalculation({ commit }, damageData) {
      commit('damageCalculatingResult', damageData)
    },
    //次のモンスターを出現させる
    nextMonster( { state, getters, dispatch } ) {
      //4体をランダムで出現させ、討伐数が4体なら魔王を出現させる。
      if (state.totalMonsterCount === 4) {
        dispatch('descendSatan')
      } else {
        dispatch('setIndexRandomMonster')
      }
      dispatch('addBattleLog', getters.battleMonsterData.name + 'があらわれた！')
      dispatch('setMonsterHp')
    },
    //サタン降臨
    descendSatan({ commit }) {
      commit('demonDescentCeremony')
    },
    //敵の攻撃
    enemyAttack( { commit }) {
      commit('executeEnemyAttack')
    },
    //キャラクターのhpの回復
    toRecover( { commit } ) {
      commit('recoverCharacter')
    },
    //合計データを取得する
    getTotalData( { commit }) {
      commit('setTotalData')
    },
    //DBへデータを保存し、リザルト画面へ遷移する
    dataSaveAndRedirect({ dispatch }) {
      //DBへ討伐数,合計ターン,合計ダメージ,使用キャラクター,ユーザーネームを保存

      dispatch('toRedirect')
    },
    //リザルト画面へ遷移する。リザルト画面にはバトル画面から取得したデータをパラメータとして渡す
    toRedirect({ state, getters }) {
      router.push({ path: '/game/battle-result',
          query: {
             characterIndex: state.characterIndex,
             userName: 'ユーザーネ',
             monsterCount: state.totalMonsterCount,
             totalTurn: state.totalTurn,
             totalDamage: state.totalDamage
          }
      })
    },
    //データをリセットする
    resetData( { commit }) {
      commit('initializeData')
    }
  }
}
export default battleArea