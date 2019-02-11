import Vue from 'vue'
import MButton from '../../button'
import MIcon from '../../icon'

const WeekMap = ['日', '一', '二', '三', '四', '五', '六']
const _name = 'm-time-picker-panel-date'

export default Vue.extend({
  name: 'MTimePickerHeader',
  components: { MButton, MIcon },
  inject: ['DateStore'],
  props: {
    color: {
      type: String
    }
  },
  data () {
    return {
      viewValue: this.DateStore.value
    }
  },
  computed: {
    viewDateValue: {
      get () {
        return new Date(this.viewValue)
      },
      set (val) {
        this.viewValue = val
      }
    },
    viewYear () {
      return this.viewDateValue.getFullYear()
    },
    viewMonth () {
      return this.viewDateValue.getMonth()
    },
    viewDate () {
      return this.viewDateValue.getDate()
    }
  },
  methods: {
    handleDateClick (yearVal, monthVal, dateVal) {
      const { year, month, date } = this.DateStore

      if (yearVal === year &&
        monthVal === month &&
        dateVal === date) { return }

      const temp = new Date(this.viewValue)

      if (yearVal !== year) { temp.setFullYear(yearVal) }
      if (monthVal !== month) { temp.setMonth(monthVal) }
      if (dateVal !== date) { temp.setDate(dateVal) }

      this.DateStore.UPDATE(temp.getTime())
      this.$emit('pick')
    },
    handleMonthToggle (action = 'next') {
      const date = new Date(this.viewValue)
      const month = date.getMonth()
      date.setMonth(action === 'prev' ? month - 1 : month + 1)
      this.viewValue = date.getTime()
    },
    RTableHead () {
      const Tds = []
      WeekMap.forEach(week => Tds.push(<td>{week}</td>))
      return (<thead><tr>{Tds}</tr></thead>)
    },
    RTableBody () {
      const { viewDateValue, viewYear, viewMonth, handleDateClick } = this
      const { year, month, date } = this.DateStore
      const nowValue = new Date()
      const isNowDate = nowValue.getFullYear() === viewYear && nowValue.getMonth() === viewMonth
      const nowDate = nowValue.getDate()
      const viewMonthDays = viewDateValue.maxDayOfMonth()
      const viewFirstWeekDay = viewDateValue.firstWeekDay()
      const isCurMonth = viewYear === year && viewMonth === month

      const Trs = []
      let Tds = []

      for (let pre = 0; pre < viewFirstWeekDay; pre++) {
        Tds.push(<td> </td>)
      }
      for (let tempDate = 1; tempDate <= viewMonthDays; tempDate++) {
        const isCurDate = isCurMonth && (tempDate === date)
        const isToday = isNowDate && (tempDate === nowDate)

        Tds.push(<td><MButton class='m-m-0 m-p-0'
                              size='sm'
                              shape='circle'
                              elevation={0}
                              variety={isCurDate ? 'normal' : isToday ? 'outline' : 'flat'}
                              color={isCurDate || isToday ? 'primary' : 'default'}
                              onClick={() => handleDateClick(viewYear, viewMonth, tempDate)}>
          {tempDate}
        </MButton></td>)
        if ((tempDate + viewFirstWeekDay) % 7 === 0 || tempDate === viewMonthDays) {
          Trs.push(<tr>{Tds}</tr>)
          Tds = []
        }
      }

      return (<tbody>{Trs}</tbody>)
    }
  },
  render () {
    const { viewYear, handleMonthToggle, RTableHead, RTableBody } = this

    return (
      <div staticClass={_name}>
        <div class={`${_name}__header`}>
          <div staticClass={`${_name}__header-year`}>
            <MButton variety='flat'
                     staticClass='m-m-0'
                     color='default'
                     elevation={0}
                     onClick={() => this.DateStore.SET_ACTIVE_TYPE('year')}>
              {viewYear}
            </MButton>
          </div>
          <div staticClass={`${_name}__header-handler`}>
            <MButton variety='flat'
                     staticClass='m-m-0'
                     elevation={0}
                     shape='circle'
                     color='default'
                     icon='navigate_before'
                     onClick={() => handleMonthToggle('prev')} />
            <MButton variety='flat'
                     staticClass='m-m-0'
                     elevation={0}
                     shape='circle'
                     color='default'
                     icon='navigate_next'
                     onClick={() => handleMonthToggle('next')} />
          </div>
        </div>
        <table class={`${_name}__table`}>
          {RTableHead()}
          {RTableBody()}
        </table>
      </div>
    )
  }
})
