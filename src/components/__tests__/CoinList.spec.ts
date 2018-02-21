import Vue from 'vue'
import { shallow, mount, Wrapper } from '@vue/test-utils'
import { Coin, coinMock } from '@/types/coins'
import coinList from '@/components/coins/coinList.vue'

const factory = (props = {}) => {
    return mount(coinList, {
        propsData: { ...props }
    })
}

describe('coin list Component', () => {
    const coin = coinMock() as Coin
    const coins = [coin]
    let wrapper: Wrapper<Vue>

    beforeEach(() => (wrapper = factory({ coins: coins })))

    test('container hasclass coin-list', () => {
        expect(wrapper.find('.coin-list').exists()).toBe(true)
    })

    test('has coins property', () => {
        expect(wrapper.hasProp('coins', coins)).toBeTruthy()
    })

    test('renders a list of coin detail components', () => {
        expect(wrapper.html).toMatchSnapshot()
    })
})
