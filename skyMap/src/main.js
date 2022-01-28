import Vue from 'vue'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from './router'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
axios.defaults.baseURL = ''
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC7FZkvBPcDBjNjnkDFNVCLwFcQYdE0Cn0',
    libraries: 'places',
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

