/**
 * 时间选择器头部显示板
 */
import { Component, Prop, Vue, Inject } from 'vue-property-decorator'
import { Color, color, DatePickerType, DateTimeValueType } from '../../core/constants'

const WeekMap = [ '星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
const MonthMap = ['一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月']
const compName = 'm-time-picker-header'

@Component
export default class MTimePickerHeader extends Vue {
  @Inject()
  DateStore!: any

  get classes () {
    return {
      [`m--${this.DateStore.pickerType}`]: true
    }
  }

  handleAMToggle (val: boolean, oldVal: boolean) {
    if (val === oldVal) { return }
    this.DateStore.SET_AM(val)
  }

  RDate () {
    const { year, month, weekDay, date, pickerType, activeType } = this.DateStore

    return !['datetime', 'date'].includes(pickerType) ? undefined : (
      <div staticClass={`${compName}__date`}>
        <div>
          <a staticClass={`${compName}__date-year`}
             class={{ 'm--active': activeType === DatePickerType.year }}
             onClick={ () => { this.DateStore.SET_ACTIVE_TYPE(DatePickerType.year) } }>{year}</a>
          <span staticClass={`${compName}__date-weekDay`}>{WeekMap[weekDay]}</span>
        </div>
        <div staticClass={`${compName}__date-date`}>
          <a class={{ 'm--active': activeType === DatePickerType.month }}
             onClick={ () => { this.DateStore.SET_ACTIVE_TYPE(DatePickerType.month) } }>
            {(month + 1).dateZeroize()}
          </a>-
          <a class={{ 'm--active': activeType === DatePickerType.date  }}
             onClick={ () => { this.DateStore.SET_ACTIVE_TYPE(DatePickerType.date) } }>
            {date.dateZeroize()}
          </a>
        </div>
      </div>
    )
  }

  RTime () {
    const { handleAMToggle } = this
    const { hours, minutes, pickerType, activeType, ampm, am } = this.DateStore

    return !['datetime', 'time'].includes(pickerType) ? undefined : (
      <div class={`${compName}__time`}>
        { !ampm ? undefined
          : <div staticClass={`${compName}__time-ampm`}>
            <a class={{ 'm--active': am }}
               onClick={ () => { handleAMToggle(true, am) } }>
              AM
            </a>
            <a class={{ 'm--active': !am }}
               onClick={ () => { handleAMToggle(false, am) } }>
              PM
            </a>
          </div>
        }
        <div staticClass={`${compName}__time-hours`}>
          <a class={{ 'm--active': activeType === DateTimeValueType.hours }}
             onClick={ () => { this.DateStore.SET_ACTIVE_TYPE(DateTimeValueType.hours) } }>
            {hours.dateZeroize()}
          </a>:
          <a class={{ 'm--active': activeType === DateTimeValueType.minutes }}
             onClick={ () => { this.DateStore.SET_ACTIVE_TYPE(DateTimeValueType.minutes) } }>
            {minutes.dateZeroize()}
          </a>
        </div>
      </div>
    )
  }

  RYear () {
    const { year, pickerType } = this.DateStore

    return pickerType !== 'year' ? undefined : (
      <div staticClass={`${compName}__year`}>
        {year}
      </div>
    )
  }

  RMonth () {
    const { month, pickerType } = this.DateStore

    return pickerType !== DatePickerType.month ? undefined : (
      <div staticClass={`${compName}__month`}>
        {MonthMap[month]}
      </div>
    )
  }

  render () {
    const { classes, RDate, RTime, RYear, RMonth } = this

    return (
      <div staticClass={`${compName}`}
           class={classes}>
        {RYear()}
        {RMonth()}
        {RDate()}
        <div style="flex-grow:1" />
        {RTime()}
      </div>
    )
  }
}
