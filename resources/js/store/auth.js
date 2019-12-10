import { OK, UNPROCESSABLE_ENTITY, CREATED } from '../util.js'
const auth = {
  namespaced: true,
  state: {
    user: null,
    apiStatus: null,
    loginErrorMessages: null,
    registerErrorMessages: null
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
    },
    setLoginErrorMessages(state, messages) {
      state.loginErrorMessages = messages
    },
    setRegisterErrorMessages (state, messages) {
      state.registerErrorMessages = messages
    }
  },
  actions: {
    //会員登録
    async register({ commit }, data) {
      commit('setApiStatus', null)
      const response = await axios.post('/api/register', data)

      if(response.status === CREATED) {
        commit('setApiStatus', true)
        commit('setUser', response.data)
        return false
      }
      
      commit('setApiStatus', false)

      if(response.status === UNPROCESSABLE_ENTITY) {
        commit('setRegisterErrorMessages', response.data.errors)
      } else {
        commit('error/setCode', response.status, { root: true })
      }
    },
    //ログイン
    async login({ commit }, data) {
      commit('setApiStatus', null)
      const response = await axios.post('/api/login', data)

      if(response.status === OK) {
        commit('setApiStatus', true)
        commit('setUser', response.data)
        return false
      }

      commit('setApiStatus', false)

      if(response.status === UNPROCESSABLE_ENTITY) {
        commit('setLoginErrorMessages', response.data.errors)
      } else {
        commit('error/setCode', response.status, { root: true })
      }
    },
    //ログアウト
    async logout({ commit }) {
      commit('setApiStatus', null)
      const response = await axios.post('/api/logout')

      if(response.status === OK) {
        commit('setApiStatus', true)
        commit('setUser', null)
        return false
      }

      commit('setApiStatus', false)
      commit('error/setCode', response.status, { root: true })
    },
    //ログインユーザーチェック
    async currentUser({ commit }) {
      commit('setApiStatus', null)
      const response = await axios.get('/api/user')
      const user = response.data || null

      if(response.status === OK) {
        commit('setApiStatus', true)
        commit('setUser', user)
        return false
      }

      commit('setApiStatus', false)
      commit('error/setCode', response.status, { root: true })
    }
  }
}
export default auth