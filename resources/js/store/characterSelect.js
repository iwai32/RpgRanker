const characterSelect = {
  namespaced: true,
  state: {
    characterList: [
      {
        id: 1,
        name: '剣士',
        pass: 'swords-man',
        profile: '剣術に長け、数多の剣技で敵を切り裂く。冷静沈着に相手の行動を見極め、常に上手を行く立ち回りをする。',
        hp: 420,
        skills: [
          { id: 1, name: '渾身の一刀', power: 140, attribute: 'slash', type: 'special' },
          { id: 2, name: '剣舞', power: 80, attribute: 'slash', type: 'normal' },
          { id: 3, name: '雷鳴斬', power: 80, attribute: 'thunder', type: 'normal' },
          { id: 4, name: '地砕き', power: 70, attribute: 'blow', type: 'normal' }
        ]
      },
      {
        id: 2,
        name: '武闘家',
        pass: 'worrior',
        profile: '肉体を武器とし、素早い身のこなしと体術で相手を翻弄する。自分より強い相手と戦うことを求めている。',
        hp: 440,
        skills: [
          { id: 1, name: '百裂拳', power: 140, attribute: 'blow', type: 'special' },
          { id: 2, name: '正拳突き', power: 80, attribute: 'blow', type: 'normal' },
          { id: 3, name: '爆炎脚', power: 80, attribute: 'flame', type: 'normal' },
          { id: 4, name: '真空波', power: 70, attribute: 'slash', type: 'normal' }
        ]
      },
      {
        id: 3,
        name: '魔法使い',
        pass: 'witch',
        profile: '魔力を駆使して敵を倒す氷呪文が得意な魔法使い。不死の呪いにかかっており、呪いを解く方法を探している。',
        hp: 380,
        skills: [
          { id: 1, name: '凍える吹雪', power: 140, attribute: 'ice', type: 'special' },
          { id: 2, name: '氷撃', power: 80, attribute: 'ice', type: 'normal' },
          { id: 3, name: '乱風刃', power: 80, attribute: 'slash', type: 'normal' },
          { id: 4, name: '石の弾丸', power: 70, attribute: 'blow', type: 'normal' }
        ]
      },
      {
        id: 4,
        name: '勇者',
        pass: 'brave',
        profile: '生まれ持った才能と、勇敢さをもって敵と戦う。自身の出生の秘密と故郷を滅ぼした魔王を倒すため旅をしている。',
        hp: 400,
        skills: [
          { id: 1, name: '聖一閃', power: 200, attribute: 'holy', type: 'special' },
          { id: 2, name: '滅魔斬', power: 80, attribute: 'holy', type: 'normal' },
          { id: 3, name: '紫電', power: 80, attribute: 'thunder', type: 'normal' },
          { id: 4, name: '炎槍', power: 70, attribute: 'flame', type: 'normal' }
        ]
      }
    ],
    characterId: 1,
    startCharacterNum: 0,
    endCount: 3
  },
  getters: {
    characterIndex(state) {
      return state.characterId - 1
    },
    characterDisplayNumber(state) {
      return state.characterList
             .slice(state.startCharacterNum, state.endCount)
    }
  },
  mutations: {
    setCharacterId(state, payload) {
      state.characterId = payload.characterId
    },
    nextCharacterNumber(state) {
      state.startCharacterNum++
      state.endCount++
    },
    prevCharacterNumber(state) {
      state.startCharacterNum--
      state.endCount--
    }
  },
  actions: {
    selectedCharacter({ commit }, characterId) {
      commit('setCharacterId', { characterId })
    },
    nextCharacter({ commit }) {
      commit('nextCharacterNumber')
    },
    prevCharacter({ commit }) {
      commit('prevCharacterNumber')
    }
  }
}
export default characterSelect