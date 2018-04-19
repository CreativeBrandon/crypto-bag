<template>
    <section :id="id" class="autocomplete"> 
        <header class="autocomplete-header">
          <v-icon class="autocomplete-icon" medium>search</v-icon>

          <input type="text"
            aria-autocomplete="list"
            class="autocomplete-input" 
            :placeholder="placeholder"
            role="combobox"
            v-model="searchInput"
            @keyup="onKeyup" />

        </header>

        <div v-if="showResults" class="autocomplete-results">
          <h2 class="results-heading">Results for <span class="term">"{{ search.query }}"</span></h2>
          <ul class="results-list">
            <li class="results-list-item"
              v-for="(coin, index) in search.results" 
              :key="index">
                <button @click="onSelect(coin)">
                <img class="icon" v-if="cryptoIcon(coin.symbol)" :src="cryptoIcon(coin.symbol, 'black')" :alt="coin.name" />
                {{ coin.name}}
                </button>
            </li>
          </ul>
        </div>

    </section>  
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { Coin, CoinSearch } from '@/types/coins'
import mixin from '@/mixins'

@Component({
  mixins: [mixin]
})
export default class Autocomplete extends Vue {
  @Prop({ default: 'autocomplete' }) id: string
  @Prop({ default: 3}) min: number
  @Prop({ default: 'Search' }) placeholder: string
  @Prop() search: CoinSearch
  searchInput: string = ''

  get showResults() {
    if (this.search.results.length > 0 && this.searchInput.length >= this.min) return true
    return false
  }

  // Todo: Throttle with RXJS
  onKeyup(e: KeyboardEvent) {
    const { key } = e
    const ignoredKeys = [
      'Alt',
      'CapsLock',
      'Control',
      'End',
      'Meta',
      ' ',
      'PageUp',
      'PageDown',
      'Shift',
      'Tab'
    ] as string[]

    if (ignoredKeys.indexOf(key) > -1) return false

    if (this.searchInput.length >= this.min) this.$emit('search', this.searchInput)
  }

  onSelect(coin: Coin) {
    this.searchInput = coin.name
    this.$emit('selected', coin)
  }
}
</script>

<style scoped>
@import '../styles/vars.css';
.autocomplete {
  display: block;
  width: 100%;
}

.autocomplete-header {
  display: flex;
  justify-content: space-between;
}

.autocomplete-icon {
  margin: 10px 10px 10px 0;
}

.autocomplete-input {
  flex-grow: 1;
  padding: 10px;
}

.autocomplete-results {
  background-color: #FFF;
  border-bottom: thin solid #CCC;
  border-left: thin solid #CCC;
  border-right: thin solid #CCC;
  overflow-y: auto;
  padding: 10px;
  position: fixed;
  width: 400px;
  z-index: 1;
}

.icon {
  height: 15px;
  margin-right: 10px;
}

.results-heading {
  font-size: 1.2rem;  
  font-weight: 500;
  padding-bottom: 10px;
  text-align: center;
}

.results-heading .term {
  color: var(--indigo);
  font-style: italic;
}

.results-list {
  padding-bottom: 10px;
}

.results-list-item {
  display: block;
  padding: 2px;
}
</style>
