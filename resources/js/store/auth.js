import Axios from "axios"

const auth = {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    check: state => !! state.user,
    userName(state) {
      if(state.user === null) {
        return 'Guest'
      } else {
        return state.user.name
      }
    }
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
    },
    async currentUser({ commit }) {
      const response = await axios.get('/api/user')
      const user = response.data || null
      commit('setUser', user)
    }
  }
}
export default auth