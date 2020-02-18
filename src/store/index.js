import Vue from 'vue';
import Vuex from 'vuex';
import userDetail from './userDetail'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userDetail,
  }
})

export default store;