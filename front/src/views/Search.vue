<template>
<div v-if="data">
    <router-link to="/">
    <md-button class="md-icon-button md-primary md-raised">
        <md-icon>home</md-icon>
      </md-button>
    </router-link>
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>

        <md-field md-clearable class="md-toolbar-section-end">
            <label>Search here</label>
          <md-input v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>
      <md-table-empty-state
        v-if="search&&search.length>=3"
        md-label="No Exoplanet found"
        :md-description="`No exoplanet found for this '${search}' query. Try a different search term`">
        <md-button class="md-primary md-raised" href="/">Go to home</md-button>
      </md-table-empty-state>
      <md-table-empty-state 
        md-label="Start Typing to Search"
        md-description="Atleast 3 characters to search"
        v-else>
          <md-button class="md-primary md-raised" href="/">Go to home</md-button>
      </md-table-empty-state>
      <md-table-row slot="md-table-row" slot-scope="{ item }" v-if="searched">
        <md-table-cell md-label="Name" md-sort-by="PlanetIdentifier"><router-link :to="`/${item.id}`">{{ item.PlanetIdentifier }}</router-link></md-table-cell>
        <md-table-cell md-label="Distance from Earth" md-sort-by="DistFromEarthParsec">{{ item.DistFromEarthParsec }}</md-table-cell>
      </md-table-row>
    </md-table>
</div>
<div v-else>
        <router-link to="/">
        <md-button class="md-icon-button md-primary md-raised">
            <md-icon>home</md-icon>
        </md-button>
        </router-link>
    <md-progress-bar md-mode="indeterminate"></md-progress-bar>
</div>
</template>
<style scoped>
.md-empty-state {
    position: relative;
    top: -400px;
}
.md-icon-button {
  margin-bottom: 20px;
}
</style>

<script>
import {mapState} from 'vuex';
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term && term.length>2) {
        return items.filter(item => toLower(item.PlanetIdentifier).includes(toLower(term)))
    }
    return []
  }

export default {
    name: 'search',
    data: () => {return {
        search: null,
        searched: [],
    }},
    computed: mapState({
        data: (state) => {
            let res = [];
            for( let i in state.homeData){
                if(state.homeData.hasOwnProperty(i)){
                    let resData = state.homeData[i];
                    resData["id"] = i;
                    res.push(resData);
                }
            }
            return res;
        }
    }),
    methods: {
        searchOnTable () {
            this.searched = searchByName(this.data, this.search);
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.searchOnTable();
        })
    }
    
}
</script>
