import Vue from 'vue'
import Vuex from 'vuex'

import characterSelect from './characterSelect.js'
import battleArea from './battleArea.js'
import commonModule from './commonModule.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    characterSelect,
    battleArea,
    commonModule
  }
})
export default store