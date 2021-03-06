import { ActionContext } from 'vuex'
import { isMatch } from 'lodash'
import { CoinState as State, RootState, Coin, CoinSearch, CoinsResponse } from '@/types'
import * as mutation from './mutation-types'
import { coinsService } from '@/services/coins.service'

export const FETCH_COINS = '[COINS] FETCH_COINS'
export type FETCH_COINS = typeof FETCH_COINS

export const FETCH_COINS_SUCCESS = '[COINS] FETCH_COINS_SUCCESS'
export type FETCH_COINS_SUCCESS = typeof FETCH_COINS_SUCCESS

export const FETCH_COINS_BY_CATEGORY = '[COINS] FETCH_COINS_BY_CATEGORY'
export type FETCH_COINS_BY_CATEGORY = typeof FETCH_COINS_BY_CATEGORY

export const SEARCH_COINS = '[COINS] SEARCH_COINS'
export type SEARCH_COINS = typeof SEARCH_COINS

export const CLEAR_COIN_SEARCH = '[COINS] CLEAR_COIN_SEARCH'
export type CLEAR_COIN_SEARCH = typeof CLEAR_COIN_SEARCH


export const fetchCoins = (context: ActionContext<State, RootState>) => {
    if (!context.state.entities.loaded) {
        context.commit(mutation.LOADING)
        coinsService
            .fetchCoins(45)
            .then(res => context.commit(mutation.FETCH_COINS_SUCCESS, res.data))
            .catch(err => context.commit(mutation.FETCH_COINS_ERROR, err))
    }
}

export const searchCoins = (context: ActionContext<State, RootState>, query: string) => {
    coinsService
        .queryCoins()
        .then(res => {
            const results = queryTerm(query, res.data)
            context.commit(mutation.SEARCH_RESULTS, { isSearching: true, query, results })
        })
}

export const clearCoinSearch = (context: ActionContext<State, RootState>) => {
    context.commit(mutation.CLEAR_COIN_SEARCH)
}

// Temp workaround
const queryTerm = (query: string, coins: Coin[]): Coin[]  => {
    const reg = new RegExp(`${query}*`, 'i')

    return coins.filter((coin: Coin) => {
        if (reg.test(coin.name) || reg.test(coin.symbol)) return coin
    })
}
