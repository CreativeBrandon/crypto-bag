<template>
  <section class="tray-list">
    <ul v-if="bags.length > 0">
      <transition-group name="list" tag="p">
        <li v-for="bag in bags" :key="bag.name" class="list-item">
          <router-link to="/bag">
            <span class="count">{{ bag.coins.length }}</span>
            <img class="list-icon" src="../../assets/bag.svg" alt="bag icon" />
            <span class="list-name">{{ bag.name }}</span>
          </router-link>
        </li>
      </transition-group>
    </ul>

    <transition v-else name="fade">
      <div class="placeholder">
        <img class="list-icon" src="../../assets/bag.svg" alt="bag icon" />
        Create a bag above and keep track of your moon missions :)
      </div>
    </transition>
  </section> 
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { Bag } from '@/types'

@Component
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
  right: 28px;
  top: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.7s;
}

.list-icon {
  display: block;
  height: 35px;
  margin: auto auto 3px;
}

.list-item {
  display: block;
  justify-content: center;
  padding: 8px 0;
  position: relative;
}

.list-name {
  display: block;
  font-size: 0.9em;
  text-transform: capitalize;
}

.tray-list {
  border-top: solid thin var(--border-color);
  margin-top: 15px;
  padding: 15px 0;
}
</style>
