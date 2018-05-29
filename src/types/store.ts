import { Bag, BagState, Coin, CoinState } from '@/types'

export interface BaseEntities {
    loaded: boolean
    isLoading: boolean
    ids: Array<number | string>
}

export interface BaseTransaction {
    amount: number
    coin: string
    price_usd: number
    price_btc: number
    symbol?: string
}

export interface RootState {
    bags: BagState
    coins: CoinState
    ui: any
}
