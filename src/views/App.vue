<template>
  <div id="app">
    <Header />
    <aside class="tray">Bags</aside>
    
    <main class="container">
      <router-view></router-view>
    </main>
    
    <Footer />
  </div>
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
@import '../styles/vars.css';

#app {
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

main {
  grid-area: m;
}

.container{
  max-width: 100%;
}
</style>
