import Vue from 'vue'
import MButton from '../../button'

const _name = 'm-time-picker-panel-year'

export default Vue.extend({
  name: 'MTimePickerPanelYear',
  components: { MButton },
  inject: ['DateStore'],
  props: {
    max: {
      type: Number,
      default: 2100
    },
    min: {
      type: Number,
      default: 1900
    }
  },
  methods: {
    onClick (year) {
      this.DateStore.UPDATE(year, 'year')
      this.$emit('pick')
    },
    RList () {
      const { min, max, onClick } = this
      const { year } = this.DateStore
      const Cols = []

      for (let tempYear = min; tempYear <= max; tempYear++) {
        const isCurrent = tempYear === year
        Cols.push(
          <MButton size="sm"
            class="m-m-0 m-p-0"
            shape="circle"
            elevation={0}
            variety={isCurrent ? 'normal' : 'flat'}
            color={isCurrent ? 'primary' : 'default'}
            onClick={() => onClick(tempYear)} >
            {tempYear}
          </MButton>
        )
      }

      return Cols
    }
  },
  render () {
    const { RList } = this

    return (
      <div staticClass={_name}>
        {RList()}
      </div>
    )
  }
})
