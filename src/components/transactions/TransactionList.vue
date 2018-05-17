<template>
    <section>
      <h2 class="transaction-heading">Coins</h2>
      <table v-if="transactions.length" class="transaction-list">
        <tbody>
          <transaction-detail 
            v-for="(transaction, index) in transactions"
            :transaction="transaction"
            :key="index" />        
        </tbody>
      </table>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BaseTransaction } from '@/types'

@Component({
  components: {
    'transaction-detail': () => import('./TransactionDetail.vue')
  }
})
export default class Transactions extends Vue {
  @Prop() transactions?: BaseTransaction[]
}
</script>

<style scoped>
.transaction-heading {
  border-bottom: solid thin #ccc;
  padding-bottom: 10px;
}
.transaction-list {
  margin: 12px 0;
  width: 100%;
}
</style>
