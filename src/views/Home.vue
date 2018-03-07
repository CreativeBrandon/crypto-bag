<template>
  <main class="home">
    <h1>Trending Cryptos</h1>

    <atom-spinner v-if="isLoading"
        :animation-duration="1000"
        :size="60"
        :color="'#ff1d5e'" />

    <coinList :coins="coins" />
  </main>
</template>

<style scoped >
.atom-spinner {
  margin: 0 auto;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import * as actions from '@/store/coins/action-types'
import * as getters from '@/store/coins/getter-types'
import { Coin } from '@/types'

const AtomSpinner = () => import('epic-spinners/src/components/lib/AtomSpinner.vue')
const coinList = () => import('@/components/coins/CoinList.vue')

@Component({
  components: { AtomSpinner, coinList }
})
export default class Home extends Vue {
  @Action(actions.FETCH_COINS) fetchCoins: any
  @Getter(getters.GET_COINS) coins?: Coin[]
  @Getter(getters.IS_LOADING) isLoading?: boolean

  created() {
    this.fetchCoins()
  }
}
</script>
