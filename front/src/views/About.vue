<template>
  <div class="about" v-if="this.$route.params.id>-1&&this.$route.params.id<2133">
    <!-- When data is loaded -->
    <div v-if="data">
     <router-link to="/">
    <md-button class="md-icon-button md-primary md-raised">
        <md-icon>home</md-icon>
      </md-button>
    </router-link>
    <br>
    <hr>
      <div class="title"><p class="md-display-1">{{data.PlanetIdentifier}}</p></div>
      <br>

      <div class="md-layout md-gutter md-alignment-top-center">
        <md-card class="md-layout-item md-small-size-50 md-xsmall-size-100">
          <md-card-media>
              <img :src="data.imageURL" :alt="`An image of ${data.PlanetIdentifier}`">
          </md-card-media>
          <md-card-header>
            <span class="md-body1">{{data.imageDescription}}</span>
            <br>
            <span class="md-caption">Image from Wikipedia</span>
          </md-card-header>
        </md-card>

        <md-card class="description md-layout md-gutter md-alignment-top">
          <md-card-media>
            <span class="md-headline"> Top Wikipedia Results </span>
            <br>
            <span class="md-caption"> Results for keyword <i>{{data.PlanetIdentifier}}</i></span>
          </md-card-media>
          <md-card-content>
          <div class="results" v-if="text" v-for="(text,i) in data.description" :key=text>
            <center>{{text}}</center>
            <br>
            <md-button class="md-ripple md-dense" :href="data.wikipediaURL[i]">
              Read more 
            </md-button>
          </div>
          
          <div class="results" v-if="!data.description[0]">
            <br>
            Nothing found on Wikipedia !!
            <md-button class="md-ripple md-primary" :href="`https://www.google.com/search?q=${data.PlanetIdentifier}`">Try Google Results</md-button>
          </div>
          </md-card-content>
        </md-card>
        <br>
          <p class="md-title data"> Data Values <br> <span class="md-caption"> From cleaned data </span></p>
          <div class="horizontal-scroll-container">
            <md-card v-for="(value,key) in data" :key="key"
              v-if='!key.includes("Unnamed") && !key.includes("wikipedia") && !key.includes("image") && !key.includes("description")'
            >
              <md-card-header>
                <div class="md-title">{{ key }}</div>
              </md-card-header>
              <md-card-content class="md-subheading">
                {{value}}
              </md-card-content>
            </md-card>
          </div>
      </div>
    </div>

    <div v-else>
       <router-link to="/">
        <md-button class="md-icon-button md-primary md-raised">
            <md-icon>home</md-icon>
          </md-button>
        </router-link>
        <md-progress-bar md-mode="indeterminate"></md-progress-bar>
    </div>
  </div>
  <div class="about" v-else>
    <router-link to="/">
    <md-button class="md-icon-button">
        <md-icon>home</md-icon>
      </md-button>
    </router-link>
    <div class="title"><h1 class="md-display"> No Exoplanet Here !! </h1></div>
  </div>
</template>

<style scoped>
.horizontal-scroll-container {
  display: flex;
  margin: 10px -10px;
  min-width: 200px;
  overflow-x: auto;
  padding-left: 40px;
  height: 200px;
}
::-webkit-scrollbar{
  display: none;
}
.data{
  width: 100%;
  padding: 20px;
}
.title{
  text-align: center;
  color: black;
}
.md-card{
    min-width: 250px;
    margin: 5px;
  }
.description{
  padding: 10px;
}
.md-icon-button {
  margin-bottom: 20px;
}
.results {
  border-radius: 2px;
  border: #e0e0e0 solid 1px;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
}
</style>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'about',
  computed: mapState({
    data: function(state){
          const id = this.$route.params.id;
          if(state.planet[id])
            return state.planet[id]
          else {
            this.getPlanet(id);
            return state.planet[id];
          }
      }
  }),
  methods: mapActions([
    'getPlanet'
  ])

}
</script>
