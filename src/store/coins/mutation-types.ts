import { State } from './store'
import * as utils from '@/utils'
import { Coin } from '@/types/coins'

export const FETCH_COINS_SUCCESS = '[COINS] FETCH COINS SUCCESS'
export type FETCH_COINS_SUCCESS = typeof FETCH_COINS_SUCCESS

export const FETCH_COINS_ERROR = '[COINS] FETCH COINS ERROR'
export type FETCH_COINS_ERROR = typeof FETCH_COINS_ERROR

export const LOADING = '[COINS] LOADING'
export type LOADING = typeof LOADING

export const fetchCoinsSuccess = (state: State, payload: Coin[]) => {
    state.entities = {
        ...state.entities,
        isLoading: false,
        loaded: true,
        ids: [
            ...state.entities.ids,
            ...payload.map((coin: Coin) => coin.id)
        ],
        byIds: {
            ...state.entities.byIds,
            ...utils.objFromArray(payload)
        }
    }
}

export const fetchCoinsError = (state: State, payload: any) => {
    state.entities.loaded = false
    state.errors = payload
}
