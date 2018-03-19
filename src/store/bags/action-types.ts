import { ActionContext } from 'vuex'
import { Bag, BagState as State, RootState } from '@/types'
import * as mutations from './mutation-types'

export const ADD_BAG = 'ADD BAG'
export type ADD_BAG = typeof ADD_BAG

export const IS_EDITING = 'IS EDITING'
export type IS_EDITING = typeof IS_EDITING


export const addBag = (context: ActionContext<State, RootState>, name: string) => {
    const newBag = { id: Math.floor(Math.random() * 1000) + 1, name, coins: [] } as Bag

    context.commit(mutations.ADD_BAG, newBag)
}

export const isEditing = (context: ActionContext<State, RootState>, editingState: boolean = false) =>
    context.commit(mutations.IS_EDITING, editingState)
