<template>
    <section class="coin-list">
        <ul>
            <coinDetail 
                v-for="coin in coins"
                :coin="coin"
                :key="coin.id" />
        </ul>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Coin } from '@/types/coins'

const coinDetail = () => import('./CoinDetail.vue')

@Component({
    components: { coinDetail }
})
export default class CoinList extends Vue {
    @Prop() coins?: Coin[]
}
</script>

<style scoped>
.coin-list {
    margin: 20px 0;
}
</style>
