import Vue from 'vue'
import Vuex from 'vuex'
import mates from './modules/mates'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mates
  }
})
