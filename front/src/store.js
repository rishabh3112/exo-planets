import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:5000/api/';

const WIKIPEDIA_IMAGE_URL = (planet) => {
  return `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&origin=*&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&gpssearch=${planet}&gpslimit=1`
};
const WIKIPEDIA_DATA_URL = (planet) => {
  return `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${planet}&limit=4&callback=?`;
}
export default new Vuex.Store({
  state: {
    planet: {},
    homeData: {},
  },
  mutations: {
    async planetWithID(state, id){

      let data = await axios.get(`/${id}`)
                .then((res) => {return res.data})
                .then(async (data) => {
                  data["imageURL"] = await axios.get(WIKIPEDIA_IMAGE_URL(data["PlanetIdentifier"]))
                                    .then((res) => res.data)
                                    .then((res) => {
                                      if(res.query.pages[0].hasOwnProperty("terms") === true) {
                                        data["imageDescription"] = res.query.pages[0].terms.description[0];
                                      } else {
                                        data["imageDescription"] = "";
                                      }

                                      if (res.query.pages[0].hasOwnProperty("thumbnail") === true) {
                                        return res.query.pages[0].thumbnail.source
                                      } else {
                                        return ""
                                      }
                                    });
                  data["description"] = await axios.get(WIKIPEDIA_DATA_URL(data["PlanetIdentifier"]))
                                              .then((res) => JSON.parse(res.data.substring(5,res.data.length - 1)))
                                              .then((res) => {
                                                data["wikipediaURL"] = res[3];
                                                return res[2];
                                              })
                  
                  return data;
                });

      Vue.set(state.planet, id, data);
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
