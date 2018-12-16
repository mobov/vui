import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import MIcon from '@/lib/icon'
import { Size, Color } from '@/typings/model'

const _name = 'm-radio'

@Component({ components: { MIcon } })
export default class MRadio extends Vue {
  @Prop({ type: String, default: 'md' })
  private size?: Size

  @Prop({ type: [Boolean, Number, String], default: false })
  private value!: boolean | number | string

  @Prop({ type: [Boolean, Number, String], default: true })
  private label!: boolean | number | string

  @Prop({ type: String, default: 'primary' })
  private color!: Color

  @Prop({ type: String, default: 'radio_button_checked' })
  private checkedIcon!: string

  @Prop({ type: String, default: 'radio_button_unchecked' })
  private uncheckIcon!: string

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean

  @Emit('input')
  private onInput (val: any) {}

  private get classes () {
    return {
      [`m--disabled`]: this.disabled
    }
  }

  private get isCheck () {
    return this.label === this.value
  }

  private handleClick (val: any) {
    if (this.disabled) { return }
    if (this.isCheck) { return }

    this.onInput(val)
  }

  private RRadio () {
    const { size, checkedIcon, uncheckIcon, color, isCheck } = this

    return (
      <a staticClass={`${_name}__checkbox`}
         class={isCheck ? `m--color-${color}` : ''}>
        <transition name='m--transition-scale'>
          { isCheck
            ? <m-icon class={`${_name}__check-icon`}
                      name={checkedIcon}
                      size={size}/>
            : null
          }
        </transition>
        <m-icon name={uncheckIcon} />
        <div v-m-ripple staticClass={`${_name}__checkbox-wrapper`} />
      </a>
    )
  }

  private render () {
    const { $slots, classes, label, handleClick, RRadio } = this

    return (
      <div staticClass={`${_name}`}
           class={classes}
           onClick={() => handleClick(label)}>
        {RRadio()}
        {$slots.default}
      </div>
    )
  }
}
