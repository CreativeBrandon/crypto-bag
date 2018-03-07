import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CoinState as State } from '@/types'
import * as action from './action-types'
import * as getter from './getter-types'
import * as mutation from './mutation-types'

export const mutations: MutationTree<State> = {
    [mutation.FETCH_COINS_SUCCESS]: mutation.fetchCoinsSuccess,
    [mutation.FETCH_COINS_ERROR]: mutation.fetchCoinsError,
    [mutation.LOADING]: (state: State) => state.entities.isLoading = true
}

export const getters: GetterTree<State, any> = {
    [getter.GET_COINS]: state => state.entities.ids.map(id => state.entities.byIds[id]),
    [getter.IS_LOADING]: state => state.entities.isLoading
}

export const actions: ActionTree<State, any> = {
    [action.FETCH_COINS]: action.fetchCoins
}

export const state = (): State => {
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

export default store
