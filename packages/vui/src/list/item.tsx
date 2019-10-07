import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import { Size, size } from '../core/constants'
import mixColor from '../core/mixins/color'
import mixSize from '../core/mixins/size'
import mixSpace from '../core/mixins/space'
import mixShape from '../core/mixins/shape'
import mixElevation from '../core/mixins/elevation'

@Component({
  mixins: [mixColor, mixSize, mixSpace, mixShape, mixElevation]
})
export default class MListItem extends Vue {
  name = 'm-list-item'

  @Prop({ type: Boolean, default: false})
  divider!: boolean

  @Prop({ type: Boolean, default: false})
  hover!: boolean

  @Prop({ type: Boolean, default: false})
  active!: boolean

  @Prop({ type: String, default: Size.md })
  padding!: size | string | number

  @Emit('click')
  onClick (e: MouseEvent) {}

  get styles () {
    return {
      ...this.spaceStyle,
      ...this.colorStyle,
      ...this.sizeStyle
    }
  }

  get classes () {
    const { divider, hover, active } = this
    return {
      '--with-divider': divider,
      '--with-hover': hover,
      '--active': active,
      ...this.elevationClass,
      ...this.shapeClass
    }
  }

  render () {
    const { name, classes, styles, $slots, onClick } = this

    return (
      <div staticClass={name}
           class={classes}
           onClick={onClick}
           style={styles}>
        <div staticClass={`${name}__main`}>
          {$slots.media ? <div staticClass={`${name}__media`}>{$slots.media}</div> : undefined}
          <div staticClass={`${name}__content`}>
            {$slots.default}
          </div>
          {$slots.action ? <div staticClass={`${name}__action`}>{$slots.action}</div> : undefined}
        </div>
        {$slots.extra ? <div staticClass={`${name}__extra`}>{$slots.extra}</div> : undefined}
      </div>
    )
  }
}
