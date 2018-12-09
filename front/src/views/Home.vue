<template>
  <div class="home">
    <div class="md-layout md-primary">
      <div class="intro md-layout-item md-large-size-75 md-xsmall-size-100">
        <h3 class="md-headline"> Introduction </h3>
        <p class="md-subheading">
          Currently all are living in on our planet <b>Earth</b>. But we are surrounded by problems like
          Global warming , Nuclear war , Rising water level, Increasing water level, etc. So, there is definately
          a solution that is to find a possible solution these problems but we should also find a different planet to live!
          Here starts my analysis. First we need to find to which we can reach feasibly. So here is top ten nearest Exo Planets.
        </p>
      </div>
      <div class="md-layout-item md-large-size-25 md-medium-size-25 md-xsmall-size-100 earth">

      </div>
    </div>
    <h1 class="md-headline">Top 10 nearest Exo Planets</h1>
    <div class="horizontal-scroll-container">
      <md-card v-for="(planet,id) in data" :key="id" v-if="id<10">
      <md-card-header>
        <div class="md-title">{{ planet.PlanetIdentifier }}</div>
      </md-card-header>

      <md-card-content>
        at {{ planet.DistFromEarthParsec }} parsec from earth
      </md-card-content>

      <md-card-actions>
         <router-link :to="`/${id}`">
          <md-button @click="getPlanet(id)">View More</md-button>
         </router-link>
      </md-card-actions>
    </md-card>

    </div>
    <b class="md-title">Results</b><br> <p class="md-subheading">If we are looking for possibility of living on a exoplanet 
    then we should have the capability to reach atleast at a distance of <b>1.3 parsec</b> that too if
    Proxima centauri has favourable conditions as approximated by our current capabilities. 
    Currently we have only stepped on our moon which is just <b>0.00001246 parsecs</b> away from us !</p>
    <p class="fun-fact md-subheading">
      <b> Fun Fact </b><br>
      Closest orphan exoplanet is <b>WISE 0855−0714</b> at 2.23 (±0.04) parsecs !
    </p>

    <p class="md-headline">
      Frequency of finding Exo Planets
    </p>
    <p class="md-subheading">
    Now we look into the frequency at which we are looking for the exoplanets. Consider Caveats involved in the following distribution, It containes only those planets that had valid values of RA , DEC and distance from sun.
    <img class="image" src="../assets/discovery.png" alt="Bar distribution of number of planets (with definative values) versus discovery year">
    Now distribution for all the exoplanets discovered
    <img class="image" src="../assets/discovery_all.png" alt="Bar distribution of number of planets versus discovery year">
    Now we can see number of exo planets discovered have taken a boom at year 2014 and then maximum exoplanets are discovered in the year 2016.
    This also shows that given dataset doesn't contain legit values for most of the exoplanets discovered in the year 2016.
    </p>
    <p class="md-headline">
      Variation of exoplants discovered with distance from earth
    </p>
    <p class="md-subheading">
      <img class="image" src="../assets/variation_dist.png" alt="Variation of exoplanets with distance from earth">
      This shows that most of the planets are within <b>2000 parsecs</b> with maximum reaching approximatly 8500 parsecs with Sweeps 11.
    </p>
    <p class="fun-fact md-title">
      All analysis is done over data provided by HackerEarth with data having legitimate value of RA, DEC and Distance of planet from Sun
    </p>
  </div>
</template>

<style scoped>
  .horizontal-scroll-container {
    display: flex;
    margin: 10px -10px;
    min-width: 200px;
    overflow-x: auto;
    padding-left: 40px;
  }
  ::-webkit-scrollbar{
    display: none;
  }
  .earth {
    background: url("https://bestanimations.com/Earth&Space/Earth/earth-spinning-rotating-animation-15-3.gif");
    height: 250px;
    background-size: cover;
  }
  .intro{
    padding: 10px;
  }
  .image{
    display: block;
    width: 500px;
    margin: 10px auto;
  }
  .md-icon-button {
  margin-bottom: 20px;
}
  .fun-fact{
    background: #223344;
    padding: 10px;
    color: white;
  }
  @media screen and (max-width: 600px) {
    .earth {
      background-size: 200px 200px;
      background-position: center top;
      background-repeat: no-repeat;
    }    
  }
  .md-card{
    min-width: 250px;
    margin: 5px;
  }
</style>


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
