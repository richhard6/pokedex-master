
<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar dark>
          <v-btn to="/home">
            <v-icon>home</v-icon>
          </v-btn>
          <v-toolbar-title>Richard PokéDex</v-toolbar-title>
        </v-toolbar>
        <v-container class="containerPok">
          <div class="flip-container">
            <v-layout class="flipper">
              <v-flex class="front" xs12>
                <v-card class="pa-0">
                  <v-img
                    :aspect-ratio="16/9"
                    contain
                    height="200px"
                    :src="imgUrlFront+`${id}.png`"
                  />
                </v-card>
              </v-flex>
              <v-flex class="back" xs12>
                <v-card class="px-0">
                  <v-img
                    :aspect-ratio="16/9"
                    contain
                    height="200px"
                    :src="imgUrlBack+`${id}.png` "
                  />
                </v-card>
              </v-flex>
            </v-layout>
          </div>
        </v-container>
        <v-layout column fill-height>
          <v-spacer></v-spacer>

          <v-card-title class="black--text pl-9 pa-0">
            <div class="firstLetter display-1 pl-5">#{{id}} {{pokemon.name}}</div>
          </v-card-title>
        </v-layout>

        <v-list two-line>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-sub-title>Types</v-list-tile-sub-title>
              <v-list-button
                outline
                v-for="types in pokemon.types"
                v-bind:key="types"
                v-bind:class="types.type.name"
              >{{types.type.name}}</v-list-button>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-sub-title>Abilities</v-list-tile-sub-title>
              <v-list-tile-title
                class="firstLetter"
                v-for="abilities in pokemon.abilities"
                v-bind:key="abilities"
              >{{abilities.ability.name}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-sub-title>Weight</v-list-tile-sub-title>
              <v-list-tile-title>{{pokemon.weight}}</v-list-tile-title>
              <v-layout row wrap>
                <v-bottom-nav fixed :value="true" color="white">
                  <v-btn v-if="id > 1" color="blue" :to="'/pokemon/' + (Number(id) - 1)">
                    <span>Previous</span>

                    <v-icon>keyboard_arrow_left</v-icon>
                  </v-btn>

                  <v-divider></v-divider>

                  <v-btn v-if="id < 151" color="blue" :to="'/pokemon/' + (Number(id) + 1)">
                    <span>Next</span>

                    <v-icon>keyboard_arrow_right</v-icon>
                  </v-btn>
                </v-bottom-nav>
              </v-layout>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon/",
      pokemon: "",
      imgUrlFront:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      imgUrlBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"
    };
  },
  methods: {
    async getData(id) {
      fetch(this.url + id)
        .then(res => res.json())
        .then(data => {
          this.pokemon = data;
        });
    }
  },
  beforeRouteUpdate(to, from, next) {
    return this.getData(Number(to.params.id)).then(next);
  },
  computed: {
    pimpType() {
      for (let i = 0; i < this.pokemon.length; i++) {
        return this.pokemon.types.type;
        console.log(this.pokemon.types.type);
      }
    },
    nameStore() {
      return this.$store.state.name;
    }
  },
  created() {
    this.getData(this.id);
  }
};
</script>

<style >
.containerPok {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.firstLetter {
  text-transform: capitalize;
}
.flip-container {
  perspective: 1000px;

  margin: 10px;
}

/* flip the pane when hovered */

.flip-container:hover .flipper,
.flip-container.hover .flipper {
  transform: rotateY(180deg);
}

.flip-container,
.front,
.back {
  width: 200px;

  height: 240px;
}

/* flip speed goes here */

.flipper {
  transition: 0.6s;

  transform-style: preserve-3d;

  position: relative;
}

/* hide back of pane during swap */

.front,
.back {
  backface-visibility: hidden;

  position: absolute;

  top: 0;

  left: 0;
}

/* front pane, placed above back */

.front {
  z-index: 2;

  /* for firefox 31 */

  transform: rotateY(0deg);
}

/* back, initially hidden pane */

.back {
  transform: rotateY(180deg);

  text-align: center;

  padding: 5px;

  color: white;
}
.poison {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #935292;
  border: 1px solid #682a68;
  padding: 1px;
}
.bug {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #a3b221;
  padding: 1px;
}
.dark {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #39251a;
  padding: 1px;
}
.dragon {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #7967d7;
  padding: 1px;
}
.electric {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #f1ba21;
  padding: 1px;
}
.fighting {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #88381f;
  padding: 1px;
}
.fire {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #e74713;
  padding: 1px;
}
.flying {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #9aaff2;
  padding: 1px;
}
.ghost {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #5f60b0;
  padding: 1px;
}

.grass {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #6bc237;
  padding: 1px;
}
.ground {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #ceab59;
  padding: 1px;
}
.ice {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #6fd0fb;
  padding: 1px;
}

.normal {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #c7c4bb;
  padding: 1px;
}
.psychic {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #db3367;
  padding: 1px;
}
.rock {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #9e833c;
  padding: 1px;
}
.steel {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #908f9f;
  padding: 1px;
}

.water {
  text-transform: capitalize;
  margin: 10px;
  padding: 5px 8px 5px 8px;
  display: inline-block;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  font-size: 13px;
  font-family: "helvetica neue", Helvetica, Verdana, sans-serif;
  color: #fff;
  background-color: #68a090;
  border: 1px solid #44685e;
  background-color: #2782df;
  padding: 1px;
}
</style>
