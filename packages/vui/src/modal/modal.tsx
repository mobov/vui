import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import logger from '../core/logger'
import uid from 'nanoid'
import mixShape from '../core/mixins/shape'
import mixColor from '../core/mixins/color'
import mixSize from '../core/mixins/size'
import mixElevation from '../core/mixins/elevation'
import MTransition from '../transition'

@Component({
  mixins: [mixColor, mixSize, mixShape, mixElevation],
  components: { MTransition }
})
export default class MModal extends Vue {
  name = 'm-modal'

  @Prop({ type: Boolean, default: false })
  value?: boolean

  modalId: string = `m-modal-${uid(10)}`

  get styles () {
    return {
      ...this.colorStyle,
      ...this.sizeStyle,
      ...this.spaceStyle
    }
  }

  get classes () {
    return {
      ...this.elevationClass,
      ...this.shapeClass
    }
  }

  RPopover () {
    const { name, modalId, classes, styles, $slots, content } = this
    const popoverContent = $slots.content ? $slots.content : content

    return (
      <MTransition name="fade">
        <div v-show={this.visible} role={'tooltip'} aria-hidden="true" id={modalId} staticClass={name} class={classes} style={styles}>
          {popoverContent}
        </div>
      </MTransition>
    )
  }

  beforeCreate () {

  }

  render () {
    const {name, popperId, content, classes, styles, $slots} = this

    return (
      <MTransition name="fade">
        <div v-show={this.visible} role={'tooltip'} aria-hidden="true" id={modalId} staticClass={name} class={classes} style={styles}>
          {popoverContent}
        </div>
      </MTransition>
    )
  }
}
