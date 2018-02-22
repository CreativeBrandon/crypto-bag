import Vue from 'vue'
import { shallow, mount, Wrapper } from '@vue/test-utils'
import { Coin, coinMock } from '@/types/coins'
import coinList from '@/components/coins/coinList.vue'
import coinDetail from '@/components/coins/coinDetail.vue'

const factory = (props = {}) => {
    return mount(coinList, {
        propsData: { ...props }
    })
}

describe('CoinList Component', () => {
    const coin = coinMock() as Coin
    const coins = [coin]
    let wrapper: Wrapper<Vue>

    beforeEach(() => (wrapper = factory({ coins: coins })))

    test('should have ".coin-list" class on container', () => {
        expect(wrapper.find('.coin-list').exists()).toBe(true)
    })

    test('should have "coins" prop', () => {
        const props = wrapper.props() as { coins: Coin[] }
        expect(props.coins).toBeTruthy()
    })

    test('should render a list of CoinDetail components', () => {
        expect(wrapper.html()).toContain('coin-detail')
        expect(wrapper.html()).toMatchSnapshot()
    })
})
