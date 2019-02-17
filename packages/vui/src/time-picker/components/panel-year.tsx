import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
import MButton from '../../button'
import { dateValueType } from '../constant'
import { Color, color, Shape, shape, Variety, variety } from '../../core/constant'

const compName = 'm-time-picker-panel-year'

@Component({ components: { MButton } })
export default class MTimePickerPanelYear extends Vue {
  @Prop({ type: String, default: Color.primary })
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
          shape={Shape.circle}
          elevation={0}
          variety={isCurrent ? Variety.default : Variety.flat}
          color={isCurrent ? Color.primary : Color.default}
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
