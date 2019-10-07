import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import MIcon from '../icon'
import mixColor from '../core/mixins/color'
import mixSize from '../core/mixins/size'
import mixSpace from '../core/mixins/space'

@Component({
  components: { MIcon },
  mixins: [mixColor, mixSize, mixSpace]
})
export default class MRadio extends Vue {
  name = 'm-radio'

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
    return {
      ...this.colorStyle,
      ...this.sizeStyle,
      ...this.spaceStyle
    }
  }

  get classes () {
    const { checked, disabled } = this

    return {
      'm--checked': checked,
      'm--disabled': disabled
    }
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
      <a staticClass={`${this.name}__radio`}>
        <transition name='m--transition-scale'>
          {!checked ? undefined : (
            <MIcon staticClass={`${this.name}__checked-icon`}
                    value={checkedIcon}
                    size={size}/>
          )}
        </transition>
        <MIcon staticClass={`${this.name}__uncheck-icon`} size={size} value={uncheckIcon} />
        <div v-m-ripple staticClass={`${this.name}__radio-wrapper`} />
      </a>
    )
  }

  RDefault () {
    const { $slots } = this

    return $slots.default === undefined ? undefined : (
      <span staticClass={`${this.name}__label`}>{$slots.default}</span>
    )
  }

  render () {
    const { styles, classes, label, handleClick, RRadio, RDefault } = this

    return (
      <div staticClass={this.name}
           class={classes}
           style={styles}
           onClick={() => handleClick(label)}>
        {RRadio()}
        {RDefault()}
      </div>
    )
  }
}
