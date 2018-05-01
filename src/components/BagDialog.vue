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
								placeholder="Search coins..." />

                <v-flex>
                    <numeric-text-field :value="formModel.amount" @value="onAmountOfCoins" />
                </v-flex>
            </v-layout>
            
            <v-card-actions>
                <v-flex>
                    <v-btn color="indigo" flat @click.stop="close">Cancel</v-btn>
										<v-btn color="indigo darken-1" :disabled="!isValid()" flat @click.native.stop="onSubmit">Add</v-btn>
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

const defaultTransaction = (): BaseTransaction => ({ amount: 0, coin: '' })

@Component({
  components: {
    Autocomplete: () => import('@/components/Autocomplete.vue'),
    'numeric-text-field': () => import('@/components/NumericTextField.vue')
  },
  mixins: [],
  filters: {}
})
export default class BagDialog extends Vue {
  @Prop() show?: boolean
  @Prop({ default: defaultTransaction }) transaction: BaseTransaction
  formModel: BaseTransaction = this.transaction

  get amount() {
    return this.transaction.amount
  }

  set amount(amount: any) {
    this.transaction = amount
  }

  close() {
    this.$emit('close')
  }

  isValid(): boolean {
    if (this.formModel.coin && this.formModel.amount > 0) return true

    return false
  }

  onAmountOfCoins(amount: number) {
    this.formModel.amount = amount
  }

  onSelectedCoin(coin: Coin) {
    this.formModel.coin = coin.name
  }

  onSubmit() {
    if (this.isValid) {
      this.$emit('submit', this.formModel)
      this.resetForm()
      this.close()
    }
  }

  resetForm() {
    this.formModel = this.transaction
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
