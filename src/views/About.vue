<template>
  <main class="about">
    <img src="../assets/logo.png">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const HelloWorld = () => import('@/components/HelloWorld.vue')

Component.registerHooks(['metaInfo'])

@Component({
  components: {
    HelloWorld,
  },
})
export default class About extends Vue {
  public metaInfo() {
    return {
      title: 'About'
    }
  }
}
</script>