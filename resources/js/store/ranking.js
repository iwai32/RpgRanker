import Axios from "axios"

const ranking = {
  namespaced: true,
  state: {
    rankingData: []
  },
  mutations: {
    setRankingData(state, data) {
      state.rankingData = data
    }
  },
  actions: {
    async getRankingData({ commit }) {
      const response = await axios.get('/api/ranking')

      commit('setRankingData', response.data)
    }
  }
}
export default ranking