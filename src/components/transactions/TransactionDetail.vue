<template>
    <tr class="transaction-detail">
        <td class="symbol">
            <img class="icon" v-if="transaction.symbol && cryptoIcon(transaction.symbol)" :src="cryptoIcon(transaction.symbol)" :alt="transaction.coin" />
        </td>
        <td class="name">{{ transaction.coin }}</td>
        <td class="amount">{{ transaction.amount | currency('', 6)}}</td>
    </tr>  
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import mixin from '@/mixins'
import { BaseTransaction } from '@/types'

@Component({
    mixins: [mixin]
})
export default class TransactionDetail extends Vue {
    @Prop() transaction?: BaseTransaction
}
</script>
<style scoped>
.amount {
    text-align: right;
}
.icon {
    height: 20px;
}
.name {
    width: 75%;
}
.symbol {
    width: 30px;
}
td {
    padding: 3px 0;
}
</style>
