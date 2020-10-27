<template>
  <v-app>
    <v-container fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center justify-center>
        <v-flex class="logo" xs8 offset-xs-2 align-center justify-center>
          <v-img max-width="500px" src="tindermon.png" lazy-src="tindermon.png">
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular
                  indeterminate
                  color="blue"
                ></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-flex>
        <v-flex class="bola" xs8 offset-xs-2 align-center justify-center>
          <v-img
            max-width="500px"
            src="https://art.ngfiles.com/images/386000/386577_stardoge_8-bit-pokeball.png?f1446737358"
            lazy-src="https://art.ngfiles.com/images/386000/386577_stardoge_8-bit-pokeball.png?f1446737358"
          >
            <router-link class="link" to="/home">GO!!!</router-link>
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular
                  indeterminate
                  color="blue"
                ></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.logo {
  display: flex;
  justify-content: center;
}
.bola {
  display: flex;
  justify-content: center;
}
.bola {
  animation: shake 0.82s infinite cubic-bezier(0.2, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.link {
  font-size: 30px;
  color: black;
  display: block;
  z-index: -1;
  margin-top: 315px;
  padding: 20px;
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
</style>

