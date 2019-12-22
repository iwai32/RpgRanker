import { OK } from '../util.js'
const ranking = {
  namespaced: true,
  state: {
    rankingData: [],
    currentPage: 0,
    lastPage: 0
  },
  mutations: {
    setRankingData(state, data) {
      state.rankingData = data
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage
    },
    setLastPage(state, lastPage) {
      state.lastPage = lastPage
    }
  },
  actions: {
    async getRankingData({ commit }, pageNum) {
      const response = await axios.get(`/api/ranking/?page=${pageNum}`)

      if (response.status !== OK) {
        this.$store.commit('error/setCode', response.status)
        return false
      }

      commit('setRankingData', response.data.data)
      commit('setCurrentPage', response.data.current_page)
      commit('setLastPage', response.data.last_page)
    }
  }
}
export default ranking