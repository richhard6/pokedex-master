<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img aspect-ratio="1" contain height="200px" :src="imgUrl+`${id}.png`"></v-img>

        <v-card-title primary-title>
          <div class="firstLetter">
            <h3 class="headline mb-0">{{pokemon.name}}</h3>
          </div>
        </v-card-title>
        <v-subheader>Types</v-subheader>
        <v-card-text v-for="types in pokemon.types" v-bind:key="types">
          <v-btn flat color="blue">{{types.type.name}}</v-btn>
        </v-card-text>
        <v-subheader>Abilities</v-subheader>
        <v-card-text v-for="abilities in pokemon.abilities" v-bind:key="abilities">
          <v-btn flat color="blue">{{abilities.ability.name}}</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>