import matesAPI from '../../api/mates'
import * as types from '../mutation-types'

// initial state
const state = {
  mates: []
}

// getters
const getters = {
  sortedMates: state => state.mates.sort((itemA, itemB) =>
    // firstly sort for present flatmates
    itemA.isAway < itemB.isAway ||
    // secondly sort for alphabetical order
    itemA.nickName.toUpperCase() > itemB.nickName.toUpperCase())
}

// actions
const actions = {
  getAllMates ({ commit }) {
    matesAPI.getMates(mates => {
      commit(types.RECEIVE_MATES, { mates })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_MATES] (state, { mates }) {
    state.mates = mates
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
