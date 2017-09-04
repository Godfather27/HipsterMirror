// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  store,
  router,
  http: {
    root: 'http://192.168.0.21:3000'
  },
  template: '<App/>',
  components: { App }
})
