import { Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import mixBase from '../core/mixin/base'
import mixVariety from '../core/mixin/variety'
import mixShape from '../core/mixin/shape'

@Component
export default class MButton extends Mixins (
  mixBase,
  mixVariety,
  mixShape
) {
  name = 'm-button'

  @Prop({ type: Boolean, default: false })
  block!: boolean

  @Prop({ type: Boolean, default: false })
  loading!: boolean

  @Prop({ type: Boolean, default: false })
  disabled!: boolean

  @Emit('click')
  onClick (e: MouseEvent | TouchEvent): void { }

  get styles () {
    return {
      ...this.baseStyle,
    }
  }

  get classes () {
    const { block, disabled } = this
    return {
      ...this.baseClass,
      ...this.shapeClass,
      ...this.varietyClass,
      'm--block': block,
      'm--disabled': disabled,
    }
  }

  handleClick (e) {
    if (!this.disabled) {
      this.onClick(e)
    }
  }

  render () {
    const { name, classes, styles, handleClick, disabled } = this
    // {!icon ? undefined
    //   : <MIcon value={icon} />}
    // {!this.$slots.default ? undefined
    //   : <div class={`${name}__main`}>{this.$slots.default}</div>}

    return (
      <div v-m-ripple={!disabled}
           staticClass={name}
           class={classes}
           style={styles}
           onClick={handleClick}>
        {this.$slots.default}
      </div>
    )
  }
}
