import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
import MButton from '../../button'
import { Color, color, Variety, variety, Shape, shape, DateValueType } from '../../core/constant'

const compName = 'm-time-picker-panel-month'
const MonthMap = ['一月', '二月', '三月', '四月', '五月', '六月',
                  '七月', '八月', '九月', '十月', '十一月', '十二月']

@Component({ components: { MButton } })
export default class MTimePickerPanelMonth extends Vue {
  @Prop({ type: Array })
  disabledValue!: number

  @Inject()
  DateStore!: any

  @Emit('pick')
  handleClick (month: number): void {
    this.DateStore.UPDATE(month, DateValueType.month)
  }

  RCols () {
    const { handleClick } = this
    const { month } = this.DateStore
    const Cols: any = []

    for (let tempValue = 0; tempValue <= 11; tempValue++) {
      const isCurrent = tempValue === month
      Cols.push(
        <div v-m-ripple
             staticClass='m-time-picker-cell'
             class={{ 'm--checked': isCurrent }}
             onClick={() => handleClick(tempValue)}>
          {MonthMap[tempValue]}
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
