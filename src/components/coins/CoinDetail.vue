<template>
    <li class="coin-detail">
      <div class="icon-container">
        <img class="icon" :src="iconPath" :alt="coin.name" />
      </div>

      <h3 class="name">{{coin.rank}} {{coin.name}}</h3>
      <hr class="divider" />

      <div class="coin-info">
        <div class="price">
          <h4 class="heading">Price</h4>
          <span class="data">{{coin.price_usd | currency}} USD</span>
        </div>
        <div class="price">
          <h4 class="heading">Satoshi</h4>
          <span class="data">{{coin.price_btc}} /BTC</span>
        </div>
      </div>
      <div class="market-cap">
          <h4 class="heading">Market Cap</h4> 
          <span class="data">{{coin.market_cap_usd | currency}}</span>
        </div>
    </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Coin } from '@/types/coins'

@Component
export default class CoinDetail extends Vue {
  @Prop() coin?: Coin
  iconPath: string = ''

  created() {
    const icon = this.coin
      ? this.coin.symbol.toLowerCase().replace(/[0-9]/g, 'X')
      : null
    if (icon) this.setIconPath(icon)
  }

  setIconPath(icon: string) {
    const iconPath = require(`@creativebrandon/cryptocurrency-icons/svg/color/${icon}.svg`)
    if (iconPath) return (this.iconPath = iconPath)
  }
}
</script>

<style scoped >
.coin-detail {
  border-radius: 2px;
  box-shadow: 0 -1px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  margin-bottom: 30px;
  padding: 25px 15px;
  width: 25%;
}
.coin-info {
  display: flex;
  justify-content: center;
}
.divider {
  margin: 15px 0;
}
.heading {
  font-weight: 600;
}
.icon {
  height: 32px;
  margin-bottom: 12px;
  max-width: 100px;
}
.icon-container {
  text-align: center;
}

.market-cap {
  padding: 15px 0 0;
}
.price {
  width: 50%;
}
</style>
