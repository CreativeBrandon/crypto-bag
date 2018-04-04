<template>
  <section class="tray-list">
    <ul v-if="bags.length > 0">
      <transition-group name="list" tag="p">
        <li v-for="(bag, index) in bags" :index="index" :key="bag.id" class="list-item">
          <router-link :to="`/bag/${bag.id}`">
            <span class="count">{{ bag.coins.length }}</span>
            <img class="list-icon" src="../../assets/bag.svg" alt="bag icon" />
            <span class="list-name">{{ bag.name }}</span>
          </router-link>
        </li>
      </transition-group>
    </ul>

    <transition v-else name="fade">
      <Placeholder copy="Create a bag above and keep track of your moon missions :)" image="bag.svg" />
    </transition>

  </section> 
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { Bag } from '@/types'

@Component({
  components: {
    Placeholder: () => import('@/components/Placeholder.vue'),
  }
})
export default class TrayList extends Vue {
  @Prop() bags: Bag[]
}
</script>

<style scoped>
@import '../../styles/vars.css';

a {
  display: block;
}

.count {
  background-color: red;
  border-radius: 50%;
  color: #fff;
  font-size: 0.65em;
  padding: 0.2em 0.4em;
  position: absolute;
  margin-left: 7px;
  top: -6px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-icon,
.placeholder >>> .icon {
  display: block;
  height: 35px;
  margin: auto auto 5px;
}

.list-item {
  display: block;
  justify-content: center;
  margin: 20px 0;
  position: relative;
}

.list-name {
  display: block;
  line-height: 1.3em;
  text-transform: capitalize;
}

.placeholder {
  padding: 20px 0;
}

.tray-list {
  border-top: solid thin var(--border-color);
  margin-top: 15px;
}
</style>
