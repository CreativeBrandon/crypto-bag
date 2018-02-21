import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import { cloneDeep } from 'lodash'
import { store as storeConfig, State } from '@/store/coins/store'
import * as getters from '@/store/coins/getter-types'
import * as mutations from '@/store/coins/mutation-types'
import { Coin, coinMock } from '@/types/coins'

const storeFactory = (): Store<State> => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    return new Vuex.Store(cloneDeep(storeConfig))
}

describe('Vuex Store - Coins', () => {
    const coin = coinMock() as Coin
    let store: Store<State>

    beforeEach(() => ( store = storeFactory()))

    describe('Getters', () => {
        test(`${getters.GET_COINS} - from store`, () => {
            const mockEntry = [coin] as Coin[]
            store.commit(mutations.FETCH_COINS_SUCCESS, mockEntry)
            expect(store.getters[getters.GET_COINS]).toEqual(mockEntry)
        })
        
        test(`${getters.IS_LOADING} - is truthy when value is set to true`, () => {
            store.state.entities.isLoading = true
            expect(store.getters[getters.IS_LOADING]).toBeTruthy()
        })
    })

    describe('Mutations', () => {
        test(`${mutations.FETCH_COINS_SUCCESS} - add coins to normalized Store State (byIds & ids)`, () => {
            const mockEntry = [coin] as Coin[]
            store.commit(mutations.FETCH_COINS_SUCCESS, mockEntry)
            expect(store.state.entities.ids).toContain(mockEntry[0].id)
            expect(store.state.entities.byIds[mockEntry[0].id]).toEqual(mockEntry[0])
        })

        test(`${mutations.FETCH_COINS_ERROR} - throw error`, () => {
            const mockEntry = {error: 500, message: 'unable to fetch coins'}
            store.commit(mutations.FETCH_COINS_ERROR, mockEntry)
            expect(store.state.entities.loaded).toBeFalsy()
            expect(store.state.errors).toEqual(mockEntry)
        })
    })
})
