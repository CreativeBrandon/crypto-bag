import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex'
import { BagState as State } from '@/types'
import * as getter from './getter-types'
import * as action from './action-types'
import * as mutation from './mutation-types'


export const mutations: MutationTree<State> = {
    [mutation.ADD_BAG]: mutation.addBag
}

export const getters: GetterTree<State, any> = {
    [getter.GET_BAGS]: (state) => state.entities.ids.map(id => state.entities.byIds[id])
}

export const actions: ActionTree<State, any> = {
    [action.ADD_BAG]: action.addBag
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
