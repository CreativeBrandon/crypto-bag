import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './views/App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import './registerServiceWorker'
import './utils/filters'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
