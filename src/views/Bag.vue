<template>
  <main class="bag">

    <section v-if="bag">
      <h1 class="title">{{bag.name}}</h1>
    </section>
    
    <div v-else class="placeholder">
      <h1>Uh Oh...</h1>
      Sorry this Bag does not exists :(
    </div>
    
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import * as actions from '@/store/bags/action-types'
import * as getters from '@/store/bags/getter-types'
import { Bag } from '@/types'
import { URLSearchParams } from 'url';

@Component({})
export default class BagPage extends Vue {
  @Prop() id: string // url param
  @Getter(getters.GET_BAG) getBag?: any

  get bag(): Bag {
    return this.getBag(this.id)
  }
}
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
