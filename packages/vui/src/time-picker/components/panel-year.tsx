import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
import { DateValueType } from '../../core/constant'

const compName = 'm-time-picker-panel-year'

@Component
export default class MTimePickerPanelYear extends Vue {
  @Prop({ type: Number, default: 2100 })
  max!: number

  @Prop({ type: Number, default: 1900 })
  min!: number

  @Inject()
  DateStore!: any

  @Emit('pick')
  onClick (year: number): void {
    this.DateStore.UPDATE(year, DateValueType.year)
  }

  RCols () {
    const { min, max, onClick } = this
    const { year } = this.DateStore
    const Cols: any = []

    for (let tempYear = min; tempYear <= max; tempYear++) {
      const isCurrent = tempYear === year

      Cols.push(
        <div v-m-ripple
             staticClass='m-time-picker-cell'
             class={{ 'm--checked': isCurrent }}
             onClick={() => onClick(tempYear)}>
          {tempYear}
        </div>
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
