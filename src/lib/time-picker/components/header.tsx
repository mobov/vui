/**
 * 时间选择器头部显示板
 */
import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
import { Color } from '@/types/model'

const WeekMap = [ '星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
const MonthMap = ['一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月']
const _name = 'm-time-picker-header'

@Component
export default class MTimePickerHeader extends Vue {
  @Prop({ type: String, default: 'primary' })
  private color!: Color

  @Inject()
  private DateStore!: any

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
      <div staticClass={`${_name}__date`}>
        <div>
          <a staticClass={`${_name}__date-year`}
             class={{'m--active': activeType === 'year'}}
             onClick={ () => { this.DateStore.SET_ACTIVE_TYPE('year') } }>{year}</a>
          <span staticClass={`${_name}__date-weekDay`}>{WeekMap[weekDay]}</span>
        </div>
        <div staticClass={`${_name}__date-date`}>
          <a class={{'m--active': activeType === 'month'}}
             onClick={ () => { this.DateStore.SET_ACTIVE_TYPE('month') } }>
            {(month + 1).dateZeroize()}
          </a>-
          <a class={{'m--active': activeType === 'date'}}
             onClick={ () => { this.DateStore.SET_ACTIVE_TYPE('date') } }>
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
      <div class={`${_name}__time`}>
        { !ampm ? undefined :
          <div staticClass={`${_name}__time-ampm`}>
            <a class={{'m--active': am }}
               onClick={ () => { handleAMToggle(true, am) } }>
              AM
            </a>
            <a class={{'m--active': !am }}
               onClick={ () => { handleAMToggle(false, am) } }>
              PM
            </a>
          </div>
        }
        <div staticClass={`${_name}__time-hours`}>
          <a class={{'m--active': activeType === 'hours'}}
             onClick={ () => { this.DateStore.SET_ACTIVE_TYPE('hours') } }>
            {hours.dateZeroize()}
          </a>:
          <a class={{'m--active': activeType === 'minutes'}}
             onClick={ () => { this.DateStore.SET_ACTIVE_TYPE('minutes') } }>
            {minutes.dateZeroize()}
          </a>
        </div>
      </div>
    )
  }

  RYear () {
    const { year, pickerType } = this.DateStore

    return pickerType !== 'year' ? undefined : (
      <div staticClass={`${_name}__year`}>
        {year}
      </div>
    )
  }

  RMonth () {
    const { month, pickerType } = this.DateStore

    return pickerType !== 'month' ? undefined : (
      <div staticClass={`${_name}__month`}>
        {MonthMap[month]}
      </div>
    )
  }

  render () {
    const { classes, RDate, RTime, RYear, RMonth } = this

    return (
      <div staticClass={`${_name}`}
           class={classes}>
        {RYear()}
        {RMonth()}
        {RDate()}
        <div style="flex:1" />
        {RTime()}
      </div>
    )
  }
}
