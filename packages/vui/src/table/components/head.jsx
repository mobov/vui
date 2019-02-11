import MIcon from '../../icon'
import MCheckbox from '../../checkbox'
import { getStyleSize } from '../../core/util'

const _name = 'm-table-head'

export default Vue.extend({
  name: 'MTableHead',
  components: { MCheckbox, MRadio, MIcon },
  inject: ['TableStore', 'TableCols'],
  props: {
    size: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    border: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Boolean,
      default: false
    },
    sort: {
      type: Function
    }
  },
  data () {
    return {
      widthMap: []
    }
  },
  computed: {
    selectable () {
      return this.select !== 'none'
    },
    expandable () {
      return this.expand !== 'none'
    },
    styles () {
      const { height } = this

      return {
        height: height !== 'auto' ? height : false
      }
    }
  },
  methods: {
    updateSize (val) {
      this.widthMap = val
    },
    handleSelectAll () {
      this.TableStore.SET_SELECTED_ALL()
    },
    RCell (item, index) {
      const { TableStore, select, handleSelectAll, size } = this
      const { Data, Selected } = TableStore
      const children = item.componentOptions.children
      const propsData = item.componentOptions.propsData
      const propsDefault = item.componentOptions.Ctor.options.props

      function RContent () {
        let content = null
        const type = item.componentOptions.propsData.type

        if (type === 'select' && select === 'multi') {
          const selectedLength = Selected.length
          const dataLength = Data.length
          const checkAll = [0, 1]
          const checkVal = selectedLength === 0
            ? []
            : dataLength === selectedLength
              ? [0, 1]
              : [0]

          content = (
            <MCheckbox onInput={() => { handleSelectAll() }}
                       size={size}
                       value={checkVal}
                       label={checkAll}/>
          )
        } else {
          // todo:错误处理
          content = [ propsData.title || children ]
          if (propsData.sortable !== undefined) {
            content.push(<MIcon size={14} name={'arrow_upward'} />)
          }
        }

        return content
      }

      const width = getStyleSize(
          this.widthMap[index] ||
          propsData.width ||
          propsDefault.width.default
      )
      const align = item.componentOptions.align ||
          propsDefault.align.default
      const styles = { width, minWidth: width, maxWidth: width }

      return (
        <td staticClass={`${_name}__cell`}
            style={styles}
            align={align}>
          {RContent()}
        </td>
      )
    },
    RHead () {
      const { TableCols, RCell } = this
      const result = []

      TableCols.forEach((item, index) => {
          result.push(RCell(item, index))
      })

      return (<tr staticClass={`${_name}__row`}>{result}</tr>)
    },
    RSlotHeadPrepend () {
      const { TableCols } = this
      const $slotHeadPrepend = this.$parent.$slots['head-prepend']

      return !$slotHeadPrepend ? undefined : (
        <tr staticClass={`${_name}__row`}>
          <td colSpan={TableCols.length}>{$slotHeadPrepend}</td>
        </tr>
      )
    },
    RSlotHeadAppend () {
      const { TableCols } = this
      const $slotHeadAppend = this.$parent.$slots['head-append']

      return !$slotHeadAppend ? undefined : (
        <tr staticClass={`${_name}__row`}>
          <td colSpan={TableCols.length}>{$slotHeadAppend}</td>
        </tr>
      )
    },
    RSlotHeadExtra () {
      const $slotHeadExtra = this.$parent.$slots['head-extra']

      return !$slotHeadExtra ? undefined : $slotHeadExtra
    }
  },
  render () {
    const { RHead, RSlotHeadPrepend, RSlotHeadAppend, RSlotHeadExtra } = this

    return (
      <table staticClass={_name}>
        <thead>
          {RSlotHeadPrepend()}
          {RSlotHeadExtra()}
          {RHead()}
          {RSlotHeadAppend()}
        </thead>
      </table>
    )
  }
})
