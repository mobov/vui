import { Component, Mixins } from 'vue-property-decorator'
import { scrollToX } from '@mobov/es-helper'
import mixBase from '../core/mixin/base'
import mixVariety from '../core/mixin/variety'
import mixShape from '../core/mixin/shape'

@Component
export default class MAppBar extends Mixins (
  mixBase,
  mixVariety,
  mixShape
) {
  name = 'm-app-bar'

  get styles () {
    return {
      ...this.baseStyle,
    }
  }

  get classes () {
    return {
      ...this.baseClass,
      ...this.varietyClass,
      ...this.shapeClass
    }
  }

  handleWheel (e) {

  }

  handleScroll (e) {

  }

  render () {
    const { name, $slots, classes, styles, handleScroll, handleWheel } = this
    // {$slots.left}
    // <section ref="scrollWrapper"
    //          staticClass="o-app-bar__main"
    //          onscroll={handleScroll}
    //          onmousewheel={handleWheel}>
    //   {$slots.default}
    // </section>
    //
    // {$slots.right}
    return (
      <div staticClass={name}
           style={styles}
           class={classes}>
        {$slots.default}
      </div>
    )
  }
}
