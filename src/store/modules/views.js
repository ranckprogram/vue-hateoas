const state = {
  viewList: [],
}

const mutations = {
  viewList(state, data) {
    state.viewList = data;
  }
}

const actions = {
  getViewList({ commit }, data) {
    commit("cart", data)
  }
};

export default {
  state,
  actions,
  mutations
}