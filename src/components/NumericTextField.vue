<template>
  <v-text-field
    class="dialog-amount"
    :color="color"
    :label="placeholder"
    required
    v-model.number="amount"
    @focus="$event.target.select()"
    @keypress="onKeypress" />
</template>

<script lang="ts">
import { Component, Emit, Prop, Watch, Vue } from 'vue-property-decorator'
import { isNumeric } from '@/utils'

@Component
export default class NumericTextField extends Vue {
  @Prop({ default: 'indigo' }) color: string
  @Prop({ default: 'Amount of Coins' }) placeholder: string
  @Prop({ default: 0}) value: number
  amount: number = this.value

  @Watch('amount')
  onAmount(val: string, oldVal: string) {
    this.$emit('onChange', Number(val))
  }

  isAllowed(key: string): boolean {
    const allowedKeys = ['.', 'Backspace', 'Tab'] as string[]
    if (allowedKeys.includes(key) || isNumeric(key)) return true
    return false
  }

  onKeypress(e: KeyboardEvent) {
    if (!this.isAllowed(e.key)) e.preventDefault()
  }
}
</script>
