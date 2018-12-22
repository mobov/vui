import { Component, Prop, Emit, Vue } from 'vue-property-decorator'

const _name = 'm-app'

@Component
export default class MApp extends Vue {
  @Prop({ type: String, default: 'base' })
  private layout?: string

  get classes () {
    const { layout } = this
    return {
      [`m--${layout}`]: true
    }
  }

  render () {
    const { classes } = this
    return (
      <div staticClass={_name} class={classes}>
        {this.$slots.default}
      </div>
    )
  }
}
