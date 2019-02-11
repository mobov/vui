import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class colorable extends Vue {
  @Prop({ type: String })
  fontColor: string | undefined

  @Prop({ type: String })
  color: string | undefined
}
