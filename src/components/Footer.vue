<template>
    <footer class="footer">
      <router-link to="/">Crypto Bag</router-link>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export class Footer extends Vue {}
</script>

<style scoped>
.footer {
  align-items: center;
  background-color: inherit;
  display: flex;
  justify-content: center;
}
</style>