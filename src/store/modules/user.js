import auth from '../../api/auth';

const state = {
  detail: {
    uid: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retypePassword: '',
  },
  userAuthError: '',
};

const actions = {
  submitSignUp({ commit }, userDetail) {
    commit('setUserDetail', userDetail);
    auth.fireBaseUserSignUp(
      () => {},
      errorMassage => commit('setAuthError', errorMassage),
      userDetail.email,
      userDetail.password,
    );
  },
};

const mutations = {
  setUserDetail(state, userDetail) {
    state.detail = userDetail;
  },
  setAuthError(state, errorMassage) {
    state.userAuthError = errorMassage;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
