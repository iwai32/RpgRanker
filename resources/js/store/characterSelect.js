const characterSelect = {
  namespaced: true,
  state: {
    characterList: [{}],
    characterId: 1,
    startCharacterNum: 0,
    endCount: 3//キャラクター画面の最大表示数
  },
  getters: {
    //キャラクターごとの配列インデックス
    characterIndex(state) {
      return state.characterId - 1
    },
    characterDisplayNumber(state) {
      return state.characterList
             .slice(state.startCharacterNum, state.endCount)
    }
  },
  mutations: {
    setCharacterList(state, data) {
      state.characterList = data
    },
    selectedCharacter(state, characterId) {
      state.characterId = characterId
    },
    nextCharacter(state) {
      state.startCharacterNum++
      state.endCount++
    },
    prevCharacter(state) {
      state.startCharacterNum--
      state.endCount--
    }
  },
  actions: {
    async getCharacterList({ commit }) {
      const response = await axios.get('/api/character-list')

      commit('setCharacterList', response.data)
    }
  }
}
export default characterSelect