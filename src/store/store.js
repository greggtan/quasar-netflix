const state = { episodesArray: [], counter: 0 }
const mutations = {
//  replace episodesArray everytime in details page to load into episodes page
  addEpisodesArray: (state, data) => {
    state.episodesArray = data
  }
}
const actions = {}

const getters = {
  getEpisodesArray: (state) => {
    return state.episodesArray
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
