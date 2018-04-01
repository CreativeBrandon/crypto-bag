import { BagState as State } from '@/types'
import * as utils from '@/utils'
import { Bag } from '@/types'

export const ADD_BAG = '[BAGS] ADD BAG'
export type ADD_BAG = typeof ADD_BAG

export const IS_EDITING = '[BAGS] IS EDITING'
export type IS_EDITING = typeof IS_EDITING

export const LOADING = '[BAGS] LOADING'
export type LOADING = typeof LOADING

export const SAVE_BAG = 'SAVE BAG'
export type SAVE_BAG = typeof SAVE_BAG

export const addBag = (state: State, payload: Bag) => {
    state.entities = {
        ...state.entities,
        isLoading: false,
        loaded: true,
        ids: [
            ...state.entities.ids,
            payload.id
        ],
        byIds: {
            ...state.entities.byIds,
            [payload.id]: payload
        }
    }
}

export const saveBag = (state: State, payload: Bag) => state.entities.byIds[payload.id] = payload
