import Vue from 'vue'
import { shallow } from '@vue/test-utils'
import { Coin } from '@/types/coins'
import { coinMock } from 'test/mocks'
import coinDetail from '@/components/coins/coinDetail.vue'

const factory = (props = {}) => {
    return shallow(coinDetail, {
        propsData: { ...props }
    })
}

describe('CoinDetail Component', () => {
    const coin = coinMock() as Coin
    const wrapper = factory({ coin })

    test('should have ".coin-detail" class on container', () => {
        expect(wrapper.find('.coin-detail').exists()).toBe(true) // finds first el
        expect(wrapper.classes()).toContain('coin-detail')
    })

    test('should have "coin" prop', () => {
        const props = wrapper.props() as { coin: Coin }
        expect(props.coin).toBeTruthy()
    })
})
