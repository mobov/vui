import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Size, Color, Variety, Shape, Image } from '../types/model'
import { genColor, genSize, genElevation } from '../core/style-gen'
import { STATUS, VARIETY, SHAPE } from '../core/constant'

const _name = 'm-avatar'

@Component
export default class MAvatar extends Vue {
  @Prop({ type: String })
  private size!: Size

  @Prop({ type: Number })
  private elevation!: number

  @Prop({ type: String })
  private color!: Color

  @Prop({ type: String })
  private fontColor!: Color

  @Prop({ type: String, default: SHAPE.circle })
  private shape!: Shape

  @Prop({ type: String, default: VARIETY.normal })
  private variety!: Variety

  @Prop({ type: String })
  private src!: Image

  @Watch('src', { immediate: true })
  srcUpdate (val: Image) {
    if (val !== undefined) {
      this.status = STATUS.pending
      this.curSrc = val
    }
  }

  private status: number = STATUS.pending

  private curSrc!: Image

  get styles () {
    const { color, fontColor, size, elevation } = this
    const styles = { }

    genColor(styles, _name, 'color', color)
    genColor(styles, _name, 'font-color', fontColor)
    genSize(styles, _name, 'size', size)
    genElevation(styles, _name, elevation)

    return styles
  }

  get classes () {
    const { variety, shape, status } = this

    return {
      [`m-variety-${variety}`]: true,
      [`m-shape-${shape}`]: true,
      [`m--status-${STATUS[status]}`]: true
    }
  }

  loadSuccess () {
    this.status = STATUS.success
  }

  loadFailure () {
    this.status = STATUS.failure
  }

  render () {
    const { curSrc, styles, classes, loadSuccess, loadFailure } = this

    return (
      <div staticClass={_name}
           style={styles}
           class={classes}>
        {this.$slots.default}
        <img onLoad={loadSuccess}
             onError={loadFailure}
             staticClass={`${_name}__cover`}
             alt=''
             src={curSrc} />
      </div>
    )
  }
}
