import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from './router'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

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
