/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import axios from 'axios'
import './assets/css/normalize.css'
import './assets/css/elcss.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8090'

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')