import { createLocalVue, shallow } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import { cloneDeep } from 'lodash'
import flushPromises from 'flush-promises'
import { store as storeConfig, State, actions as Actions, state } from '@/store/coins/store'
import * as actionTypes from '@/store/coins/action-types'
import * as getters from '@/store/coins/getter-types'
import * as mutations from '@/store/coins/mutation-types'
import { Coin } from '@/types/coins'
import { coinMock } from '../../../test/mocks'

jest.mock('axios')

const localVue = createLocalVue()

const storeFactory = (): Store<State> => {
    localVue.use(Vuex)
    return new Vuex.Store(cloneDeep(storeConfig))
}

describe('Vuex Store - Coins', () => {
    const coin = coinMock() as Coin
    let store: Store<State>
    let actions: any
    let storeMock: any

    beforeEach(() => {
        actions = {
            [actionTypes.FETCH_COINS_SUCCESS]: jest.fn()
        }
        storeMock = new Vuex.Store({
            state: {},
            actions
          })
        store = storeFactory()
    })

    describe('Actions', () => {
        test(`${actionTypes.FETCH_COINS} - should fire a success or error mutation`, () => {
            // const wrapper = shallow(Actions, { storeMock, localVue })
            /*store.dispatch(actionTypes.FETCH_COINS)
            await flushPromises()
            expect(actionTypes.FETCH_COINS_SUCCESS).toHaveBeenCalled()*/
        })
    })

    describe('Getters', () => {
        test(`${getters.GET_COINS} - should get coins from store`, () => {
            const mockEntry = [coin] as Coin[]
            store.commit(mutations.FETCH_COINS_SUCCESS, mockEntry)
            expect(store.getters[getters.GET_COINS]).toEqual(mockEntry)
        })
        test(`${getters.IS_LOADING} - should be truthy when value is set to true`, () => {
            store.state.entities.isLoading = true
            expect(store.getters[getters.IS_LOADING]).toBeTruthy()
        })
    })

    describe('Mutations', () => {
        test(`${mutations.FETCH_COINS_SUCCESS} - should add coins to normalized Store State (byIds & ids)`, () => {
            const mockEntry = [coin] as Coin[]
            store.commit(mutations.FETCH_COINS_SUCCESS, mockEntry)
            expect(store.state.entities.ids).toContain(mockEntry[0].id)
            expect(store.state.entities.byIds[mockEntry[0].id]).toEqual(mockEntry[0])
        })

        test(`${mutations.FETCH_COINS_ERROR} - should return an error message`, () => {
            const mockEntry = {error: 500, message: 'unable to fetch coins'}
            store.commit(mutations.FETCH_COINS_ERROR, mockEntry)
            expect(store.state.entities.loaded).toBeFalsy()
            expect(store.state.errors).toEqual(mockEntry)
        })
    })
})
