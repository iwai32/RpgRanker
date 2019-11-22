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
    monsterId: 1,
    monsterIndex: 0,
  },
  mutations: {
    randomNormalMonsterIndex(state) {
      state.monsterIndex = 1 + Math.floor(Math.random() * (state.monsterList.length-1))
    },
    demonDescentCeremony(state) {
      state.monsterIndex = 0
    }
  },
  actions: {
    getIndexRandomMonster({ commit }) {
      commit('randomNormalMonsterIndex')
    },
    descendSatan({ commit }) {
      commit('demonDescentCeremony')
    }
  }
}
export default battleArea