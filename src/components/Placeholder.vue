<template>
    <div class="placeholder" :class="{ solo: isSolo }" >
        <h2 v-if="title" class="title">{{title}}</h2>
        <img v-if="image" class="icon" :src="src" alt="placeholder" />
        <p class="copy">{{copy}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Placeholder extends Vue {
    @Prop() copy?: string
    @Prop() isSolo?: boolean
    @Prop() image?: string
    @Prop() title?: string

    get src() {
        return require(`@/assets/${this.image}`)
    }
}
</script>

<style scoped>
.icon {
    max-width: 60px;
}
.placeholder {
    overflow: hidden;
}
.placeholder.solo {
    margin-top: 50px;
}
</style>
