import Vue from 'vue'
import { shallow } from '@vue/test-utils'
import { Coin, coinMock } from '@/types/coins'
import coinDetail from '@/components/coins/coinDetail.vue'

const factory = (props = {}) => {
    return shallow(coinDetail, {
        propsData: { ...props }
    })
}

describe('coinDetail', () => {
    const coin = coinMock() as Coin
    const wrapper = factory({ coin: coin })

    test('hasclass coin-detail', () => {
        expect(wrapper.find('.coin-detail').exists()).toBe(true) // finds first el
        expect(wrapper.classes()).toContain('coin-detail')
    })

    test('renders coin detail component with coin prop', () => {
        expect(wrapper.hasProp('coin', coin)).toBeTruthy()
    })
})
