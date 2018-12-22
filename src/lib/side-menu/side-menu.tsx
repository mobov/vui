import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
import MIcon from '@/lib/icon'
import { Size, Color } from '@/types/model'

const _name = 'm-side-menu'

@Component({ components: { MIcon } })
export default class MSideMenu extends Vue {
  @Prop({ type: String, default: 'md' })
  private size?: Size

  @Prop({ type: String, default: 'primary' })
  private color!: Color

  private get classes () {
    return {
    }
  }

  private render () {
    const { classes } = this

    return (
      <div staticClass={`${_name}`}
           class={classes}>
      </div>
    )
  }
}
