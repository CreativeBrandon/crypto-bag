import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CoinsEntities } from '@/types/coins'
import * as action from './action-types'
import * as getter from './getter-types'
import * as mutation from './mutation-types'

Vue.use(Vuex)

export interface State {
    entities: CoinsEntities
    errors: {}
}

const mutations: MutationTree<State> = {
    [mutation.FETCH_COINS_SUCCESS]: mutation.fetchCoinsSuccess,
    [mutation.FETCH_COINS_ERROR]: mutation.fetchCoinsError,
    [mutation.LOADING]: (state: State) => state.entities.isLoading = true
}

const getters: GetterTree<State, any> = {
    [getter.GET_COINS]: state => state.entities.ids.map(id => state.entities.byIds[id]),
    [getter.IS_LOADING]: state => state.entities.isLoading
}

const actions: ActionTree<State, any> = {
    [action.FETCH_COINS]: action.fetchCoins
}

const state = (): State => {
    return {
      errors: {},
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
    state: state(),
    mutations,
    actions,
    getters
}
