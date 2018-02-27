<template>
  <v-app id="app">
    <Header />

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const Footer = () => import('@/components/Footer.vue')
const Header = () => import('@/components/Header.vue')

Component.registerHooks(['metaInfo'])

@Component({
  components: {
    Footer,
    Header
  }
})
export default class App extends Vue {
  public metaInfo() {
    return {
      htmlAttrs: {},
      meta: {},
      title: 'Home',
      titleTemplate: '%s | Crypto Bag'
    }
  }
}
</script>

<style>
@import '../styles/theme.css';

a:hover,
a:focus {
  color: purple;
  text-decoration: underline;
}
</style>
