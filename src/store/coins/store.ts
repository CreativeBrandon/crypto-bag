import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CoinsEntities } from '../../types/coins'

Vue.use(Vuex)

export interface State {
    entities: CoinsEntities
}

const mutations: MutationTree<State> = {}

const getters: GetterTree<State, any> = {}

const actions: ActionTree<State, any> = {}

const state = (): State => {
    return {
        entities: {
            loaded: false,
            isLoading: false,
            ids: [],
            byIds: {}
        }
    }
}

export const store = {
    namespace: true,
    state,
    mutations,
    actions,
    getters
}
