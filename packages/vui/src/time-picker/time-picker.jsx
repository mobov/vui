import Vue from 'vue'
import { BREAKPOINT, COLOR } from '../core/constant'
import MTimePickerHeader from './components/header'
import MTimePickerPanelDate from './components/panel-date'
import MTimePickerPanelYear from './components/panel-year'
import MTimePickerPanelMonth from './components/panel-month'
import MTimePickerPanelTime from './components/panel-time'
import MTimePickerHandler from './components/handler'

const _name = 'm-time-picker'

export default Vue.extend({
  name: 'MTimePicker',
  components: {
    MTimePickerHeader,
    MTimePickerPanelDate,
    MTimePickerPanelYear,
    MTimePickerPanelMonth,
    MTimePickerPanelTime,
    MTimePickerHandler
  },
  props: {
    color: {
      type: String,
      default: COLOR.primary
    },
    elevation: {
      type: Number,
      default: 2
    },
    size: {
      type: String,
      default: BREAKPOINT.md
    },
    landscope: {
      type: Boolean,
      default: false
    },
    pickerType: {
      type: String,
      default: 'date'
    },
    desync: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Date, Number, String],
      default: new Date().getTime()
    },
    max: {
      type: [Date, Number, String],
      default: 2100
    },
    min: {
      type: [Date, Number, String],
      default: 1900
    },
    valueFormat: {
      type: String,
      default: 'timestamp'
    },
    ampm: {
      type: Boolean,
      default: false
    },
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    confirmation: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const { landscope, pickerType } = this

      return {
        'm--landscope': landscope,
        [`m--${pickerType}`]: true
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (newVal, oldVal) {
        if (newVal === oldVal) { return }
        this.DateStore.UPDATE(
          this.valueAdaptI(newVal)
        )
      }
    },
    ampm: {
      immediate: true,
      handler (newVal, oldVal) {
        if (newVal === oldVal) { return }
        this.DateStore.SET_AMPM(newVal)
      }
    },
    pickerType: {
      immediate: true,
      handler (newVal, oldVal) {
        if (newVal === oldVal) { return }
        this.DateStore.SET_PICKER_TYPE(val)
        switch (newVal) {
            case 'datetime' : this.DateStore.SET_ACTIVE_TYPE('date'); break
            default : this.DateStore.SET_ACTIVE_TYPE(newVal)
        }
      }
    }
  },
  methods: {
    onConfirm () {
        this.DateStore.emitInput()
    },
    onCancel () {
      this.$emit('cancel')
    },
    onInput () {
      this.$emit('input')
    },
    // 输入适配
    valueAdaptI (val) {
      let result = 0
      if (this.valueFormat === 'timestamp') {
          result = typeof val === 'string' ? Number(val) : val
      } else
      if (this.valueFormat === 'Date') {
          result = val.getTime()
      }
      return result
    },
    // 输出适配
    valueAdaptO (val) {
      let result = null
      if (this.valueFormat === 'timestamp') {
          result = val
      } else
      if (this.valueFormat === 'Date') {
          result = new Date(val)
      }
      return result
    },
    handleActive (type) {
      if (['datetime', 'date'].includes(this.pickerType)) {
        this.DateStore.SET_ACTIVE_TYPE(type)
      }
    },
    RPanel () {
      const { color, firstDayOfWeek, max, min, handleActive } = this
      const { activeType } = this.DateStore

      switch (activeType) {
        case 'date':
          return <MTimePickerPanelDate max={max}
                                       min={min}
                                       color={color}
                                       firstDayOfWeek={firstDayOfWeek} />
        case 'year':
          return <MTimePickerPanelYear max={max}
                                       min={min}
                                       onPick={() => { handleActive('date') }} />
        case 'month':
          return <MTimePickerPanelMonth onPick={() => { handleActive('date') }} />
        default:
          return <MTimePickerPanelTime color={color}
                                       onPick={() => { handleActive('date') }} />
      }
    },
    RHandler () {
      const { confirmation, handleConfirm, handleCancel } = this

      return !confirmation ? undefined
        : <MTimePickerHandler onConfirm={handleConfirm}
                              onCancel={handleCancel} />
    }
  },
  provide () {
    return {
       DateStore: {
          value: this.valueAdaptI(this.value),
          pickerType: this.pickerType,
          activeType: 'date',
          ampm: false,
          get dateValue () {
              return new Date(this.value)
          },
          get year () {
              return this.dateValue.getFullYear()
          },
          get month () {
              return this.dateValue.getMonth()
          },
          get weekDay () {
              return this.dateValue.getDay()
          },
          get date () {
              return this.dateValue.getDate()
          },
          get hours () {
              let result = this.dateValue.getHours()
              if (this.ampm && result >= 12) { result = result - 12 }
              return result
          },
          get minutes () {
              return this.dateValue.getMinutes()
          },
          get am () {
              return this.dateValue.getHours() < 12
          },
          SET_ACTIVE_TYPE (type) {
              if (type === this.activeType) { return }
              this.activeType = type
          },
          SET_PICKER_TYPE (type) {
              if (type === this.pickerType) { return }
              this.pickerType = type
          },
          SET_AM (val) {
              if (val === this.am) { return }
              const temp = new Date(this.value)
              temp.setHours(val ? this.hours : this.hours + 12)
              this.value = temp.getTime()
          },
          SET_AMPM (val) {
              if (val === this.ampm) { return }
              this.ampm = val
          },
          UPDATE: (val, type = 'date') => {
              const self = this.DateStore
              const result = new Date(self.value)
              if (type === 'year') {
                  result.setFullYear(val)
                  self.value = result.getTime()
              } else if (type === 'month') {
                  result.setMonth(val)
                  self.value = result.getTime()
              } else if (type === 'hours') {
                  result.setHours(val)
                  self.value = result.getTime()
              } else if (type === 'minutes') {
                  result.setMinutes(val)
                  self.value = result.getTime()
              } else {
                  self.value = val
              }
              if (this.desync) { return }
              if (this.confirmation) { return }
              if (this.valueAdaptI(this.value) === self.value) { return }
              self.emitInput()
          },
          emitInput: () => {
              const self = this.DateStore
              const outValue = this.valueAdaptO(self.value)
              this.onInput(outValue)
          }
      }
    }
  },
  render () {
    const { classes, color, RPanel, RHandler } = this
    const { pickerType } = this.DateStore

    return (
      <div staticClass={`${_name} m--${pickerType}`}
           class={classes}>
        <div staticClass={`${_name}__main`}>
          <MTimePickerHeader color={color} />
          <div staticClass={`${_name}-panel`}>{RPanel()}</div>
        </div>
        {RHandler()}
      </div>
    )
  }
})
