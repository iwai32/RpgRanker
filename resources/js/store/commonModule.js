const commonModule = {
  namespaced: true,
  state: {
    confirmationDisplay: false
  },
  mutations: {
    openConfirmationDisplay(state) {
      state.confirmationDisplay = true
    },
    closeConfirmationDisplay(state) {
      state.confirmationDisplay = false
    }
  }
}
export default commonModule