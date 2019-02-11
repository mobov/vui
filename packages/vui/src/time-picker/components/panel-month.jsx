import Vue from 'vue'
import MButton from '../../button'

const MonthMap = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
const _name = 'm-time-picker-panel-month'

export default Vue.extend({
  name: 'MTimePickerPanelMonth',
  components: { MButton },
  inject: ['DateStore'],
  props: {
    color: {
      type: String
    }
  },
  methods: {
    handleClick (month) {
        this.DateStore.UPDATE(month, 'month')
        this.$emit('pick')
    },
    RCols () {
      const { handleClick } = this
      const { month } = this.DateStore
      const Cols = []

      for (let tempValue = 0; tempValue <= 11; tempValue++) {
        const isCurrent = tempValue === month
        Cols.push(
          <MButton size="sm"
                   class="m-m-0 m-p-0"
                   shape="circle"
                   elevation={0}
                   variety={isCurrent ? 'normal' : 'flat'}
                   color={isCurrent ? 'primary' : 'default'}
                   onClick={() => handleClick(tempValue)}>
            {MonthMap[tempValue]}
          </MButton>
        )
      }

      return Cols
    }
  },
  render () {
    const { RCols } = this

    return (
      <div staticClass={_name}>
        {RCols()}
      </div>
    )
  }
})
