import { ActionContext } from 'vuex'
import { State } from './store'
import * as mutation from './mutation-types'
import { coinsService } from '@/services/coins.service'

// ACTIONS
export const FETCH_COINS = '[COINS] FETCH_COINS'
export type FETCH_COINS = typeof FETCH_COINS

export const FETCH_COINS_SUCCESS = '[COINS] FETCH_COINS_SUCCESS'
export type FETCH_COINS_SUCCESS = typeof FETCH_COINS_SUCCESS

export const FETCH_COINS_BY_CATEGORY = '[COINS] FETCH_COINS_BY_CATEGORY'
export type FETCH_COINS_BY_CATEGORY = typeof FETCH_COINS_BY_CATEGORY

export const fetchCoins = (context: ActionContext<State, any>) => {
    if (!context.state.entities.loaded) {
        context.commit(mutation.LOADING)
        coinsService
            .fetchCoins(25)
            .then(res => context.commit(mutation.FETCH_COINS_SUCCESS, res.data))
            .catch(err => context.commit(mutation.FETCH_COINS_ERROR, err))
    }
}
