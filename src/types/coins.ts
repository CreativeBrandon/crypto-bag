import { Entities } from '@/types'

export interface CoinsResponse {
    data: Coin[]
}

export interface BaseCoin {
    id: string
    name: string
}

export interface Coin extends BaseCoin {
    symbol: string
    rank: number
    price_usd: number
    price_btc: number
    '24h_volume_usd': number
    market_cap_usd: number
    available_supply: number
    total_supply: number
    max_supply: number
    percent_change_1h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: number
}

export interface CoinSearch {
    isSearching: boolean
    query: string | null
    results: Coin[]
}

export interface CoinState {
    entities: Entities
    errors: {}
    search: CoinSearch
}

export interface Transaction {
    amount: number
    coin: string | null
}
