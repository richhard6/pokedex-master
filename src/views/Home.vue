<template>
  <v-container>
    <v-toolbar dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Richard PokéDex</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="floating">
        <v-btn icon>
          <v-icon>search</v-icon>
          <input class="input" v-model="searchValue" type="text" placeholder="Write your Pokemon">
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-card
      hover
      class="ma-3"
      v-for="(pokemon) in filteredPokes"
      v-bind:key="pokemon.name"
      :to="'/pokemon/' + pokemon.id"
    >
      <v-list three-line>
        <template>
          <v-subheader class="poke">
            #{{ pokemon.id }}
            <v-list-tile-avatar class="pokeFoto">
              <img :src="pokeImg + pokemon.id + '.png'">
            </v-list-tile-avatar>
            {{ pokemon.name }}
          </v-subheader>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      searchValue: [],
      index: 1,
      pokeImg: "https://pokeres.bastionbot.org/images/pokemon/"
    };
  },

  computed: {
    filteredPokes() {
      return this.pokemons.filter(pokemon =>
        pokemon.name.includes(this.searchValue)
      );
    },
    pokemons() {
      return this.$store.getters.getAllPokes;
    }
  },

  created() {}
};
</script>
<style>
.poke {
  display: flex;
  margin-left: 50px;
  text-transform: capitalize;
}
.pokeFoto:hover {
  animation: shake 0.82s infinite cubic-bezier(0.2, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.input {
  margin-right: 30px;
}
</style>

