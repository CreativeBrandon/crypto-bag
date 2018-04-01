import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex'
import { BagState as State, RootState, Bag } from '@/types'
import * as getter from './getter-types'
import * as action from './action-types'
import * as mutation from './mutation-types'

export const mutations: MutationTree<State> = {
    [mutation.ADD_BAG]: mutation.addBag,
    [mutation.IS_EDITING]: (state: State, payload: boolean) => state.isEditing = payload,
    [mutation.SAVE_BAG]: mutation.saveBag
}

export const getters: GetterTree<State, RootState> = {
    [getter.GET_BAG]: (state: State) => (id: number) => state.entities.byIds[id],
    [getter.GET_BAGS]: (state: State) => state.entities.ids.map(id => state.entities.byIds[id]),
    [getter.IS_EDITING]: (state: State) => state.isEditing
}

export const actions: ActionTree<State, RootState> = {
    [action.ADD_BAG]: action.addBag,
    [action.IS_EDITING]: action.isEditing,
    [action.SAVE_BAG]: action.saveBag
}

export const state = (): State => {
    return {
        isEditing: false,
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
