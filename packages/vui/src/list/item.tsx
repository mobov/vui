import { Component, Prop, Vue, Emit, Mixins } from 'vue-property-decorator'
import mixBase from '../core/mixin/base'
import { Size } from '../core/constant'

@Component
export default class MListItem extends Mixins (
  mixBase
) {
  name = 'm-list-item'

  @Prop({ type: String, default: Size.sm})
  padding!: Size.sm

  @Prop({ type: Boolean, default: false})
  divider!: boolean

  @Prop({ type: Boolean, default: false})
  hover!: boolean

  @Prop({ type: Boolean, default: false})
  active!: boolean

  @Emit('click')
  onClick (e: MouseEvent) {}

  get styles () {
    return {
      ...this.baseStyle
    }
  }

  get classes () {
    const { divider, hover, active } = this
    return {
      '--with-divider': divider,
      '--with-hover': hover,
      '--active': active,
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
        <div staticClass={`${name}__main`}>
          {$slots.media ? <div staticClass={`${name}__media`}>{$slots.media}</div> : undefined}
          <div staticClass={`${name}__content`}>
            {$slots.default}
          </div>
          {$slots.action ? <div staticClass={`${name}__action`}>{$slots.action}</div> : undefined}
        </div>
        {$slots.extra ? <div staticClass={`${name}__extra`}>{$slots.extra}</div> : undefined}
      </div>
    )
  }
}
