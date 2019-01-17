import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import { genColor, genSize, genStaticStyles } from '@/lib/core/style-gen'
import { Size } from '@/types/model'

const _name = 'm-list'

@Component
export default class MList extends Vue {
  @Prop({ type: String })
  private size!: Size

  @Prop({ type: [String, Number] })
  private mode!: string

  @Prop({ type: [String, Number] })
  private color!: string

  @Prop({ type: Boolean })
  private disableRipple: boolean = false

  @Emit('click')
  onClick (e: MouseEvent) {}

  get styles () {
    const { size } = this
    const styles = {}

    genSize(styles, _name, 'size', size)

    return styles
  }

  render () {
    const { styles, $slots, onClick } = this

    return (
      <div staticClass={_name}
           v-m-ripple
           onClick={onClick}
           style={styles}>
        {$slots.media ? <div staticClass={`${_name}__media`}>{$slots.media}</div> : undefined}
        <div staticClass={`${_name}__content`}>
          {$slots.default}
        </div>
        {$slots.action ? <div staticClass={`${_name}__action`}>{$slots.action}</div> : undefined}
      </div>
    )
  }
}
