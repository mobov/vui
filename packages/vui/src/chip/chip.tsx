import { Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import Chip from './chip.style'
import MAvatar from '../avatar'
import MIcon from '../icon'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import elevated from '../core/mixin/elevated'
import variable from '../core/mixin/variable'
import shapeable from '../core/mixin/shapeable'

const _name = 'm-chip'

@Component({
  components: { Chip, MAvatar, MIcon }
})
export default class MChip extends Mixins (
  colorable,
  sizeable,
  elevated,
  variable,
  shapeable
) {
  @Prop({ type: Boolean, default: false })
  private closeable!: boolean

  @Prop({ type: Boolean, default: false })
  private closeover!: boolean

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
      (closeable || closeover)
        ? <MIcon staticClass={`${_name}__close`} onClick={ () => onClose } name='cancel' />
        : undefined
    )
  }

  render () {
    const { $slots, color, fontColor, elevation, variety, shape, size, RMedia, RClose, onClick } = this

    return (
      <Chip staticClass={_name}
            color={color}
            fontColor={fontColor}
            elevation={elevation}
            variety={variety}
            shape={shape}
            size={size}
            onClick={onClick}>
        {RMedia()}
        <div staticClass={`${_name}__main`}>
          {$slots.default}
        </div>
        {RClose()}
      </Chip>
    )
  }
}
