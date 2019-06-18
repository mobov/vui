import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import mixBase from '../core/mixin/base'
import mixVariety from '../core/mixin/variety'
import mixShape from '../core/mixin/shape'

import { Status } from '../core/constant'

@Component
export default class MAvatar extends Mixins (
  mixBase,
  mixVariety,
  mixShape
) {
  name = 'm-avatar'

  @Prop({ type: String })
  src!: string

  get styles () {
    return {
      ...this.baseStyle,
    }
  }

  get classes () {
    const { status } = this
    return {
      ...this.baseClass,
      ...this.shapeClass,
      ...this.varietyClass,
      [`m--status-${Status[status]}`]: true
    }
  }

  @Watch('src', { immediate: true })
  updateSrc (val: string) {
    if (val !== undefined) {
      this.status = Status.pending
      this.curSrc = val
    }
  }

  status: number = Status.pending

  curSrc!: string

  loadSuccess () {
    this.status = Status.success
  }

  loadFailure () {
    this.status = Status.failure
  }

  render () {
    const { name, styles, classes, curSrc, loadSuccess, loadFailure } = this

    return (
      <div staticClass={name}
           class={classes}
           style={styles}>
        {this.$slots.default}
        <img staticClass={`${name}__cover`}
             alt=''
             src={curSrc}
             onLoad={loadSuccess}
             onError={loadFailure} />
      </div>
    )
  }
}
