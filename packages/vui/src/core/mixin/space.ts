import { Vue, Component, Prop } from 'vue-property-decorator'
import { size } from '../constant'

@Component
export default class space extends Vue {
  @Prop({ type: [String, Number] })
  marginLeft: size | string | number | undefined

  @Prop({ type: [String, Number] })
  marginRight: size | string | number | undefined

  @Prop({ type: [String, Number] })
  marginTop: size | string | number | undefined

  @Prop({ type: [String, Number] })
  marginBottom: size | string | number | undefined

  @Prop({ type: [String, Number] })
  marginX: size | string | number | undefined

  @Prop({ type: [String, Number] })
  marginY: size | string | number | undefined

  @Prop({ type: [String, Number] })
  margin: size | string | number | undefined

  @Prop({ type: [String, Number] })
  paddingLeft: size | string | number | undefined

  @Prop({ type: [String, Number] })
  paddingRight: size | string | number | undefined

  @Prop({ type: [String, Number] })
  paddingTop: size | string | number | undefined

  @Prop({ type: [String, Number] })
  paddingBottom: size | string | number | undefined

  @Prop({ type: [String, Number] })
  paddingX: size | string | number | undefined

  @Prop({ type: [String, Number] })
  paddingY: size | string | number | undefined

  @Prop({ type: [String, Number] })
  padding: size | string | number | undefined
}
