import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import { genSize } from '../core/util'
import { size } from '../core/constant'

const compName = 'm-list'

@Component
export default class MList extends Vue {
  @Prop({ type: String })
  private size!: size

  @Prop({ type: [String, Number] })
  private mode!: string

  @Emit('click')
  onClick (e: MouseEvent) {}

  get styles () {
    const { size } = this
    const styles = {}

    genSize(styles, compName, size)

    return styles
  }

  render () {
    const { styles, $slots, onClick } = this

    return (
      <div staticClass={compName}
           onClick={onClick}
           style={styles}>
        {$slots.media ? <div staticClass={`${compName}__media`}>{$slots.media}</div> : undefined}
        <div staticClass={`${compName}__content`}>
          {$slots.default}
        </div>
        {$slots.action ? <div staticClass={`${compName}__action`}>{$slots.action}</div> : undefined}
      </div>
    )
  }
}
