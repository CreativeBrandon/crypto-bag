<template>
    <section>
        <coinDetail 
            v-for="coin in coins"
            :coin="coin"
            :key="coin.id" />
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
