import { Component, Prop, Emit, Provide, Mixins, Watch } from 'vue-property-decorator'
import colorable from '../core/mixin/colorable'
import elevated from '../core/mixin/elevated'
import MTimePickerHeader from './components/header'
import MTimePickerPanelDate from './components/panel-date'
import MTimePickerPanelYear from './components/panel-year'
import MTimePickerPanelMonth from './components/panel-month'
import MTimePickerPanelTime from './components/panel-time'
import MTimePickerHandler from './components/handler'
import { dateValueFormat, datePickerType, dateValueType } from './constant'

const _name = 'm-time-picker'

@Component({
  components: {
    MTimePickerHeader,
    MTimePickerPanelDate,
    MTimePickerPanelYear,
    MTimePickerPanelMonth,
    MTimePickerPanelTime,
    MTimePickerHandler
  }
})
export default class MTimePicker extends Mixins(
  colorable,
  elevated
) {
  @Prop({ type: Boolean, default: false })
  landscope!: boolean

  @Prop({ type: Boolean, default: false })
  desync!: boolean

  @Prop({ type: [Date, Number, String], default: new Date().getTime() })
  value!: any

  @Prop({ type: String, default: dateValueFormat.timestamp })
  valueFormat!: dateValueFormat

  @Prop({ type: Boolean, default: false })
  ampm!: boolean

  @Prop({ type: Number, default: 1 })
  hourStep!: number

  @Prop({ type: Number, default: 1 })
  minuteStep!: number

  @Prop({ type: [Date, Number, String], default: 2100 })
  max!: any

  @Prop({ type: [Date, Number, String], default: 1900 })
  min!: any

  @Prop({ type: Number, default: 0 })
  firstDayOfWeek!: number

  @Prop({ type: String, default: datePickerType.date })
  pickerType!: datePickerType

  @Prop({ type: Boolean, default: false })
  confirmation!: boolean

  @Emit('confirm')
  handleConfirm () {
    this.DateStore.emitInput()
  }

  @Emit('cancel')
  handleCancel () { }

  @Emit('input')
  onInput (val: any) { }

  // 输入适配
  valueAdaptI (val: any): number {
    let result = 0
    if (this.valueFormat === dateValueFormat.timestamp) {
      result = typeof val === 'string' ? Number(val) : val
    } else
    if (this.valueFormat === dateValueFormat.Date) {
      result = val.getTime()
    }
    return result
  }
  // 输出适配
  valueAdaptO (val: number): any {
    let result: any = null
    if (this.valueFormat === dateValueFormat.timestamp) {
      result = val
    } else
    if (this.valueFormat === dateValueFormat.Date) {
      result = new Date(val)
    }
    return result
  }

  @Watch('value', { immediate: true })
  onValueUpdate (val: any, oldVal: any) {
    if (val === oldVal) { return }
    this.DateStore.UPDATE(this.valueAdaptI(val))
  }

  @Watch('ampm', { immediate: true })
  onAMPMUpdate (val: any, oldVal: any) {
    if (val === oldVal) { return }
    this.DateStore.SET_AMPM(val)
  }

  @Watch('pickerType', { immediate: true })
  onPickerTypeChange (val: any) {
    this.DateStore.SET_PICKER_TYPE(val)
    switch (val) {
      case datePickerType.datetime : this.DateStore.SET_ACTIVE_TYPE(dateValueType.date); break
      default : this.DateStore.SET_ACTIVE_TYPE(val)
    }
  }

  @Provide()
  DateStore: any = {
    value: this.valueAdaptI(this.value),
    pickerType: this.pickerType,
    activeType: datePickerType.date,
    ampm: false,
    get dateValue (): Date {
      return new Date(this.value)
    },
    get year (): number {
      return this.dateValue.getFullYear()
    },
    get month (): number {
      return this.dateValue.getMonth()
    },
    get weekDay (): number {
      return this.dateValue.getDay()
    },
    get date (): number {
      return this.dateValue.getDate()
    },
    get hours (): number {
      let result = this.dateValue.getHours()
      if (this.ampm && result >= 12) { result = result - 12 }
      return result
    },
    get minutes (): number {
      return this.dateValue.getMinutes()
    },
    get am (): boolean {
      return this.dateValue.getHours() < 12
    },
    SET_ACTIVE_TYPE (type: dateValueType): void {
      if (type === this.activeType) { return }
      this.activeType = type
    },
    SET_PICKER_TYPE (type: dateValueFormat): void {
      if (type === this.pickerType) { return }
      this.pickerType = type
    },
    SET_AM (val: boolean): void {
      if (val === this.am) { return }
      const temp = new Date(this.value)
      temp.setHours(val ? this.hours : this.hours + 12)
      this.value = temp.getTime()
    },
    SET_AMPM (val: boolean): void {
      if (val === this.ampm) { return }
      this.ampm = val
    },
    UPDATE: (val: number, type: dateValueType = dateValueType.date): void => {
      const self = this.DateStore
      const result = new Date(self.value)

      if (type === dateValueType.year) {
        result.setFullYear(val)
        self.value = result.getTime()
      } else if (type === dateValueType.month) {
        result.setMonth(val)
        self.value = result.getTime()
      } else if (type === dateValueType.hours) {
        result.setHours(val)
        self.value = result.getTime()
      } else if (type === dateValueType.minutes) {
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
    emitInput: (): void => {
      const self = this.DateStore
      const outValue = this.valueAdaptO(self.value)
      this.onInput(outValue)
    }
  }

  get classes () {
    const { landscope } = this

    return {
      'm--landscope': landscope
    }
  }

  RPanel () {
    const { color, firstDayOfWeek, max, min } = this
    const { activeType } = this.DateStore

    switch (activeType) {
      case datePickerType.date:
        return <MTimePickerPanelDate max={max}
                                     min={min}
                                     color={color}
                                     firstDayOfWeek={firstDayOfWeek} />
      case datePickerType.year:
        return <MTimePickerPanelYear max={max}
                                     min={min}
                                     onPick={() => { this.DateStore.SET_ACTIVE_TYPE(datePickerType.date) }} />
      case datePickerType.month:
        return <MTimePickerPanelMonth onPick={() => { this.DateStore.SET_ACTIVE_TYPE(datePickerType.date)}} />
      default:
        return <MTimePickerPanelTime color={color}
                                     onPick={() => { this.DateStore.SET_ACTIVE_TYPE(datePickerType.date) }} />
    }
  }

  RHandler () {
    const { confirmation, handleConfirm, handleCancel } = this

    return !confirmation ? undefined
      : <MTimePickerHandler onConfirm={handleConfirm}
                            onCancel={handleCancel} />
  }

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
}
