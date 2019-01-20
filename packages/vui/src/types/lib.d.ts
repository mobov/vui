import { Component } from 'vue'

declare module '@megmore/vui' {
  import { Component, DirectiveOptions } from 'vue'

  const MApp: Component
  const MIcon: Component

  export {
    MApp,
    MIcon
  }
}
