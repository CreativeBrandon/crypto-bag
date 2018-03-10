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

    fetchCoinsOffline(limit: number = 20): Promise<CoinsResponse> {
        return this.delay(500)
            .then(() => this.coins())
    }

    fetchCoins(limit: number = 10): AxiosPromise<CoinsResponse> {
        return axios.get<CoinsResponse>(`${API}/ticker/?limit=${limit}`)
    }
}

export const coinsService = new CoinsService()
