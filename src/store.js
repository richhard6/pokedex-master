import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
  },
  mutations: {
    setPokemons(state, data) {
      state.pokemons = data;
    }
  },
  actions: {
    getPokemons(context) {
      fetch(context.state.url)
        .then(json => json.json())
        .then(data => {
          let finalData = [];
          data.results.forEach((pokemon, index) => {
            pokemon.id = index + 1;
            finalData.push(pokemon);
          });

          context.commit("setPokemons", finalData);
        });
    }
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getAllPokes(state) {
      return state.pokemons;
    }
  }
});
