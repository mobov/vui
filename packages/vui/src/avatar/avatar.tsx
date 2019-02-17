import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import elevated from '../core/mixin/elevated'
import variable from '../core/mixin/variable'
import shapeable from '../core/mixin/shapeable'
import { Status } from '../core/constant'
import { genFontColor, genColor, genElevation, genSize, genShape, genVariety } from '../core/util'

const compName = 'm-avatar'

@Component
export default class MAvatar extends Mixins (
  colorable,
  sizeable,
  elevated,
  variable,
  shapeable
) {
  @Prop({ type: String })
  src!: string

  get styles () {
    const { fontColor, size, color, elevation } = this
    const styles = {}

    genFontColor(styles, compName, fontColor)
    genColor(styles, compName, color)
    genElevation(styles, compName, elevation)
    genSize(styles, compName, size)

    return styles
  }

  get classes () {
    const { shape, variety, status } = this
    const classes = {
      [`m--status-${Status[status]}`]: true
    }

    genShape(classes, shape)
    genVariety(classes, variety)

    return classes
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
    const { styles, classes, curSrc, loadSuccess, loadFailure } = this

    return (
      <div staticClass={compName}
           class={classes}
           style={styles}>
        {this.$slots.default}
        <img staticClass={`${compName}__cover`}
             alt=''
             src={curSrc}
             onLoad={loadSuccess}
             onError={loadFailure} />
      </div>
    )
  }
}
