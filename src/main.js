// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import resource from 'vue-resource'
import router from './router'
import seller from './components/seller/seller'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(resource)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    grossAmount:0,
    numcount:0
  },
  mutations: {
    getAmount(state) {
      return state
    }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  resource,
  template: '<App/>',
  components: {
    App,
    seller,
    goods,
    ratings
  },
  data () {
    return {

    }
  }
})

