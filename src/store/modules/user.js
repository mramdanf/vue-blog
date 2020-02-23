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
      uid => commit('setUid', uid),
      errorMassage => commit('setAuthError', errorMassage),
      userDetail,
    );
  },
};

const mutations = {
  setUserDetail(state, userDetail) {
    state.detail = {
      ...userDetail,
      uid: '',
    };
  },
  setAuthError(state, errorMassage) {
    state.userAuthError = errorMassage;
  },
  unSetAuthError(state) {
    state.userAuthError = '';
  },
  setUid(state, uid) {
    state.detail.uid = uid;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
