<template>
  <main class="bag">

    <div v-if="bag">
      <header class="bag-header">
        <h1 class="bag-title">
          <input v-show="isEditing" type="text" ref="name" :value="bag.name" @keydown.enter="save" />
          <span v-show="!isEditing">{{bag.name}}</span>
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
        <h2 class="bag-heading">Coins</h2>
        <p class="bag-placeholder">Add coins to your bag above</p>
      </section>
    </div>
    
    <div v-else class="placeholder">
      <h1>Uh Oh...</h1>
      <p>Sorry this Bag does not exists :(</p>
    </div>
    
  </main>
</template>

<script lang="ts">
import Router from 'vue-router'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import * as actions from '@/store/bags/action-types'
import * as getters from '@/store/bags/getter-types'
import { Bag } from '@/types'

@Component({})
export default class BagPage extends Vue {

  @Action(actions.IS_EDITING) commitIsEditing: (status: boolean) => void
  @Action(actions.DELETE_BAG) deleteBag: (id: number) => void
  @Action(actions.SAVE_BAG) saveBag: (bag: Bag) => void
  @Getter(getters.GET_BAG) getBag?: any
  @Getter(getters.IS_EDITING) isEditing: boolean
  @Prop() id: string // url param
  $refs: { name: HTMLFormElement }
  $router: Router


  @Watch('isEditing')
  onIsEditing(isEditing: boolean) {
    if (isEditing) this.$nextTick(() => this.$refs.name.focus())
  }

  remove() {
    this.deleteBag(this.bag.id)
    this.$router.push('/home')
  }

  edit() {
    this.commitIsEditing(!this.isEditing)
  }

  save() {
    const bag = this.bag as Bag
    bag.name = this.$refs.name.value
    this.edit()
    this.saveBag(bag)
  }

  get bag(): Bag {
    return this.getBag(this.id)
  }
}
</script>

<style scoped>
.bag-content {
  margin: 0 auto 30px;
  width: 75%;
}

.bag-header {
  margin-bottom: 30px;
}

.bag-heading {
  border-bottom: solid thin #ccc;
  padding-bottom: 10px;
}

.bag-placeholder {
  text-align: center;
  padding: 40px;
}

.bag-stats {
  margin: 0 auto 30px;
  width: 75%;
}

.bag-header,
.bag-title input,
.placeholder {
  text-align: center;
  width: 100%;
}
</style>
