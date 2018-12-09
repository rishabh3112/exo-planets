// Named imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Unnamed imports
import './registerServiceWorker'
import {MdToolbar, MdCard, MdButton, MdProgress, MdTable, MdField, MdContent, MdEmptyState} from 'vue-material/dist/components'

// Vue Material component registerations !!
const COMPONENTS_LIST = [MdToolbar, MdCard, MdButton, MdProgress, MdTable, MdField, MdContent, MdEmptyState]
COMPONENTS_LIST.forEach(component => {
  Vue.use(component)
});

Vue.config.productionTip = false

// Load Home Data !!
store.commit('homeData');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
