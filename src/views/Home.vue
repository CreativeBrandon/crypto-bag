<template>
  <div class="home">
    <img src="../assets/logo.png">
    <h1>Home</h1>

    <div v-for="coin in coins" :key="coin.id">
     {{coin.rank}}.) {{ coin.id }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import * as actions from '@/store/coins/action-types'
import * as getters from '@/store/coins/getter-types'
import { Coin } from '@/types/coins'

@Component({
    components: {}
})
export default class Home extends Vue {
    @Action(actions.FETCH_COINS) fetchCoins: any
    @Getter(getters.GET_COINS) coins?: Coin[]
    @Getter isLoading?: boolean

    created() {
        this.fetchCoins()
    }
}
</script>
