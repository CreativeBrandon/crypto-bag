export interface CoinsEntities {
    loaded: boolean
    isLoading: boolean
    ids: string[]
    byIds: ByIds
}

export interface CoinsResponse {
    data: Coin[]
}

export interface Coin {
    id: string
    name: string
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

export function coinMock(): Coin {
    return {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        rank: 1,
        price_usd: 573.137,
        price_btc: 1.0,
        '24h_volume_usd': 72855700.0,
        market_cap_usd: 9080883500.0,
        available_supply: 15844176.0,
        total_supply: 15844176.0,
        max_supply: 21000000.0,
        percent_change_1h: 0.04,
        percent_change_24h: -0.3,
        percent_change_7d: -0.57,
        last_updated: 1472762067
    }
}

export interface ByIds {
    [index: string]: Coin
}
