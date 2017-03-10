import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import router from './router'

import 'normalize.css'
import 'flex.css'

Vue.config.productionTip = false
Vue.use(vueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
