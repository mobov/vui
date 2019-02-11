import { Vue, Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import Button from './button.style'
import MIcon from '../icon'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import elevated from '../core/mixin/elevated'
import variable from '../core/mixin/variable'
import shapeable from '../core/mixin/shapeable'

const _name = 'm-button'

@Component({
  components: { Button, MIcon }
})
export default class MButton extends Mixins (
  colorable,
  sizeable,
  elevated,
  variable,
  shapeable
){
  @Prop({ type: Boolean })
  private block!: boolean

  @Prop({ type: String })
  private icon!: string

  @Prop({ type: Boolean })
  private loading!: boolean

  @Emit('click')
  private onClick (e: MouseEvent | TouchEvent): void { }

  private render () {
    const {  icon, onClick } = this

    return (
      <Button v-m-ripple
              staticClass={_name}
              onClick={onClick}>
        {!icon ? undefined
          : <MIcon name={icon} />}
        {!this.$slots.default ? undefined
          : <div class={`${_name}__main`}>{this.$slots.default}</div>}
      </Button>
    )
  }
}
