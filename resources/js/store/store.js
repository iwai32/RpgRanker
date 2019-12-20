import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth.js'
import error from './error.js'
import characterSelect from './characterSelect.js'
import battleArea from './battleArea.js'
import ranking from './ranking.js'
import commonModule from './commonModule.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    error,
    characterSelect,
    battleArea,
    ranking,
    commonModule
  }
})
export default store