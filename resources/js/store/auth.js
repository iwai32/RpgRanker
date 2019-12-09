import { OK } from '../util.js'
const auth = {
  namespaced: true,
  state: {
    user: null,
    apiStatus: null
  },
  getters: {
    check(state) {
      if (state.user === null) {
        return false
      } else {
        return true
      }
    },
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
    },
    setApiStatus(state, status) {
      state.apiStatus = status
    }
  },
  actions: {
    async register({ commit }, data) {
      const response = await axios.post('/api/register', data)
      commit('setUser', response.data)
    },
    async login({ commit }, data) {
      commit('setApiStatus', null)
      const response = await axios.post('/api/login', data).catch(err => err.response || err)

      if(response.status === OK) {
        commit('setApiStatus', true)
        commit('setUser', response.data)
        return false
      }

      commit('setApiStatus', false)
      commit('error/setCode', response.status, { root: true })
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