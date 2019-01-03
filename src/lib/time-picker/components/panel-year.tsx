import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
import MButton from '@/lib/button'
import { Color } from '@/types/model'

const _name = 'm-time-picker-panel-year'

@Component({ components: { MButton } })
export default class MTimePickerPanelYear extends Vue {
  @Prop({ type: String, default: 'primary' })
  private type!: Color

  @Prop({ type: Number, default: 2100 })
  private max!: number

  @Prop({ type: Number, default: 1900 })
  private min!: number

  @Inject()
  private DateStore!: any

  @Emit('pick')
  onClick (year: number): void {
    this.DateStore.UPDATE(year, 'year')
  }

  RCols () {
    const { min, max, onClick } = this
    const { year } = this.DateStore
    const Cols: any = []

    for (let tempYear = min; tempYear <= max; tempYear ++) {
      const isCurrent = tempYear === year
      Cols.push(
        <MButton size="sm"
          class="m-m-0 m-p-0"
          shape="circle"
          elevation={0}
          variety={isCurrent ? 'normal' : 'flat'}
          color={isCurrent ? 'primary' : 'default'}
          onClick={() => onClick(tempYear)} >
          {tempYear}
        </MButton>
      )
    }

    return Cols
  }

  render () {
    const { RCols } = this

    return (
      <div staticClass={_name}>
        {RCols()}
      </div>
    )
  }
}
