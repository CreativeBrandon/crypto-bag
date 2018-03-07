import { ActionContext } from 'vuex'
import { BagState as State } from '@/types'
import * as mutations from './mutation-types'

// const
export const ADD_BAG = 'ADD BAG'
export type ADD_BAG = typeof ADD_BAG


export const addBag = (context: ActionContext<State, any>, name: string) => {
    const newBag = { id: Math.floor(Math.random() * 1000) + 1, name }

    context.commit(mutations.ADD_BAG, newBag)
}
