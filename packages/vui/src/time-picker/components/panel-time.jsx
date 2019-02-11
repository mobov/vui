import Vue from 'vue'
import MButton from '../../button'
import MIcon from '../../icon'

const _name = 'm-time-picker-panel-time'

export default Vue.extend({
  name: 'MTimePickerPanelMonth',
  components: { MButton, MIcon },
  inject: ['DateStore'],
  props: {
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    }
  },
  methods: {
    onClick (val, type) {
      this.DateStore.SET_ACTIVE_TYPE(type)
      this.DateStore.UPDATE(
        (type === 'hours' && this.DateStore.ampm && !this.DateStore.am)
          ? val + 12
          : val,
        type
      )
      this.$emit('pick')
    },
    RList (type) {
      const { onClick, hourStep, minuteStep } = this
      const { ampm } = this.DateStore
      const min = 0
      const max = type === 'hours' ? ampm ? 11 : 23 : 59
      const step = type === 'hours' ? hourStep : minuteStep
      const time = this.DateStore[type]
      const Temps = []

      for (let tempTime = min; tempTime <= max; tempTime += step) {
        const isCurrent = tempTime === time
        Temps.push(
          <MButton onClick={() => onClick(tempTime, type)}
            size="sm"
            block
            class="m-m-0 m-p-0 m--block"
            shape="circle"
            elevation={0}
            variety={isCurrent ? 'normal' : 'flat'}
            color={isCurrent ? 'primary' : 'default'}>
            {tempTime}
          </MButton>
        )
      }

      return (
        <div staticClass={`${_name}__list ${_name}__list-${type}`}>
          {Temps}
        </div>
      )
    }
  },
  render () {
    const { RList } = this
    const Result = []

    Result.push(RList('hours'))
    Result.push(RList('minutes'))

    return (
      <div staticClass={_name}>{Result}</div>
    )
  }
})
