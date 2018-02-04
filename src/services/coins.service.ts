import axios from 'axios'
import { Coin } from '../types/coins'

const API = 'https://API.coinmarketcap.com/v1'

class CoinsService {
    constructor() {}

    delay(timeout: number) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), timeout)
        })
    }

    fetchCoins(limit: number = 10) {
        return axios.get<Coin[]>(`${API}/ticker/?limit=${limit}`)
    }
}

export const coinsService = new CoinsService()
