import { ComponentOptions, CreateElement, RenderContext, VNode } from 'vue'
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { TransitionName } from '../core/constant'

const compName = 'm-transition'

function getSize (size: string): number {
  if (!size) { return 0 }
  const index = size.indexOf('px')
  if (index === -1) { return 0 }
  return Number(size.substring(0, index))
}

const Expansion = {
  beforeEnter (el: HTMLElement): void {
    // @ts-ignore
    el.dataset.originPaddingTop = el.style.paddingTop
    // @ts-ignore
    el.dataset.originPaddingBottom = el.style.paddingBottom
    // @ts-ignore
    el.dataset.originOverflow = el.style.overflow
    el.style.paddingTop = '0'
    el.style.paddingBottom = '0'
    el.style.height = '0'
  },
  enter (el: HTMLElement): void {
    el.style.display = 'block'
    el.style.overflow = 'hidden'
    // @ts-ignore
    el.style.height = el.scrollHeight + getSize(el.dataset.originPaddingTop) + getSize(el.dataset.originPaddingBottom) + 'px'
    // @ts-ignore
    el.style.paddingTop = el.dataset.originPaddingTop
    // @ts-ignore
    el.style.paddingBottom = el.dataset.originPaddingBottom
  },
  afterEnter (el: HTMLElement): void {
    // el.style.display = '';
    // el.style.height = '';
    // @ts-ignore
    el.style.overflow = el.dataset.originOverflow
    // @ts-ignore
    el.style.paddingTop = el.dataset.originPaddingTop
    // @ts-ignore
    el.style.paddingBottom = el.dataset.originPaddingBottom
  },
  beforeLeave (el: HTMLElement): void {
    // @ts-ignore
    el.dataset.originPaddingTop = el.style.paddingTop
    // @ts-ignore
    el.dataset.originPaddingBottom = el.style.paddingBottom
    // @ts-ignore
    el.dataset.originOverflow = el.style.overflow

    el.style.display = 'block'
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px'
    }
    el.style.overflow = 'hidden'
  },
  leave (el: HTMLElement): void {
    if (el.scrollHeight !== 0) {
      setTimeout(() => {
        // @ts-ignore
        el.style.height = 0
        // @ts-ignore
        el.style.paddingTop = 0
        // @ts-ignore
        el.style.paddingBottom = 0
      })
    }
  },
  afterLeave (el: HTMLElement): void {
    el.style.display = 'none'
    el.style.height = ''
    // @ts-ignore
    el.style.overflow = el.dataset.originOverflow
    // @ts-ignore
    el.style.paddingTop = el.dataset.originPaddingTop
    // @ts-ignore
    el.style.paddingBottom = el.dataset.originPaddingBottom
  }
}

//
@Component({
  functional: true
} as ComponentOptions<Vue>)
// @Component
export default class MTransition extends Vue {
  @Prop({ type: String, default: TransitionName.none })
  name?: TransitionName

  render (h: CreateElement, { props, data, children, listeners }: RenderContext): VNode {
    const name = props.name

    let beforeEnter = (el: HTMLElement): void => {}
    let enter = (el: HTMLElement): void => {}
    let afterEnter = (el: HTMLElement): void => {}
    let beforeLeave = (el: HTMLElement): void => {}
    let leave = (el: HTMLElement): void => {}
    let afterLeave = (el: HTMLElement): void => {}
    if (name === TransitionName.expansion) {
      beforeEnter = Expansion.beforeEnter
      enter = Expansion.enter
      afterEnter = Expansion.afterEnter
      beforeLeave = Expansion.beforeLeave
      leave = Expansion.leave
      afterLeave = Expansion.afterLeave
    }

    return (
      <transition name={`${compName}-${name}`}
                  onBeforeEnter={(el) => {
                    if (listeners.onBeforeEnter && listeners.onBeforeEnter instanceof Function) {
                      listeners.onBeforeEnter()
                    }
                    beforeEnter(el)
                  }}
                  onEnter={enter}
                  onAfterEnter={(el) => {
                    if (listeners.onAfterEnter && listeners.onAfterEnter instanceof Function) {
                      listeners.onAfterEnter(el)
                    }
                    afterEnter(el)
                  }}
                  onBeforeLeave={(el) => {
                    if (listeners.onBeforeLeave && listeners.onBeforeLeave instanceof Function) {
                      listeners.onBeforeLeave(el)
                    }
                    beforeLeave(el)
                  }}
                  onLeave={leave}
                  onAfterLeave={(el) => {
                    if (listeners.onAfterLeave && listeners.onAfterLeave instanceof Function) {
                      listeners.onAfterLeave(el)
                    }
                    afterLeave(el)
                  }}>
        {children}
      </transition>
    )
  }
}
