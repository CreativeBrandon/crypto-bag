<template>
    <v-dialog
        v-model="show"
        persistent
        width="440px" >
        <v-card class="bag-card">
            <v-card-title ref="title" class="headline">Add Coin</v-card-title>
            <v-card-text>
                <p>Search for a coin below and enter the total amount of coins you would like to add to this bag</p>
            </v-card-text>
            
            <v-layout wrap class="dialog-content">
							<Autocomplete
                :value="formModel.coin"
								@selected="onSelectedCoin"
                @blur="onBlur"
								placeholder="Search coins..." />

                <v-flex>
                    <numeric-text-field :value="formModel.amount" @onChange="onAmountOfCoins" />
                </v-flex>
            </v-layout>
            
            <v-card-actions>
                <v-flex>
                    <v-btn color="indigo" flat @click.stop="close">Cancel</v-btn>
										<v-btn color="indigo darken-1" :disabled="!isValid" flat @click.native.stop="onSubmit">Add</v-btn>
                </v-flex>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'
import { isNumeric } from '@/utils'
import { CoinSearch, Coin, BaseTransaction } from '@/types'
import Autocomplete from '@/components/Autocomplete.vue'

const defaultTransaction = (): BaseTransaction => ({
  amount: 0,
  coin: '',
  price_usd: 0,
  price_btc: 0,
  symbol: ''
})

@Component({
  components: {
    Autocomplete: () => import('@/components/Autocomplete.vue'),
    'numeric-text-field': () => import('@/components/NumericTextField.vue')
  }
})
export default class BagDialog extends Vue {
  @Prop() show?: boolean
  @Prop() transaction?: BaseTransaction
  formModel: BaseTransaction = defaultTransaction()

  onBlur(event: Event) {
    const el = event.target as HTMLInputElement
    if (!el.value) this.formModel.coin = ''
  }

  get amount() {
    return this.formModel.amount
  }

  set amount(amount: any) {
    this.formModel = amount
  }

  get isValid() {
    if (this.formModel.coin && this.formModel.amount > 0) return true
    return false
  }

  close() {
    this.$emit('close')
  }

  onAmountOfCoins(amount: number) {
    this.formModel.amount = amount
  }

  onSelectedCoin(coin: Coin) {
    this.formModel = {
      ...this.formModel,
      coin: coin.name,
      price_usd: coin.price_usd,
      price_btc: coin.price_btc,
      symbol: coin.symbol
    }
  }

  onSubmit() {
    if (this.isValid) {
      this.$emit('submit', this.formModel)
      this.close()
    }
  }
}
</script>

<style scoped>
.bag-actions {
  text-align: center;
}
.bag-card {
  padding: 20px;
}
.card__text {
  padding: 16px 0;
}
.card__actions {
  text-align: center;
}
.card__title {
  padding: 8px 0 0;
}
.dialog-amount {
  margin: 0 auto;
  width: 200px;
}
.dialog-content {
  min-height: 200px;
}
.dialog-content >>> .autocomplete-header {
  border-bottom: thin solid #ccc;
}
.dialog-content >>> .autocomplete-results {
  width: 400px;
}
</style>
