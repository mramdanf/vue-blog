const state = {
  detail: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retypePassword: '',
  }
}

const actions = {
  submitSignUp({ commit }, userDetail) {
    commit('setUserDetail', userDetail);
  }
}

const mutations = {
  setUserDetail(state, userDetail) {
    state.detail = userDetail;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}