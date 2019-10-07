import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import mixVariety from '../core/mixins/variety'
import mixShape from '../core/mixins/shape'
import mixColor from '../core/mixins/color'
import mixSize from '../core/mixins/size'
import mixSpace from '../core/mixins/space'
import mixElevation from '../core/mixins/elevation'
// import MIcon from '../icon'

@Component({
  mixins: [mixColor, mixSize, mixSpace, mixElevation, mixVariety, mixShape]
})
export default class MButton extends Vue {
  name = 'm-button'
  //
  // @Prop({ type: String })
  // icon!: string

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
      ...this.colorStyle,
      ...this.sizeStyle,
      ...this.spaceStyle,
    }
  }

  get classes () {
    const { block, disabled } = this
    return {
      ...this.elevationClass,
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
    // {!icon ? undefined
    //   : <MIcon value={icon} />}
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
