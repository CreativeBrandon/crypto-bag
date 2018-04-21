<template>
  <v-dialog v-model="show" persistent max-width="400px">
    <v-card>
      <v-card-title class="headline">Create Bag</v-card-title>
      
      <v-card-text>
        <v-text-field
          color="indigo"
          label="Your new bag name"
          ref="name"
          v-model="name"
          required
        />
      </v-card-text>

      <v-card-actions>
        <v-flex>
          <v-btn color="indigo" flat @click.stop="close">Cancel</v-btn>
          <v-btn color="indigo darken-1" flat @click.native.stop="create">Create</v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TrayDialog extends Vue {
  name: string | null = null
  $refs: { name: HTMLFormElement }
  @Prop() show?: boolean

  @Emit('close')
  close() {}

  mounted() {
    this.$nextTick(() => this.$refs.name.focus())
  }

  create(name: string) {
    if (this.name) {
      this.$emit('create', this.name)
      this.name = null
    }
  }
}
</script>

<style scoped>
@import '../../styles/vars.css';

.card__actions {
    text-align: center;
}
.headline {
  color: var(--primary-font-color);
  justify-content: center;
}
</style>
