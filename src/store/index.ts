import Vue from 'vue'
import Vuex from 'vuex'
import { store as coinsStore } from './coins/store'
import { store as bagsStore } from './bags/store'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        bags: bagsStore,
        coins: coinsStore,
        ui: {}
    }
})

export default store
