import { Component, Prop, Vue, Inject } from 'vue-property-decorator'
import MIcon from '../../icon'
import MCheckbox from '../../checkbox'
import { getStyleSize } from '../../core/util'
import { typeSelect } from '../constant'
import { size } from '../../core/constant'

const compName = 'm-table-head'

@Component({
  components: { MCheckbox, MIcon }
})
export default class TableHead extends Vue {
  @Prop({ type: String })
  size?: size

  @Prop({ type: String })
  select?: typeSelect

  @Prop({ type: Boolean, default: false })
  sortable?: boolean

  @Prop({ type: Function })
  sort?: () => boolean

  @Inject()
  TableCols!: any

  @Inject()
  TableStore!: any

  private widthMap: any = []

  updateSize (widthMap: any) {
    this.widthMap = widthMap
  }

  handleSelectAll () {
    this.TableStore.SET_SELECTED_ALL()
  }

  RCell (item: any, index: number) {
    const { TableStore, select, handleSelectAll, size } = this
    const { Data, Selected } = TableStore
    const children = item.componentOptions.children
    const propsData = item.componentOptions.propsData
    const propsDefault = item.componentOptions.Ctor.options.props

    function RContent () {
      let content: any = null
      const type = item.componentOptions.propsData.type

      if (type === 'select' && select === 'multi') {
        const selectedLength = Selected.length
        const dataLength = Data.length
        const checkAll: any = [0, 1]
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
          content.push(<MIcon size={14} value={'arrow_upward'} />)
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
      <td staticClass={`${compName}__cell`}
          style={styles}
          align={align}>
        {RContent()}
      </td>
    )
  }

  RHead () {
    const { TableCols, RCell } = this
    const result: any = []

    TableCols.forEach((item: any, index: number) => {
        result.push(RCell(item, index))
    })

    return (<tr staticClass={`${compName}__row`}>{result}</tr>)
  }

  RSlotHeadPrepend () {
    const { TableCols } = this
    const $slotHeadPrepend = this.$parent.$slots['head-prepend']

    return !$slotHeadPrepend ? undefined : (
      <tr staticClass={`${compName}__row`}>
        <td colSpan={TableCols.length}>{$slotHeadPrepend}</td>
      </tr>
    )
  }

  RSlotHeadAppend () {
    const { TableCols } = this
    const $slotHeadAppend = this.$parent.$slots['head-append']

    return !$slotHeadAppend ? undefined : (
      <tr staticClass={`${compName}__row`}>
        <td colSpan={TableCols.length}>{$slotHeadAppend}</td>
      </tr>
    )
  }

  RSlotHeadExtra () {
    const $slotHeadExtra = this.$parent.$slots['head-extra']

    return !$slotHeadExtra ? undefined : $slotHeadExtra
  }

  render () {
    const { RHead, RSlotHeadPrepend, RSlotHeadAppend, RSlotHeadExtra } = this

    return (
      <table staticClass={compName}>
        <thead>
          {RSlotHeadPrepend()}
          {RSlotHeadExtra()}
          {RHead()}
          {RSlotHeadAppend()}
        </thead>
      </table>
    )
  }
}
