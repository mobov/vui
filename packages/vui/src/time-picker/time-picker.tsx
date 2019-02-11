import { Component, Prop, Emit, Model, Provide, Vue, Mixins } from 'vue-property-decorator'
import { Color, DatePickerType } from '../types/model'
import TimePickerBase from './mixins'
import MTimePickerHeader from './components/header'
import MTimePickerPanelDate from './components/panel-date'
import MTimePickerPanelYear from './components/panel-year'
import MTimePickerPanelMonth from './components/panel-month'
import MTimePickerPanelTime from './components/panel-time'
import MTimePickerHandler from './components/handler'

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
export default class MTimePicker extends Mixins(TimePickerBase) {
  @Prop({ type: String, default: 'primary' })
  private color!: Color

  @Prop({ type: Number, default: 2 })
  private elevation!: number

  @Prop({ type: Boolean, default: false })
  private landscope!: boolean

  @Prop({ type: String, default: 'list' })
  private timeSelectType!: 'list' | 'clock'

  get classes () {
    const { landscope } = this

    return {
      'm--landscope': landscope
    }
  }

  handleActive (type: DatePickerType) {
    if (['datetime', 'date'].includes(this.pickerType)) {
      this.DateStore.SET_ACTIVE_TYPE(type)
    }
  }

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
