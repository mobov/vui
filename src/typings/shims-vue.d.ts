import { VueConstructor, DirectiveFunction } from "vue"

declare module '*.vue' {
  import Vue from 'vue'

  export default Vue

  export interface DirectiveOptions {
    bind?: DirectiveFunction;
    inserted?: DirectiveFunction;
    update?: DirectiveFunction;
    componentUpdated?: DirectiveFunction;
    unbind?: DirectiveFunction;
    install?: (Vue:  VueConstructor) => void
    name: string
  }
}
