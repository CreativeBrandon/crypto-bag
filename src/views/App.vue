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
  grid-template-rows: 60px auto 80px;
	grid-template-areas:
		'h h h h h h h h h h h h'
		'a m m m m m m m m m m m'
		'f f f f f f f f f f f f';
	height: 100%;
}

aside {
  border-right: thin solid #CCC;
  grid-area: a;
}

footer {
  border-top: thin solid #CCC;
  grid-area: f;
}

header {
  grid-area: h;
}

.container {
  grid-area: m;
}

.container{
  max-width: 100%;
}
</style>
