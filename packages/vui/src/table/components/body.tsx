import { Component, Prop, Vue, Inject, Watch } from 'vue-property-decorator'
import MIcon from '../../icon'
import MTransition from '../../transition'
import MCheckbox from '../../checkbox'
import MRadio from '../../radio'
import { getStyleSize } from '../../core/utils'
import { on, off } from '../../core/event'
import { size } from '../../core/constants'
import { typeHeader,  typeHover, typeSelect }  from '../constant'

const compName = 'm-table-body'

@Component({
  components: { MCheckbox, MRadio, MIcon, MTransition }
})
export default class TableBody extends Vue {
  @Prop({ type: String })
  height?: string

  @Prop({ type: Boolean })
  border?: boolean

  @Prop({ type: Boolean })
  noHeader?: boolean

  @Prop({ type: String })
  size?: size

  @Prop({ type: Boolean })
  rowSelect?: boolean

  @Prop({ type: Boolean })
  rowExpand?: boolean

  @Prop({ type: String })
  select?: typeSelect

  @Prop({ type: String })
  expand?: typeSelect

  @Inject()
  TableCols!: any[]

  @Inject()
  TableStore!: any

  @Watch('noHeader')
  noHeaderToggle (val: string) { if (!val) { this.updateDom() } }

  get selectable () {
      return this.select !== typeSelect.none
  }

  get expandable () {
      return this.expand !== typeSelect.none
  }

  // get styles () {
  //   const { height } = this
  //
  //   return {
  //     height: height !== 'auto' ? height : false
  //   }
  // }

  handleRowClick (row: any, index: number) {
    const { selectable, rowSelect, expandable, rowExpand } = this

    if (selectable && rowSelect) {
      this.handleRowSelect(row, index)
    }
    if (expandable && rowExpand) {
      this.handleRowExpand(row, index)
    }
  }

  handleRowSelect (row: any, index: number) {
    this.TableStore.SET_SELECTED(index)
  }

  handleRowExpand (row: any, index: number) {
    this.TableStore.SET_EXPANDED(index)
  }

  RCols (row: any, index: number) {
    const { TableCols, selectable, select, size, expandable, handleRowSelect, handleRowExpand } = this
    const { Selected, keyField, NoSelect, Expanded } = this.TableStore

    const result: any = []

    function RContent (
        item: any,
        isSelect: boolean = false,
        isExpand: boolean = false
    ) {
      let content: any = []

      const scopedSlots = item.data.scopedSlots
      const field = item.componentOptions.propsData.field

      if (isSelect) {
        const isSelected = Selected.includes(row[keyField])

        if (select === typeSelect.multi) {
          content = (
            <div staticClass="m--center">
              <MCheckbox value={isSelected} marginRight={0}
                nativeOnClick={(event: Event) => {
                  event.stopPropagation()
                }}
                onInput={() => handleRowSelect(row, index)} />
            </div>
          )
        } else {
          content = (
            <div staticClass="m--center">
              <MRadio value={isSelected}
                      marginRight={0}
                nativeOnClick={(event: Event) => {
                  event.stopPropagation()
                }}
                onInput={() => handleRowSelect(row, index)} />
            </div>
          )
        }
      } else if (isExpand) {
        const isExpanded = Expanded.includes(row[keyField])
        content = (
          <div staticClass="m--center"
               onClick={(event: Event) => {
                 event.stopPropagation()
                 handleRowExpand(row, index)
               }}>
            <transition name="m-transition-scale">
              {isExpanded
                ? <MIcon value='remove' size={size}/>
                : <MIcon value='add' size={size}/>
              }
            </transition>
          </div>
        )
      } else if (scopedSlots) {
          // 自定模板
        content = scopedSlots.default(row)
      } else {
        content = row[field]
      }

      return content
    }

    function RCell (item: any) {
      const width = getStyleSize(
        item.componentOptions.propsData.width
      )

      const styles = {
        width,
        minWidth: width,
        maxWidth: width
      }
      const align = item.componentOptions.align ||
          item.componentOptions.Ctor.options.props.align.default

      const type = item.componentOptions.propsData.type
      const isSelect = (type === 'select' && selectable)
      const isExpand = (type === 'expand' && expandable)

      return (
        <td staticClass={`${compName}__cell`}
            style={styles}
            align={align}>
          {RContent(item, isSelect, isExpand)}
        </td>
      )
    }

    TableCols.forEach((item: any) => { result.push(RCell(item)) })

    return result
  }

  RRow (row: any, index: number) {
    const { TableStore, RCols, handleRowClick, selectable } = this
    const { Selected, keyField, NoSelect } = TableStore

    const classes = !selectable ? {} : {
      'm--selected': Selected.includes(row[keyField]),
      'm--disabled': NoSelect.includes(row[keyField])
    }

    return (
      <tr staticClass={`${compName}__row`}
          class={classes}
          onClick={() => handleRowClick(row, index)}>
        {RCols(row, index)}
      </tr>
    )
  }

  RExpand (row: any, index: number) {
    if (!this.$parent.$scopedSlots.expand) { return undefined }

    const { TableStore, TableCols, expandable } = this
    const { Expanded, keyField } = TableStore

    if (!expandable) { return undefined }

    const isExpanded = Expanded.includes(row[keyField])

    return (
      <tr staticClass={`${compName}__expand`}>
        <td colSpan={TableCols.length}>
          <MTransition name={'expansion'}>
            {!isExpanded ? undefined : (
              <div staticClass={`${compName}__expand-content`}>
                {this.$parent.$scopedSlots.expand(row)}
              </div>
            )}
          </MTransition>
        </td>
      </tr>
    )
  }

  RTBody () {
    const { TableStore, RRow, RExpand, expandable } = this
    const result: any = []

    TableStore.Data.forEach((row: any, index: number) => {
      result.push(RRow(row, index))
      if (expandable) {
        result.push(RExpand(row, index))
      }
    })

    return (<tbody>{result}</tbody>)
  }

  updateDom () {
    const { noHeader } = this
    const $tableBody: any = this.$el.querySelector('tbody')

    if (!!$tableBody.children.length && !noHeader) {
      const widthMap: any = []
      const $headCells: any = $tableBody.children[0].children
      const vmTableHead: any = this.$parent.$refs.head
      let cellCount = $headCells.length
      while (cellCount--) {
        // widthMap.unshift($headCells[cellCount].clientWidth + (border ? 0 : 0)) // +1px消去边框对宽度影响
        widthMap.unshift($headCells[cellCount].clientWidth)
      }

      vmTableHead.updateSize(widthMap)
    }
  }

  mounted () {
    this.updateDom()
    on(window, 'resize', this.updateDom)
  }

  updated () {
    this.updateDom()
  }

  beforeDestroy () {
    off(window, 'resize', this.updateDom)
  }

  render () {
    const { RTBody } = this

    return (
      <div staticClass={compName}>
        <table>{RTBody()}</table>
      </div>
    )
  }
}
