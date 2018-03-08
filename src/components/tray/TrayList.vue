<template>
  <section class="tray-list">
    <ul v-if="bags">
        <li v-for="bag in bags" :key="bag.name" class="list-item">
          <router-link to="/bag">
            <img class="list-icon" src="../../assets/bag.svg" alt="bag icon" />
            <span class="list-name">{{ bag.name }}</span>
          </router-link>
        </li>
    </ul>
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

.list-icon {
  display: block;
  height: 35px;
  margin: auto auto 3px;
}

.list-item {
  display: block;
  justify-content: center;
  padding: 8px 0;
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
