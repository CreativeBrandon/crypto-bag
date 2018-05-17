<template>
  <main class="bag">

    <template v-if="bag">
      <header class="bag-header">
        <h1 class="bag-title">
          <input v-show="isEditing" type="text" ref="name" :value="bag.name" @keydown.enter="save" />
          <span v-show="!isEditing" @click="edit">{{bag.name}}</span>
        </h1>

        <template v-if="isEditing">
          <v-btn flat light small @click="edit">Cancel</v-btn>
          <v-btn flat light outline small @click="save">Save</v-btn>
        </template>
        
        <template v-else>
          <v-btn flat light small @click="remove">Delete</v-btn>
          <v-btn flat light outline small @click="edit">Edit</v-btn>
        </template>
      </header>

      <section class="bag-stats">
        <div>Total USD: $0</div>
        <div>Total Market Cap: $0 USD</div>
      </section>

      <section class="bag-content">
        
        <transaction-list :transactions="bag.coins" />
        
        <div class="flex text-xs-center bag-add-btn">
          <v-btn color="indigo add-coins-btn" dark fab small @click.stop="show = !show">
            <v-icon>add</v-icon>
          </v-btn>
          <div>Add coins</div>
        </div>
      </section>

      <bag-dialog 
        :show="show"
        @close="show = false"        
        @submit="onAddTransaction" />

    </template>

    <Placeholder v-else :isSolo="true" title="Uh Oh..." copy="Sorry this Bag does not exists :(" />
    
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter, Mutation, State } from 'vuex-class'
import Router from 'vue-router'
import * as actions from '@/store/bags/action-types'
import * as getters from '@/store/bags/getter-types'
import { Bag, CoinState, BaseTransaction, Transaction } from '@/types'

@Component({
  components: {
    Autocomplete: () => import('@/components/Autocomplete.vue'),
    'bag-dialog': () => import('@/components/BagDialog.vue'),
    Placeholder: () => import('@/components/Placeholder.vue'),
    'transaction-list': () => import('@/components/transactions/TransactionList.vue')
  }
})
export default class BagPage extends Vue {
  @Action(actions.ADD_TRANSACTION) addTransaction: (transaction: Transaction) => void
  @Action(actions.IS_EDITING) userIsEditing: (status: boolean) => void
  @Action(actions.DELETE_BAG) deleteBag: (id: number) => void
  @Action(actions.SAVE_BAG) saveBag: (bag: Bag) => void
  @Getter(getters.GET_BAG) getBag: (id: string) => Bag
  @Getter(getters.IS_EDITING) isEditing: boolean
  @Prop() id: string // url param
  $refs: { name: HTMLFormElement }
  $router: Router
  show: boolean = false

  @Watch('isEditing')
  onIsEditing(isEditing: boolean) {
    if (isEditing) this.$nextTick(() => this.$refs.name.focus())
  }

  get bag(): Bag {
    return this.getBag(this.id)
  }

  onAddTransaction(data: BaseTransaction) {
    this.addTransaction({
      ...data,
      bagId: Number(this.id)
    })
  }

  edit() {
    this.userIsEditing(!this.isEditing)
  }

  remove() {
    this.deleteBag(this.bag.id)
    this.$router.push('/home')
  }

  save() {
    const bag = this.bag as Bag
    bag.name = this.$refs.name.value
    this.edit()
    this.saveBag(bag)
  }
}
</script>

<style scoped>
.bag-add-btn {
  margin-bottom: 20px;
  margin-top: 30px;
}
.bag-content {
  margin: 0 auto 30px;
  width: 75%;
}

.bag-header {
  margin-bottom: 30px;
}

.bag-placeholder {
  text-align: center;
  padding: 40px;
}

.bag-stats {
  margin: 0 auto 30px;
  width: 75%;
}

.bag-title span:hover {
  cursor: pointer;
}

.bag-header,
.bag-title input,
.placeholder {
  text-align: center;
  width: 100%;
}

.placeholder >>> .title {
  margin-bottom: 20px;
}
</style>
