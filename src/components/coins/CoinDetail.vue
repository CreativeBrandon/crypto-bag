<template>
    <div class="coin-detail">
        <img class="icon" :src="iconPath" :alt="coin.name" /> 
        <h3 class="name">{{coin.rank}} {{coin.name}}</h3>
        <div><span>Price:</span> {{coin.price_usd | currency}} USD</div>
        <div><span>Sat:</span> {{coin.price_btc}} /BTC</div>
        <div><span>Market Cap:</span> {{coin.market_cap_usd | currency}}</div>
    </div>
</template>

<style scoped >
.coin-detail {
  margin-bottom: 20px;
}
.icon {
  height: 32px;
  max-width: 100px;
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
