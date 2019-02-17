import { Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import MAvatar from '../avatar'
import MIcon from '../icon'
import '../icon/icons/cancel'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import elevated from '../core/mixin/elevated'
import variable from '../core/mixin/variable'
import shapeable from '../core/mixin/shapeable'
import { genColor, genFontColor, genSize, genElevation, genVariety, genShape } from '../core/util'

const compName = 'm-chip'

@Component({
  components: { MAvatar, MIcon }
})
export default class MChip extends Mixins (
  colorable,
  sizeable,
  elevated,
  variable,
  shapeable
) {
  @Prop({ type: Boolean, default: false })
  closeable!: boolean

  @Prop({ type: Boolean, default: false })
  closeover!: boolean

  @Emit('close')
  onClose (e: MouseEvent): void { e.stopPropagation() }

  @Emit('click')
  onClick (e: MouseEvent): void {}

  get styles () {
    const { fontColor, size, color, elevation } = this
    const styles = {}

    genFontColor(styles, compName, fontColor)
    genColor(styles, compName, color)
    genSize(styles, compName, size)
    genElevation(styles, compName, elevation)
    // genHover(styles, _name, 'hover-color', color)

    return styles
  }

  get classes () {
    const { closeable, closeover, variety, shape } = this
    const classes = {
      'm--closeable': closeable,
      'm--closeover': closeover,
    }

    genVariety(classes, variety)
    genShape(classes, shape)

    return classes
  }

  RMedia () {
    const { $slots } = this

    if ($slots.media) {
      if (!$slots.media[0]!.data!.staticClass) {
        $slots.media[0]!.data!.staticClass = ''
      }
      $slots.media[0]!.data!.staticClass += ` ${compName}__media`

      return $slots.media
    }
    return undefined
  }

  RClose () {
    const { closeable, closeover, onClose } = this

    return (
      (closeable || closeover)
        ? <MIcon staticClass={`${compName}__close`}
                 onClick={ () => onClose }
                 name='cancel' />
        : undefined
    )
  }

  render () {
    const { $slots, RMedia, RClose, onClick } = this

    return (
      <div staticClass={compName}
            onClick={onClick}>
        {RMedia()}
        <div staticClass={`${compName}__main`}>
          {$slots.default}
        </div>
        {RClose()}
      </div>
    )
  }
}
