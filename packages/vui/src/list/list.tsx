import { Component, Prop, Vue, Emit, Mixins } from 'vue-property-decorator'
import { genSize } from '../core/util'
import mixBase from '../core/mixin/base'
import { size } from '../core/constant'

@Component
export default class MList extends Mixins (
  mixBase
) {
  name = 'm-list'

  @Emit('click')
  onClick (e: MouseEvent) {}

  get styles () {
    return {
      ...this.baseStyle
    }
  }

  get classes () {
    return {
      ...this.baseClass
    }
  }

  render () {
    const { name, classes, styles, $slots, onClick } = this

    return (
      <div staticClass={name}
           class={classes}
           onClick={onClick}
           style={styles}>
        {$slots.media ? <div staticClass={`${name}__media`}>{$slots.media}</div> : undefined}
        <div staticClass={`${name}__content`}>
          {$slots.default}
        </div>
        {$slots.action ? <div staticClass={`${name}__action`}>{$slots.action}</div> : undefined}
      </div>
    )
  }
}
