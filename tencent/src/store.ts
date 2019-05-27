import Vue from 'vue';
import Vuex from 'vuex';
import { Commit } from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasLogin: false, // 登录态
  },
  mutations: {
    // 登录态
    
    getLoginStatus: (state: any, hasLogin: boolean) => {
      state.hasLogin = hasLogin;
    },
  },
  getters: {
    // 登录态
    hasLogin: (state: any) => state.hasLogin,
  },
  actions: {
    // 登录态
    getLoginStatus: (context: { commit: Commit }, hasLogin: any) => context.commit('getLoginStatus', hasLogin),
  },
});
