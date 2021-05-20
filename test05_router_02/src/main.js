import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/router.js'
//경로를 똑바로 하니 실행됨.

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
