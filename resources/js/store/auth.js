import Axios from "axios"

const auth = {
  namespaced: true,
  state: {
    user: null
  },
  getters: {

  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async register({ commit }, data) {
      const response = await axios.post('/api/register', data)
      commit('setUser', response.data)
    },
    async login({ commit }, data) {
      const response = await axios.post('/api/login', data)
      commit('setUser', response.data)
    },
    async logout({ commit }) {
      const response = await axios.post('/api/logout')
      commit('setUser', null)
    }
  }
}
export default auth