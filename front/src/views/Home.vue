<template>
  <div class="home">
    <ul>
      <li v-for="(planet,id) in data" :key="id">
        <router-link :to="`/${id}`"> <b @click="getPlanet(id)">{{ planet.PlanetIdentifier }}</b> </router-link> at {{ planet.DistFromEarthParsec }} parsec from earth
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name: 'home',
  computed: mapState({
    data: 'homeData',
  }),
  methods: mapActions([
    'getPlanet'
  ])
}
</script>
