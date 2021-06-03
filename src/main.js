import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.config.errorHandler = (err, vm, info) => {
    console.log(err, vm, info);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
