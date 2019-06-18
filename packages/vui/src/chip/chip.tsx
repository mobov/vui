import { Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import MAvatar from '../avatar'
import MIcon from '../icon'
import '../icon/icons/cancel'
import mixBase from '../core/mixin/base'
import mixVariety from '../core/mixin/variety'
import mixShape from '../core/mixin/shape'

@Component({
  components: { MAvatar, MIcon }
})
export default class MChip extends Mixins (
  mixBase,
  mixVariety,
  mixShape
) {
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
      ...this.baseStyle
    }
  }

  get classes () {
    const { closeable, closeover } = this
    return {
      ...this.baseClass,
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
        ? <MIcon staticClass={`${name}__close`}
                 onClick={ () => onClose }
                 name='cancel' />
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
