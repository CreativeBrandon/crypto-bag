<template>
  <main class="bag">

    <section v-if="bag">
      <div class="bag-header">
        <h1 class="bag-title">
          <input v-show="isEditing" type="text" ref="name" :value="bag.name" @keydown.enter="save" />
          <span v-show="!isEditing">{{bag.name}}</span>
        </h1>

        <template v-if="isEditing">
          <v-btn flat light small @click="edit">Cancel</v-btn>
          <v-btn flat light outline small @click="save">Save</v-btn>
        </template>
        
        <template v-else>
          <v-btn flat light outline small @click="edit">Edit</v-btn>
        </template>
      </div>
    </section>
    
    <section v-else class="placeholder">
      <h1>Uh Oh...</h1>
      <p>Sorry this Bag does not exists :(</p>
    </section>
    
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import * as actions from '@/store/bags/action-types'
import * as getters from '@/store/bags/getter-types'
import { Bag } from '@/types'

@Component({})
export default class BagPage extends Vue {

  @Action(actions.IS_EDITING) commitIsEditing: (status: boolean) => void
  @Action(actions.SAVE_BAG) saveBag: (bag: Bag) => void
  @Getter(getters.GET_BAG) getBag?: any
  @Getter(getters.IS_EDITING) isEditing: boolean
  @Prop() id: string // url param
  $refs: { name: HTMLFormElement }


  @Watch('isEditing')
  onIsEditing(isEditing: boolean) {
    if (isEditing) this.$nextTick(() => this.$refs.name.focus())
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
.bag-header,
.bag-title input,
.placeholder {
  text-align: center;
  width: 100%;
}
</style>
