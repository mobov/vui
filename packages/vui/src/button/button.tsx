import { Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import MIcon from '../icon'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import elevated from '../core/mixin/elevated'
import variable from '../core/mixin/variable'
import shapeable from '../core/mixin/shapeable'
import { genColor, genElevation, genFontColor, genSize, genShape, genVariety } from '../core/util'

const compName = 'm-button'

@Component({
  components: { MIcon }
})
export default class MButton extends Mixins (
  colorable,
  sizeable,
  elevated,
  variable,
  shapeable
) {
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
    const { fontColor, size, color, elevation } = this
    const styles = {}

    genFontColor(styles, compName, fontColor)
    genColor(styles, compName, color)
    genElevation(styles, compName, elevation)
    genSize(styles, compName, size)

    return styles
  }

  get classes () {
    const { shape, variety, block, disabled } = this
    const classes = {
      'm--block': block,
      'm--disabled': disabled,
    }

    genShape(classes, shape)
    genVariety(classes, variety)

    console.log()

    return classes
  }

  render () {
    const { classes, styles, icon, onClick } = this

    return (
      <div v-m-ripple
           staticClass={compName}
           class={classes}
           style={styles}
           onClick={onClick}>
        {!icon ? undefined
          : <MIcon name={icon} />}
        {!this.$slots.default ? undefined
          : <div class={`${compName}__main`}>{this.$slots.default}</div>}
      </div>
    )
  }
}
