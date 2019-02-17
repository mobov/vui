import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
import MButton from '../../button'
import { dateValueType } from '../constant'
import { color, shape, variety } from '../../core/constant'

const compName = 'm-time-picker-panel-year'

@Component({ components: { MButton } })
export default class MTimePickerPanelYear extends Vue {
  @Prop({ type: String, default: color.primary })
  type!: color

  @Prop({ type: Number, default: 2100 })
  max!: number

  @Prop({ type: Number, default: 1900 })
  min!: number

  @Inject()
  DateStore!: any

  @Emit('pick')
  onClick (year: number): void {
    this.DateStore.UPDATE(year, dateValueType.year)
  }

  RCols () {
    const { min, max, onClick } = this
    const { year } = this.DateStore
    const Cols: any = []

    for (let tempYear = min; tempYear <= max; tempYear++) {
      const isCurrent = tempYear === year
      Cols.push(
        <MButton size="sm"
          class="m-m-0 m-p-0"
          shape={shape.circle}
          elevation={0}
          variety={isCurrent ? variety.normal : variety.flat}
          color={isCurrent ? color.primary : color.default}
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
      <div staticClass={compName}>
        {RCols()}
      </div>
    )
  }
}
