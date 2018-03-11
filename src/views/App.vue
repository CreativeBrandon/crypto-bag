<template>
  <v-app id="app">
    <Header />
    <Tray />
    
    <v-container>
      <router-view></router-view>
    </v-container>
    
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

Component.registerHooks(['metaInfo'])

@Component({
  components: {
    Footer: () => import('@/components/Footer.vue'),
    Header: () => import('@/components/Header.vue'),
    Tray: () => import('@/components/tray/Tray.vue')
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
@import '../styles/vars.css';

.application--wrap {
  display: grid;
  grid-template-areas:
    'h h h h h h h h h h h h'
    'a m m m m m m m m m m m'
    'f f f f f f f f f f f f';
  grid-template-columns: 125px auto;
  grid-template-rows: 60px auto 80px;
  height: 100%;
}

.container {
  grid-area: m;
  height: 100%;
  max-width: 100%;
  text-align: initial;
}

.footer {
  border-top: thin solid var(--border-color);
  grid-area: f;
}

.header {
  grid-area: h;
}

.tray {
  border-right: thin solid var(--border-color);
  grid-area: a;
}
</style>
