import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import mixColor from '../core/mixins/color'
import mixSize from '../core/mixins/size'
import mixSpace from '../core/mixins/space'
import mixShape from '../core/mixins/shape'
import mixElevation from '../core/mixins/elevation'

@Component({
  mixins: [mixColor, mixSize, mixSpace, mixShape, mixElevation]
})
export default class MList extends Vue {
  name = 'm-list'

  @Prop({ type: String, default: ''})
  title!: String

  @Prop({ type: Boolean, default: false})
  titleDivider!: boolean

  @Emit('click')
  onClick (e: MouseEvent) {}

  get styles () {
    return {
      ...this.colorStyle,
      ...this.sizeStyle,
      ...this.spaceStyle
    }
  }

  get classes () {
    const { titleDivider } = this
    return {
      '--with-title-divider': titleDivider,
      ...this.elevationClass,
      ...this.shapeClass
    }
  }

  render () {
    const { name, classes, styles, $slots, title, onClick } = this

    return (
      <div staticClass={name}
           class={classes}
           onClick={onClick}
           style={styles}>
        <div staticClass={`${name}__title`}>
          {$slots.title ? $slots.title : title}
        </div>
        <div staticClass={`${name}__main`}>
          {$slots.default}
        </div>
        {$slots.extra ? <div staticClass={`${name}__extra`}>{$slots.extra}</div> : undefined}
      </div>
    )
  }
}
