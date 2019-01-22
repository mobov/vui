import { ComponentOptions } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { FLEX_ALIGN, FLEX_JUSTIFY, FLEX_WRAP } from '../core/constant'
import { FlexAlign, FlexJustify, FlexWrap, Size } from '../types/model'

const _name = 'm-div'

@Component({
  functional: true
} as ComponentOptions<Vue>)
export default class MDiv extends Vue {
  @Prop({ type: String })
  private id!: string

  @Prop({ type: Boolean, default: false })
  private inline!: boolean

  @Prop({ type: String, default: FLEX_WRAP.normal })
  private wrap!: FlexWrap

  @Prop({ type: String, default: FLEX_JUSTIFY.start })
  private justify!: FlexJustify

  @Prop({ type: String, default: FLEX_ALIGN.stretch })
  private align!: FlexAlign

  render () {
    return (
      <div staticClass={_name} />
    )
  }
}
