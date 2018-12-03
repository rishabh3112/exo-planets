<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>
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
