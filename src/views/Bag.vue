<template>
  <main class="bag">

    <section v-if="bag">
      <div class="bag-header">
        <h1 class="bag-title">
          <input v-show="isEditing" type="text" ref="name" :value="bag.name" @keydown.enter="save" />
          <span v-show="!isEditing">{{bag.name}}</span>
        </h1>

        <button v-if="isEditing" class="btn" @click="save">Save</button>
        <button v-else class="btn" @click="edit">Edit <v-icon>edit</v-icon></button>
      </div>
    </section>
    
    <section v-else class="placeholder">
      <h1>Uh Oh...</h1>
      Sorry this Bag does not exists :(
    </section>
    
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import * as actions from '@/store/bags/action-types'
import * as getters from '@/store/bags/getter-types'
import { Bag } from '@/types'
import { URLSearchParams } from 'url'

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

  created() {}

  edit() {
    this.commitIsEditing(!this.isEditing)
  }

  save() {
    const bag = this.bag as Bag
    bag.name = this.$refs.name.value
    this.saveBag(bag)
    this.edit()
  }

  get bag(): Bag {
    return this.getBag(this.id)
  }
}
</script>

<style scoped>
.bag-header,
.bag-title input {
  text-align: center;
}
.btn {
  display: inline-block;
}
</style>
