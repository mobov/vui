import { Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import MIcon from '../icon'
import color from '../core/mixin/color'
import size from '../core/mixin/size'
import { genColor, genFontColor, genSize } from '../core/util'

const compName = 'm-radio'

@Component({
  components: { MIcon }
})
export default class MRadio extends Mixins (
  color,
  size
) {
  @Prop({ type: [Boolean, Number, String], default: false })
  value!: boolean | number | string

  @Prop({ type: [Boolean, Number, String], default: true })
  label!: boolean | number | string

  @Prop({ type: String, default: 'radio_button_checked' })
  checkedIcon!: string

  @Prop({ type: String, default: 'radio_button_unchecked' })
  uncheckIcon!: string

  @Prop({ type: Boolean, default: false })
  disabled!: boolean

  @Emit('input')
  onInput (val: any) {}

  get styles () {
    const { fontColor, size, color } = this
    const styles = {}

    genFontColor(styles, compName, fontColor)
    genColor(styles, compName, color)
    genSize(styles, compName, size)

    return styles
  }

  get classes () {
    const { checked, disabled } = this
    const classes = {
      'm--checked': checked,
      'm--disabled': disabled
    }

    return classes
  }

  get checked () {
    return this.label === this.value
  }

  handleClick (val: any) {
    if (this.disabled) { return }
    if (this.checked) { return }

    this.onInput(val)
  }

  RRadio () {
    const { size, checkedIcon, uncheckIcon, checked } = this

    return (
      <a staticClass={`${compName}__radio`}>
        <transition name='m--transition-scale'>
          {!checked ? undefined : (
            <MIcon staticClass={`${compName}__checked-icon`}
                    name={checkedIcon}
                    size={size}/>
          )}
        </transition>
        <MIcon staticClass={`${compName}__uncheck-icon`} size={size} name={uncheckIcon} />
        <div v-m-ripple staticClass={`${compName}__radio-wrapper`} />
      </a>
    )
  }

  RDefault () {
    const { $slots } = this

    return $slots.default === undefined ? undefined : (
      <span staticClass={`${compName}__label`}>{$slots.default}</span>
    )
  }

  render () {
    const { styles, classes, label, handleClick, RRadio, RDefault } = this

    return (
      <div staticClass={compName}
           class={classes}
           style={styles}
           onClick={() => handleClick(label)}>
        {RRadio()}
        {RDefault()}
      </div>
    )
  }
}
