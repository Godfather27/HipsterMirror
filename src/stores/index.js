import Vue from 'vue'
import Vuex from 'vuex'
import mates from './modules/mates'
import weather from './modules/weather'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mates,
    weather
  }
})
