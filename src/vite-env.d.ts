/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


// https://unpkg.com/browse/primevue@3.18.0/config/package.json
// import PrimeVue from 'primevue/config' // Not working in PrimeVue@3.18.0
declare module 'primevue/config/config.esm.js' {
  import type { Plugin } from 'vue'
  import plugin from 'primevue/config/config.esm.js'
  export default plugin as Plugin
}