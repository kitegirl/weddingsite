// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
import logout from './components/logout.vue'

Vue.component('logout-comp', logout);

Vue.config.productionTip = false

/* eslint-disable no-new */
/* render app*/
new Vue({
  el: '#app',
  router,
  components: { App, logout },
  template: '<App/>'
})

