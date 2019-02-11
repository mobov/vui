import { Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import Checkbox from './checkbox.style'
import MIcon from '../icon'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import { genColor, genSize } from '../core/style-gen'

const _name = 'm-checkbox'

@Component({
  components: { Checkbox, MIcon }
})
export default class MCheckbox extends Mixins (
  colorable,
  sizeable
) {
  @Prop({ type: [Array, Number, String, Boolean], default: false })
  private value!: any

  @Prop({ type: [Array, Number, String, Boolean], default: true })
  private label!: any

  @Prop({ type: String, default: 'check_box' })
  private checkedIcon!: string

  @Prop({ type: String, default: 'check_box_outline_blank' })
  private uncheckIcon!: string

  @Prop({ type: String, default: 'indeterminate_check_box' })
  private incheckIcon!: string

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean

  @Emit('input')
  onInput (val: any): void { }

  private isArrayValue: boolean = false

  private isArrayLabel: boolean = false

  private isBooleanValue: boolean = false

  get isCheck () {
    const { value, label, isArrayValue, isArrayLabel } = this

    let isCheck = false

    if (isArrayValue && isArrayLabel) {
      // Allcheck下value是数组, label也是数组
      if (value.length > 0) {
        isCheck = true
      }
    } else if (isArrayValue) {
      // value是数组, label单值
      if (value.includes(label)) {
        isCheck = true
      }
    } else {
      if (value === label) {
        isCheck = true
      }
    }

    return isCheck
  }

  handleClick (): void {
    const { disabled, isBooleanValue, isArrayValue, isArrayLabel, label, value, onInput, isCheck } = this

    if (disabled) { return }

    if (isArrayValue && isArrayLabel) {
      if (isCheck) {
        onInput([])
      } else {
        onInput(label)
      }
    } else if (isArrayValue) {
      const result: any[] = [].concat(value)
      if (isCheck) {
        const index = result.findIndex(item => item === label)
        result.splice(index, 1)
        onInput(result)
      } else {
        result.push(label)
        onInput(result)
      }
    } else if (isBooleanValue) {
      onInput(!value)
    } else {
      if (isCheck) {
        onInput(null)
      } else {
        onInput(label)
      }
    }
  }

  RCheckbox () {
    const { size, checkedIcon, uncheckIcon, incheckIcon,
            value, label, isCheck, isArrayValue, isArrayLabel } = this

    let checkIcon = checkedIcon

    if (
      isArrayValue &&
      isArrayLabel &&
      isCheck &&
      (label.length > value.length)
    ) {
      // Allcheck下value是数组, label也是数组
      checkIcon = incheckIcon
    }

    return (
      <a staticClass={`${_name}__checkbox`}>
        <transition name='m-transition-scale'>
          {!isCheck ? undefined
            : <MIcon staticClass={`${_name}__checked-icon`}
                     name={checkIcon}
                     size={size}/>
          }
        </transition>
        <MIcon staticClass={`${_name}__uncheck-icon`} size={size} name={uncheckIcon} />
        <div v-m-ripple staticClass={`${_name}__checkbox-wrapper`} />
      </a>
    )
  }

  render () {
    const { $slots, color, fontColor, size, RCheckbox, handleClick, value, label, disabled, isCheck } = this

    this.isArrayValue = value instanceof Array
    this.isArrayLabel = label instanceof Array
    // boolean模式下等价于switch
    this.isBooleanValue = typeof value === 'boolean'

    return (
      <Checkbox staticClass={_name}
                color={color}
                fontColor={fontColor}
                size={size}
                disabled={disabled}
                checked={isCheck}
                onClick={() => handleClick()}>
        {RCheckbox()}
        {$slots.default}
      </Checkbox>
    )
  }
}
