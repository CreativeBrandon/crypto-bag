<template>
    <main class="notFound">
        <h1>404: Not Found</h1>
        <article>
            <p>Hey! It looks like this page doesn't exist yet.</p>
            <button @click="$router.back()">Return</button>
        </article>
    </main>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Route } from 'vue-router'

Component.registerHooks(['metaInfo'])

@Component
export default class NotFoundPage extends Vue {

  public metaInfo() {
    return {
      title: '404 Page not found'
    }
  }
}
</script>
