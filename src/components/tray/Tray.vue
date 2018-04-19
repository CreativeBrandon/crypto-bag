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
      ref="dialog"
      :show="show"
      @close="show = false"
      @create="createBag" />

    <TrayList :bags="bags" />
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class'
import * as actions from '@/store/bags/action-types'
import * as getters from '@/store/bags/getter-types'
import { Bag } from '@/types'
import TrayDialog from '@/components/tray/TrayDialog.vue'

const TrayList = () => import('./TrayList.vue')

@Component({
  components: { TrayDialog, TrayList }
})
export default class Tray extends Vue {

  @Action(actions.ADD_BAG) addBag: (name: string) => void
  @Getter(getters.GET_BAGS) getBags: Bag[]
  $refs: { dialog: TrayDialog }
  show: boolean = false

  @Watch('show')
  onIsEditing(show: boolean) {
    if (show) this.$nextTick(() => this.$refs.dialog.$refs.name.focus())
  }

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
  font-size: 0.8em;
  padding: 15px;
  text-align: center;
}
</style>
