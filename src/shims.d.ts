declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module '*.json' {
    const data: any
    export default data
}

declare module 'flush-promises' {
    export default function flushPromises(): any
}

declare module 'vue2-filters';

/*
declare module 'vue2-filters' {
    import { PluginObject } from 'vue'
    export function currency(): string
    export default function Vue2Filters(): PluginObject<any> 
}*/

declare module 'vue/types/vue' {
    import { MetaInfo } from 'vue-meta'
    interface Vue {
        metaInfo?: MetaInfo | (() => MetaInfo)
    }
}
