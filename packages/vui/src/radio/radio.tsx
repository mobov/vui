import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import MIcon from '../icon'
import { Size, Color } from '../types/model'
import { BREAKPOINT, COLOR } from '../core/constant/constant'
import { genColor, genSize } from '../core/style-gen'

const _name = 'm-radio'

@Component({ components: { MIcon } })
export default class MRadio extends Vue {
  @Prop({ type: String, default: BREAKPOINT.md })
  private size?: Size

  @Prop({ type: String })
  private fontColor!: Color

  @Prop({ type: String, default: COLOR.primary })
  private color!: Color

  @Prop({ type: [Boolean, Number, String], default: false })
  private value!: boolean | number | string

  @Prop({ type: [Boolean, Number, String], default: true })
  private label!: boolean | number | string

  @Prop({ type: String, default: 'radio_button_checked' })
  private checkedIcon!: string

  @Prop({ type: String, default: 'radio_button_unchecked' })
  private uncheckIcon!: string

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean

  @Emit('input')
  private onInput (val: any) {}

  get classes () {
    return {
      'm--disabled': this.disabled,
      'm--checked': this.isCheck
    }
  }

  get styles () {
    const { color, fontColor, size } = this
    const styles = { }

    genColor(styles, _name, 'color', color)
    genColor(styles, _name, 'font-color', fontColor)
    genSize(styles, _name, 'size', size)

    return styles
  }

  get isCheck () {
    return this.label === this.value
  }

  handleClick (val: any) {
    if (this.disabled) { return }
    if (this.isCheck) { return }

    this.onInput(val)
  }

  RRadio () {
    const { size, checkedIcon, uncheckIcon, isCheck } = this

    return (
      <a staticClass={`${_name}__radio`}>
        <transition name='m--transition-scale'>
          {!isCheck ? undefined : (
            <m-icon staticClass={`${_name}__checked-icon`}
                    name={checkedIcon}
                    size={size}/>
          )}
        </transition>
        <MIcon class={`${_name}__uncheck-icon`} size={size} name={uncheckIcon} />
        <div v-m-ripple staticClass={`${_name}__radio-wrapper`} />
      </a>
    )
  }

  render () {
    const { $slots, classes, label, handleClick, RRadio } = this

    return (
      <div staticClass={_name}
           class={classes}
           onClick={() => handleClick(label)}>
        {RRadio()}
        {$slots.default}
      </div>
    )
  }
}
