import Vue from 'vue'
import App from '@/app/app.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// import '@/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
