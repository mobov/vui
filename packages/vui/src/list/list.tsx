import { Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import List from './list.style'
import sizeable from '../core/mixin/sizeable'

const _name = 'm-list'

@Component({
  components: { List }
})
export default class MList extends Mixins (
  sizeable
) {
  @Prop({ type: String })
  private mode!: string

  @Emit('click')
  onClick (e: MouseEvent) {}

  render () {
    const { $slots, onClick, size } = this

    return (
      <List staticClass={_name}
            size={size}
            onClick={onClick}>
        {$slots.media ? <div staticClass={`${_name}__media`}>{$slots.media}</div> : undefined}
        <div staticClass={`${_name}__content`}>
          {$slots.default}
        </div>
        {$slots.action ? <div staticClass={`${_name}__action`}>{$slots.action}</div> : undefined}
      </List>
    )
  }
}
