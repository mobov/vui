import { Component, Prop, Vue, Mixins, Emit } from 'vue-property-decorator'
import { scrollToY } from '@mobov/es-helper'
import mixColor from '../core/mixin/color'
import mixSpaceMargin from '../core/mixin/space-margin'
import mixSpacePadding from '../core/mixin/space-padding'
import mixSize from '../core/mixin/size'
import mixElevation from '../core/mixin/elevation'

@Component
export default class MPanel extends Mixins (
  mixColor,
  mixSpaceMargin,
  mixSpacePadding,
  mixSize,
  mixElevation
) {
  name = 'm-panel'

  get classes () {
    const {} = this

    return {
      ...this.elevationClass
    }
  }

  get styles () {
    const { } = this

    return {
      ...this.sizeStyle,
      ...this.spaceMarginStyle
    }
  }

  get scrollerStyles () {
    const { } = this
    return {
      ...this.spacePaddingStyle
    }
  }

  RHeader () {
    const { name, $slots, styles, classes, scrollerStyles } = this

    return (
      <div staticClass={`${name}-header`}>
        {$slots.header}
      </div>
    )
  }

  RFooter () {
    const { name, $slots, styles, classes, scrollerStyles } = this

    return (
      <div staticClass={`${name}-footer`}>
        {$slots.footer}
      </div>
    )
  }

  render () {
    const { name, RFooter, RHeader, $slots, styles, classes, scrollerStyles } = this

    return (
      <div staticClass={name}
               class={classes}
               style={styles}>
        {RHeader()}
        <section staticClass={`${name}-main`}
                 class={classes}
                 style={scrollerStyles}>
          {$slots.default}
        </section>
        {RFooter()}
      </div>
    )
  }
}
