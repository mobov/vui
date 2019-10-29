import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import MIcon from '../icon'
import MTransition from '../transition'
import mixColor from '../core/mixins/color'
import mixSize from '../core/mixins/size'
import mixSpace from '../core/mixins/space'

@Component({
  components: { MIcon, MTransition },
  mixins: [mixColor, mixSize, mixSpace]
})
export default class MInput extends Vue {
  name = 'm-input'

  @Prop({ type: [Number, String], default: '' })
  value!: number | string

  @Prop({ type: [Boolean, Number, String], default: true })
  label!: boolean | number | string

  @Prop({ type: Boolean, default: false })
  disabled!: boolean

  @Prop({ type: [Number, String], default: '' })
  type!: number | string

  @Prop({ type: [Number, String], default: '' })
  placeholder!: number | string

  @Emit('input')
  onInput (val: any) {}

  @Emit('change')
  onChange (val: any) {}

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

  RDefault () {
    const { $slots } = this

    return $slots.default === undefined ? undefined : (
      <span staticClass={`${this.name}__label`}>{$slots.default}</span>
    )
  }

  render () {
    const { styles, classes, label, handleClick, RDefault } = this

    return (
      <div staticClass={this.name}
           class={classes}
           style={styles}
           onClick={() => handleClick(label)}>
        {RDefault()}
      </div>
    )
  }
}
