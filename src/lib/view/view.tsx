import { Component, Prop, Vue } from 'vue-property-decorator'

const _name = 'm-view'

@Component
export default class MView extends Vue {
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
        <div staticClass={`${_name}__wrapper`}>
          {this.$slots.default}
        </div>
      </div>
    )
  }
}
