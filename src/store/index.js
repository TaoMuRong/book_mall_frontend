/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_TOKEN,
  SET_ROLE
} from './mutations-types'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    asyncRoutes: [],
    role: '',

  },
  getters: {
    getToken(state) {
      return state.token ? state.token : localStorage.getItem("token")
    },
    getRole(state) {
      return state.role ? state.role : localStorage.getItem("role")
    },
  },
  mutations: {
    [SET_TOKEN](state, token) {
      state.token = token
      localStorage.setItem("token", token)
    },
    [SET_ROLE](state, role) {
      state.role = role
      localStorage.setItem("role", role)
    },
  },
  actions: {

  },
  modules: {}
})