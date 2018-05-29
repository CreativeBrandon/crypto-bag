import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CoinSearch, CoinState as State, RootState } from '@/types'
import * as action from './action-types'
import * as getter from './getter-types'
import * as mutation from './mutation-types'

export const mutations: MutationTree<State> = {
    [mutation.FETCH_COINS_SUCCESS]: mutation.fetchCoinsSuccess,
    [mutation.FETCH_COINS_ERROR]: mutation.fetchCoinsError,
    [mutation.LOADING]: (state: State) => state.entities.isLoading = true,
    [mutation.SEARCH_RESULTS]: (state: State, payload: CoinSearch) => state.search = payload,
    [mutation.CLEAR_COIN_SEARCH]: (state: State) => state.search = { isSearching: false, query: null, results: []}
}

export const getters: GetterTree<State, RootState> = {
    [getter.GET_COINS]: state => state.entities.ids.map(id => state.entities.byIds[id]),
    [getter.IS_LOADING]: state => state.entities.isLoading
}

export const actions: ActionTree<State, RootState> = {
    [action.FETCH_COINS]: action.fetchCoins,
    [action.SEARCH_COINS]: action.searchCoins,
    [action.CLEAR_COIN_SEARCH]: action.clearCoinSearch
}

export const state = (): State => {
    return {
      errors: {},
      search: {
          isSearching: false,
          query: null,
          results: []
      },
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
