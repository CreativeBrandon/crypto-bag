declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'flush-promises' {
  export default function flushPromises(): any
}
