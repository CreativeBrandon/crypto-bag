<template>
    <div class="coin-detail">
        <h3 class="name">{{coin.rank}} {{coin.name}}</h3>
        <div><span>Price:</span> {{coin.price_usd}} USD</div>
        <div><span>Sat:</span> {{coin.price_btc}} /BTC</div>
        <div><span>Market Cap:</span> {{coin.market_cap_usd}}</div>
    </div>
</template>

<style scoped >
.coin-detail {
    margin-bottom: 20px;
}
span {
    font-weight: 600;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Coin } from '@/types/coins'

@Component
export default class CoinDetail extends Vue {
    @Prop() coin?: Coin

    get newDate() {
        return this.coin ? this.coin.last_updated : ''
    }
}
</script>
