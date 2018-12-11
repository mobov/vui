import Vue, { VNode, RenderContext } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
    interface Render {
      (h: () => VNode, context: RenderContext): VNode
    }
  }
}
