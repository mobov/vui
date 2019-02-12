import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
import MButton from '../../button'
import { dateValueType } from '../constant'
import { color, variety, shape } from '../../core/constant'

const _name = 'm-time-picker-panel-month'
const MonthMap = ['一月', '二月', '三月', '四月', '五月', '六月',
                  '七月', '八月', '九月', '十月', '十一月', '十二月']

@Component({ components: { MButton } })
export default class MTimePickerPanelMonth extends Vue {
  @Prop({ type: String, default: color.primary })
  private type!: color

  @Prop({ type: Array })
  public disabledValue!: number

  @Inject()
  private DateStore!: any

  @Emit('pick')
  handleClick (month: number): void {
    this.DateStore.UPDATE(month, dateValueType.month)
  }

  RCols () {
    const { handleClick } = this
    const { month } = this.DateStore
    const Cols: any = []

    for (let tempValue = 0; tempValue <= 11; tempValue++) {
      const isCurrent = tempValue === month
      Cols.push(
        <MButton size="sm"
                 class="m-m-0 m-p-0"
                 shape={shape.circle}
                 elevation={0}
                 variety={isCurrent ? variety.normal : variety.flat}
                 color={isCurrent ? color.primary : color.default}
                 onClick={() => handleClick(tempValue)}>
          {MonthMap[tempValue]}
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
