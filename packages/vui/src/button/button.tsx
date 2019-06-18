import { Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import MIcon from '../icon'
import mixBase from '../core/mixin/base'
import mixVariety from '../core/mixin/variety'
import mixShape from '../core/mixin/shape'

@Component({
  components: { MIcon }
})
export default class MButton extends Mixins (
  mixBase,
  mixVariety,
  mixShape
) {
  name = 'm-button'

  @Prop({ type: Boolean })
  block!: boolean

  @Prop({ type: String })
  icon!: string

  @Prop({ type: Boolean })
  loading!: boolean

  @Prop({ type: Boolean })
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

  render () {
    const { name, classes, styles, icon, onClick } = this

    return (
      <div v-m-ripple
           staticClass={name}
           class={classes}
           style={styles}
           onClick={onClick}>
        {!icon ? undefined
          : <MIcon value={icon} />}
        {!this.$slots.default ? undefined
          : <div class={`${name}__main`}>{this.$slots.default}</div>}
      </div>
    )
  }
}
