import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    gender: '',
    message: '',
    year:'',
    month:'',
    day:'',
    join:'',
    surgery:'',
    sick: ''
  },
  getters: {
    gender(state) {
      return state.gender
    },
    message(state) {
      return state.message
    },
    year(state) {
      return state.year
    },
    month(state) {
      return state.month
    },
    day(state) {
      return state.day
    },
    join(state) {
      return state.join
    },
    surgery(state) {
      return state.surgery
    },
    sick(state) {
      return state.sick
    },
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message
    },
    setYear(state, payload) {
      state.year = payload.year
    },
    setMonth(state, payload) {
      state.month = payload.month
    },
    setDay(state, payload) {
      state.day = payload.day
    },
    setJoin(state, payload) {
      state.join = payload.join
    },
    setSurgery(state, payload) {
      state.surgery = payload.surgery
    },
    setSick(state, payload) {
      state.sick = payload.sick
    },
    setGender(state, payload) {
      state.gender = payload.gender
    },
  },
  actions: { 
    doGender({commit}, gender) {commit('setGender', { gender})},
    doUpdate({commit}, message) {commit('setMessage', { message})},
    doDown({commit}, replay) {commit('setReplay', { replay})},
    doMonth({commit}, month) {commit('setMonth', { month})},
    doYear({commit}, year) {commit('setYear', { year})},
    doDay({commit}, day) {commit('setDay', { day})},
    doJoin({commit}, join) {commit('setJoin', { join})},
    doSurgery({commit}, surgery) {commit('setSurgery', { surgery})},
    doSick({commit}, sick) {commit('setSick', { sick})},
  }

})
    
export default store