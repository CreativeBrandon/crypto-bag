<template>
  <aside class="tray">
    <h3 class="heading">Bags</h3>
    
    <v-tooltip right>
      <v-btn color="indigo" dark fab flex small slot="activator" @click.stop="show = true">
        <v-icon>add</v-icon>
      </v-btn>
      <span>Create new Bag</span>
    </v-tooltip>

    <TrayDialog 
      :show="show"
      @close="show = false"
      @create="createBag" />
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import * as actions from '@/store/bags/action-types'
import * as getters from '@/store/bags/getter-types'
import { Bag } from '@/types'

const TrayDialog = () => import('./TrayDialog.vue')

@Component({
  components: { TrayDialog }
})
export default class Tray extends Vue {
  show: boolean = false

  @Action(actions.ADD_BAG) addBag: any
  @Getter(getters.GET_BAGS) getBags: Bag[]

  created() {}

  createBag(name: string) {
    this.show = false
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
  padding: 15px 0 0;
}
</style>
