import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './views/App.vue'
import router from './router'
import store from './store'
import Vue2Filters from 'vue2-filters'
import 'vuetify/dist/vuetify.min.css'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Vue2Filters)
Vue.use(Vuetify)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
