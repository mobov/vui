import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import MAvatar from '../avatar'
import MIcon from '../icon'
import '../icon/icons/cancel'
import mixVariety from '../core/mixins/variety'
import mixShape from '../core/mixins/shape'
import mixColor from '../core/mixins/color'
import mixSize from '../core/mixins/size'
import mixSpace from '../core/mixins/space'
import mixElevation from '../core/mixins/elevation'

@Component({
  components: { MAvatar, MIcon },
  mixins: [mixColor, mixSize, mixSpace, mixShape, mixVariety, mixElevation]
})
export default class MChip extends Vue {
  name = 'm-chip'

  @Prop({ type: Boolean, default: false })
  closeable!: boolean

  @Prop({ type: Boolean, default: false })
  closeover!: boolean

  @Emit('close')
  onClose (e: MouseEvent): void { e.stopPropagation() }

  @Emit('click')
  onClick (e: MouseEvent): void {}

  get styles () {
    return {
      ...this.colorStyle,
      ...this.sizeStyle,
      ...this.spaceStyle
    }
  }

  get classes () {
    const { closeable, closeover } = this
    return {
      ...this.elevationClass,
      ...this.shapeClass,
      ...this.varietyClass,
      'm--closeable': closeable,
      'm--closeover': closeover,
    }
  }

  RMedia () {
    const { name, $slots } = this

    if ($slots.media) {
      if (!$slots.media[0]!.data!.staticClass) {
        $slots.media[0]!.data!.staticClass = ''
      }
      $slots.media[0]!.data!.staticClass += ` ${name}__media`

      return $slots.media
    }
    return undefined
  }

  RClose () {
    const { name, closeable, closeover, onClose } = this



    return (
      (closeable || closeover)
        ? (
          <div staticClass={`${name}__close`} onClick={ onClose }>
            <MIcon value='cancel' />
          </div>
        )
        : undefined
    )
  }

  render () {
    const { name, classes, styles, $slots, RMedia, RClose, onClick } = this

    return (
      <div staticClass={name}
           class={classes}
           style={styles}
           onClick={onClick}>
        {RMedia()}
        <div staticClass={`${name}__main`}>
          {$slots.default}
        </div>
        {RClose()}
      </div>
    )
  }
}
