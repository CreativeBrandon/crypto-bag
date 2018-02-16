import Vue from 'vue'
import { shallow } from '@vue/test-utils'
import { Coin, coinMock } from '@/types/coins'
import coinList from '@/components/coins/coinList.vue'

const factory = (props = {}) => {
    return shallow(coinList, {
        propsData: { ...props }
    })
}

describe('coin list Component', () => {
    const coin = coinMock() as Coin
    const wrapper = factory({ coins: [coin] })

    test('hasclass coin-detail', () => {
        expect(wrapper.find('.coin-list').exists()).toBe(true)
    })
})
