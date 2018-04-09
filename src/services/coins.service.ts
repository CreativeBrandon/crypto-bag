import axios, { AxiosPromise } from 'axios'
import { Coin, CoinsResponse } from '@/types/coins'
import { resolve } from 'path'
import coins from './coins.json'

const API = 'https://api.coinmarketcap.com/v1'

class CoinsService {
    constructor() { }

    delay(timeout: number) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), timeout)
        })
    }

    coins(): Promise<CoinsResponse> {
        return new Promise(resolve => resolve({ data: coins }))
    }

    fetchCoins(limit: number = 10): AxiosPromise<CoinsResponse> {
        return axios.get<CoinsResponse>(`${API}/ticker/?limit=${limit}`)
    }

    fetchCoinsOffline(limit: number = 20): Promise<CoinsResponse> {
        return this.delay(500)
            .then(() => this.coins())
    }

    // Todo: Find a better API route to query
    queryCoins(): AxiosPromise<Coin[]> {
        return axios.get<Coin[]>(`${API}/ticker/`)
    }
}

export const coinsService = new CoinsService()
