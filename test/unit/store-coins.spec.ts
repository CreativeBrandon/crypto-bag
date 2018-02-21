import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import { cloneDeep } from 'lodash'
import { store as storeConfig, State } from '@/store/coins/store'
import * as mutations from '@/store/coins/mutation-types'
import { Coin, coinMock } from '@/types/coins'

const storeFactory = (): Store<State> => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    return new Vuex.Store(cloneDeep(storeConfig))
}

describe('Vuex Store - Coins ', () => {
    const coin = coinMock() as Coin
    let store: Store<State>

    beforeEach(() => ( store = storeFactory()))

    describe('Mutations ', () => {
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
