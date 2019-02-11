import { Component, Prop, Watch, Vue, Emit, Model, Provide } from 'vue-property-decorator'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    fontColor?: string | undefined
    color?: string | undefined
  }
}

@Component
export default class colorable extends Vue {
  @Prop({ type: String })
  public fontColor: string | undefined

  @Prop({ type: String })
  public color: string | undefined
}
