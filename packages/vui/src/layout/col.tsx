// import { Vue, Component, Prop } from 'vue-property-decorator'
// import { ComponentOptions, CreateElement, RenderContext } from 'vue'
// import { genStaticStyles, genSpace } from '../core/util'
// import { BREAKPOINT } from '../core/constant'
//
// const compName = 'm-col'
//
// @Component({
//   functional: true
// } as ComponentOptions<Vue>)
// export default class MCol extends Vue {
//   @Prop({ type: String })
//   id?: string
//
//   @Prop({ type: String, default: 'div' })
//   tag!: string
//
//   @Prop({ type: Number })
//   xs?: number
//
//   @Prop({ type: Number })
//   sm?: number
//
//   @Prop({ type: Number })
//   md?: number
//
//   @Prop({ type: Number })
//   lg?: number
//
//   @Prop({ type: Number })
//   xl?: number
//
//   render (h: CreateElement, { props, data, children }: RenderContext) {
//     const staticClass = data.staticClass ? data.staticClass : ''
//     data.staticClass = `${compName} ${staticClass}`
//     data.staticStyle = data.staticStyle ? data.staticStyle : {}
//
//     genSpace(data.staticStyle, compName, props.space)
//     BREAKPOINT.forEach((breakpoint: string) => {
//       if (props[breakpoint]) {
//         genStaticStyles(data.staticStyle, compName, `span-${breakpoint}`, props[breakpoint])
//       }
//     })
//     if (props.id) {
//       data.domProps = data.domProps || {}
//       data.domProps.id = props.id
//     }
//     return h(props.tag, data, children)
//   }
// }

import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import { genStaticStyles } from '../core/util'
import { BREAKPOINT } from '../core/constant'
import mixSpacePadding from '../core/mixin/space-padding'
import mixSpaceMargin from '../core/mixin/space-margin'
import mixElevation from '../core/mixin/elevation'
import mixSize from '../core/mixin/size'

@Component
export default class MCol extends Mixins (
  mixSpacePadding,
  mixSpaceMargin,
  mixSize,
  mixElevation
) {
  name = 'm-col'

  @Prop({ type: Number })
  xs?: number

  @Prop({ type: Number })
  sm?: number

  @Prop({ type: Number })
  md?: number

  @Prop({ type: Number })
  lg?: number

  @Prop({ type: Number })
  xl?: number

  get styles () {
    const styles = {
      ...this.spacePaddingStyle
    }

    BREAKPOINT.forEach((breakpoint: string) => {
      if (this[breakpoint]) {
        genStaticStyles(styles, this.name, `span-${breakpoint}`, this[breakpoint])
      }
    })

    return styles
  }

  get classes () {
    return {
      ...this.elevationClass
    }
  }

  render () {
    const { name, $slots, styles, classes } = this

    return (
      <div staticClass={name}
           class={classes}
           style={styles}>
        {$slots.default}
      </div>
    )
  }
}
