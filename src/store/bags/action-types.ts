import { ActionContext } from 'vuex'
import { Bag, BagState as State, RootState } from '@/types'
import * as mutations from './mutation-types'

export const ADD_BAG = 'ADD BAG'
export type ADD_BAG = typeof ADD_BAG

export const DELETE_BAG = 'DELETE BAG'
export type DELETE_BAG = typeof DELETE_BAG

export const IS_EDITING = 'IS EDITING'
export type IS_EDITING = typeof IS_EDITING

export const SAVE_BAG = 'SAVE BAG'
export type SAVE_BAG = typeof SAVE_BAG

export const addBag = (context: ActionContext<State, RootState>, name: string) => {
    const newBag = { id: Math.floor(Math.random() * 1000) + 1, name, coins: [] } as Bag

    context.commit(mutations.ADD_BAG, newBag)
}

export const deleteBag = (context: ActionContext<State, RootState>, id: number) =>
    context.commit(mutations.DELETE_BAG, id)

export const isEditing = (context: ActionContext<State, RootState>, editingState: boolean = false) =>
    context.commit(mutations.IS_EDITING, editingState)

export const saveBag = (context: ActionContext<State, RootState>, bag: Bag) =>
    context.commit(mutations.SAVE_BAG, bag)
