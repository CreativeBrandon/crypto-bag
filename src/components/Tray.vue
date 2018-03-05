<template>
  <aside class="tray">
    <h3 class="heading">Bags</h3>

    <v-btn color="indigo" dark fab flex small>
      <v-icon>add</v-icon>
    </v-btn>

  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

</script>

<style scoped>
.heading {
  font-size: 0.9rem;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.tray {
  padding: 15px 0 0;
}
</style>
