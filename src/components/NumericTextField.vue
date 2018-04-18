<template>
  <v-text-field
    class="dialog-amount"
    :color="color"
    :label="placeholder"
    required
    v-model="value"
    @keypress="onKeypress" />
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { isNumeric } from '../utils/index'

@Component
export default class NumericTextField extends Vue {
  @Prop({ default: 'indigo' }) color?: string
  @Prop({ default: 'Amount of Coins' }) placeholder?: string
  @Prop({ default: 0 }) value?: number

  isAllowed(key: string): boolean{
    const allowedKeys = ['.', 'Backspace', 'Tab'] as string[]
    if (allowedKeys.indexOf(key) > -1 || isNumeric(key)) return true
    return false
  }

  onKeypress(e: KeyboardEvent) {    
    if (!this.isAllowed(e.key)) e.preventDefault() 
  }
}
</script>
