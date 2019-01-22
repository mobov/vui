import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import { Size, Color, Variety, Shape } from '../types/model'
import { genColor, genElevation, genSize, genHover } from '../core/style-gen'
import MAvatar from '../avatar'
import MIcon from '../icon'

const _name = 'm-chip'

@Component({ components: { MAvatar, MIcon } })
export default class MChip extends Vue {
  @Prop({ type: String })
  private size!: Size

  @Prop({ type: String })
  private color!: Color

  @Prop({ type: String })
  private fontColor!: Color

  @Prop({ type: Number })
  private elevation!: number

  @Prop({ type: String, default: 'normal' })
  private variety!: Variety

  @Prop({ type: String, default: 'circle' })
  private shape!: Shape

  @Prop({ type: Boolean, default: false })
  private closeable!: boolean

  @Prop({ type: Boolean, default: false })
  private closeover!: boolean

  get styles () {
    const { color, fontColor, size, elevation } = this
    const styles = { }

    genColor(styles, _name, 'color', color)
    genColor(styles, _name, 'font-color', fontColor)
    genSize(styles, _name, 'size', size)
    genElevation(styles, _name, elevation)
    genHover(styles, _name, 'hover-color', color)

    return styles
  }

  get classes () {
    const { variety, shape, closeable, closeover } = this

    return {
      [`m-variety-${variety}`]: true,
      [`m-shape-${shape}`]: true,
      [`${_name}--closeable`]: closeable,
      [`${_name}--closeover`]: closeover
    }
  }

  @Emit('close')
  onClose (e: MouseEvent): void { e.stopPropagation() }

  @Emit('click')
  onClick (e: MouseEvent): void {}

  RMedia () {
    const { $slots } = this

    if ($slots.media) {
      if (!$slots.media[0]!.data!.staticClass) {
        $slots.media[0]!.data!.staticClass = ''
      }
      $slots.media[0]!.data!.staticClass += ` ${_name}__media`

      return $slots.media
    }
    return undefined
  }

  RClose () {
    const { closeable, closeover, onClose } = this

    return (
      closeable || closeover
        ? <MIcon class={`${_name}__close`} onClick={onClose} name='cancel' />
        : undefined
    )
  }

  render () {
    const { classes, styles, $slots, RMedia, RClose, onClick } = this

    return (
      <div staticClass={_name}
           style={styles}
           class={classes}
           onClick={onClick}>
        {RMedia()}
        <div staticClass={`${_name}__main`}>
          {$slots.default}
        </div>
        {RClose()}
      </div>
    )
  }
}
