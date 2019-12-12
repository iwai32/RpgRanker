const characterSelect = {
  namespaced: true,
  state: {
    characterList: null,
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
    setCharacterList(state, data) {
      state.characterList = data
    },
    setCharacterId(state, id) {
      state.characterId = id.characterId
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
    async getCharacterList({ commit }) {
      const response = await axios.get('/api/character-list')

      console.log(response.data)
      commit('setCharacterList', response.data)
    },
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