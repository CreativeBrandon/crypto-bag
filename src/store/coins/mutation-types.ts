import * as utils from '@/utils'
import { Coin, CoinState as State, CoinSearch } from '@/types'

export const FETCH_COINS_SUCCESS = '[COINS] FETCH COINS SUCCESS'
export type FETCH_COINS_SUCCESS = typeof FETCH_COINS_SUCCESS

export const FETCH_COINS_ERROR = '[COINS] FETCH COINS ERROR'
export type FETCH_COINS_ERROR = typeof FETCH_COINS_ERROR

export const LOADING = '[COINS] LOADING'
export type LOADING = typeof LOADING

export const SEARCH_RESULTS = '[COINS] SEARCH_RESULTS'
export type SEARCH_RESULTS = typeof SEARCH_RESULTS

export const CLEAR_COIN_SEARCH = '[COINS] CLEAR_COIN_SEARCH'
export type CLEAR_COIN_SEARCH = typeof CLEAR_COIN_SEARCH

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
