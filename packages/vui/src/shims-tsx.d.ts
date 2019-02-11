import Vue, { VNode, RenderContext, CreateElement } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {
      class?: string
    }
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }

    // interface Render {
    //   (h: CreateElement, context: RenderContext): VNode
    // }
  }
}
