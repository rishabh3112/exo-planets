import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:5000/api/';

export default new Vuex.Store({
  state: {
    planet: {},
    homeData: {},
  },
  mutations: {
    async planetWithID(state, id){
      Vue.set(state.planet,id,await axios.get(`/${id}`).then((res) => {return res.data}));
    },
    async homeData(state){
      state.homeData = await axios.get(`/`).then((res) => {return res.data});
    }
  },
  actions: {
    getPlanet({commit}, id){
      commit('planetWithID', id)
    }
  }
})
