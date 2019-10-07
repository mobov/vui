import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { Status } from '../core/constants'
import mixColor from '../core/mixins/color'
import mixSize from '../core/mixins/size'
import mixSpace from '../core/mixins/space'
import mixElevation from '../core/mixins/elevation'
import mixVariety from '../core/mixins/variety'
import mixShape from '../core/mixins/shape'

@Component({
  mixins: [mixColor, mixSize, mixSpace, mixElevation, mixVariety, mixShape]
})
export default class MAvatar extends Vue {
  name = 'm-avatar'

  @Prop({ type: Boolean, default: false })
  transition!: boolean

  @Prop({ type: String })
  placeholder!: string

  @Prop({ type: String })
  src!: string

  get styles () {
    return {
      ...this.colorStyle,
      ...this.sizeStyle,
      ...this.spaceStyle
    }
  }

  get classes () {
    const { status, transition } = this
    return {
      ...this.elevationClass,
      ...this.shapeClass,
      ...this.varietyClass,
      'm--transition': transition,
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
        <img staticClass={`${name}-image`}
             alt=''
             src={curSrc}
             onLoad={loadSuccess}
             onError={loadFailure} />
      </div>
    )
  }
}
