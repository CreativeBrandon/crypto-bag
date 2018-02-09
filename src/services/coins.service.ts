import axios, { AxiosPromise} from 'axios'
import { Coin, CoinsResponse } from '../types/coins'

const API = 'https://API.coinmarketcap.com/v1'

class CoinsService {
    constructor() {}

    delay(timeout: number) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), timeout)
        })
    }

    fetchCoins(limit: number = 10): AxiosPromise<CoinsResponse> {
        return axios.get<CoinsResponse>(`${API}/ticker/?limit=${limit}`)
    }
}

export const coinsService = new CoinsService()
