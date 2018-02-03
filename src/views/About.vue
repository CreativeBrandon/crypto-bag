<template>
  <div class="about">
    <img src="../assets/logo.png">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const HelloWorld = () => import('@/components/HelloWorld.vue')

@Component({
  components: {
    HelloWorld,
  },
})
export default class About extends Vue {}
</script>