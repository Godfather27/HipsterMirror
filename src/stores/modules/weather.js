import weatherAPI from '../../api/weather'
import * as types from '../mutation-types'

// initial state
const state = {
  weather: {}
}

// getters
const getters = {
  weather: state => state.weather
}

// actions
const actions = {
  getCurrentWeather ({ commit }) {
    weatherAPI.getWeather(weather => {
      console.log(weather)
      commit(types.RECEIVE_WEATHER, { weather })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_WEATHER] (state, { weather }) {
    state.weather = weather
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
