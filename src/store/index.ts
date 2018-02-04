import Vuex from 'vuex'
import { store as coinsStore } from './coins/store'

const store = new Vuex.Store({
    modules: {
        bags: {},
        coins: coinsStore,
        ui: {}
    }
})

export default store
