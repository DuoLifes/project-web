// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import eventBus from './util/busEvent.js'
import axiosService from './util/axiosService.js'
import store from './store/index.js'

Vue.use(Vuex)
Vue.use(axiosService)
Vue.prototype.eventBus = eventBus
Vue.config.productionTip = false

/* eslint-disable no-new */
let app = new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
})
app.$mount('#app')
