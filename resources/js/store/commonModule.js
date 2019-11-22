const commonModule = {
  namespaced: true,
  state: {
    confirmationDisplay: false
  },
  mutations: {
    setConfirmationTrue(state) {
      state.confirmationDisplay = true
    },
    setConfirmationFalse(state) {
      state.confirmationDisplay = false
    }
  },
  actions: {
    openConfirmationDisplay({ commit }) {
      commit('setConfirmationTrue')
    },
    closeConfirmationDisplay({ commit }) {
      commit('setConfirmationFalse')
    }
  }
}
export default commonModule