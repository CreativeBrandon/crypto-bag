<template>
  <aside class="tray">
    <h3 class="heading">Bags</h3>
    
    <v-tooltip right>
      <v-btn color="indigo" dark fab flex small slot="activator" @click.stop="show = !show">
        <v-icon>add</v-icon>
      </v-btn>
      <span>Create new Bag</span>
    </v-tooltip>

    <TrayDialog 
      :show="show"
      @close="show = false"
      @create="createBag" />

    <TrayList :bags="bags" />
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import * as actions from '@/store/bags/action-types'
import * as getters from '@/store/bags/getter-types'
import { Bag } from '@/types'

const TrayDialog = () => import('./TrayDialog.vue')
const TrayList = () => import('./TrayList.vue')

@Component({
  components: { TrayDialog, TrayList }
})
export default class Tray extends Vue {
  show: boolean = false

  @Action(actions.ADD_BAG) addBag: any
  @Getter(getters.GET_BAGS) getBags: Bag[]

  created() {}

  get bags() {
    return this.getBags.reverse()
  }

  createBag(name: string) {
    this.show = !this.show
    this.addBag(name)
  }
}
</script>

<style scoped>
.heading {
  font-size: 0.9rem;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.tray {
  max-width: 150px;
  padding: 15px;
}
</style>
