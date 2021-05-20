import Vue from 'vue'
//import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/router.js'

Vue.config.productionTip = false

//createApp(App).mount('#app')

//new Vue({
//    router,
//    render: h => h(App),
//}).$mount('#app')

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')