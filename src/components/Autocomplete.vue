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
            @keypress.enter="clearSearch()"
            @keyup="onKeyup" />

        </header>

        <div v-if="search.isSearching" class="autocomplete-results">
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
import { Action, State } from 'vuex-class'
import * as coinActions from '@/store/coins/action-types'
import { Coin, CoinSearch, CoinState } from '@/types'
import mixin from '@/mixins'

@Component({
  mixins: [mixin]
})
export default class Autocomplete extends Vue {
  @Action(coinActions.CLEAR_COIN_SEARCH) clearSearch: () => void
  @Action(coinActions.SEARCH_COINS) searchCoins: (query: string) => void
  @Prop({ default: 'autocomplete' }) id: string
  @Prop({ default: 3}) min: number
  @Prop({ default: 'Search' }) placeholder: string
  @Prop({ default: ''}) value: string
  @State('coins') coinState: CoinState
  searchInput: string = this.value

  get search(): CoinSearch {
    return this.coinState.search
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

    if (ignoredKeys.includes(key)) return false

    if (this.searchInput.length >= this.min) this.searchCoins(this.searchInput)
    else if (this.searchInput.length === 0) this.clearSearch()
  }

  onSelect(coin: Coin) {
    this.clearSearch()
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
