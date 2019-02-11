import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import Avatar from './avatar.style'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import elevated from '../core/mixin/elevated'
import variable from '../core/mixin/variable'
import shapeable from '../core/mixin/shapeable'
import { STATUS } from '../core/constant'

const _name = 'm-avatar'

@Component({
  components: { Avatar }
})
export default class MAvatar extends Mixins (
  colorable,
  sizeable,
  elevated,
  variable,
  shapeable
) {
  @Prop({ type: String })
  private src!: string

  @Watch('src', { immediate: true })
  updateSrc (val: string) {
    if (val !== undefined) {
      this.status = STATUS.pending
      this.curSrc = val
    }
  }

  private status: number = STATUS.pending

  private curSrc!: string

  loadSuccess () {
    this.status = STATUS.success
  }

  loadFailure () {
    this.status = STATUS.failure
  }

  render () {
    const { curSrc, loadSuccess, loadFailure, status, fontColor, size, color, variety } = this

    return (
      <Avatar staticClass={_name}
              status={status}
              size={size}
              color={color}
              variety={variety}
              fontColor={fontColor}>
        {this.$slots.default}
        <img staticClass={`${_name}__cover`}
             alt=''
             src={curSrc}
             onLoad={loadSuccess}
             onError={loadFailure} />
      </Avatar>
    )
  }
}
