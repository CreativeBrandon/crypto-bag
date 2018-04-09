import { Bag, BagState, Coin, CoinState } from '@/types'

export interface Entities {
    loaded: boolean
    isLoading: boolean
    ids: Array<number | string>
    byIds: ByIds
}

export interface ByIds {
    [index: string]: Bag | Coin
}

export interface RootState {
    bags: BagState
    coins: CoinState
    ui: any
}
