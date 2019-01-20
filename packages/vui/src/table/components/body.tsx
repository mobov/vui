import { Component, Prop, Vue, Inject, Watch } from 'vue-property-decorator'
import MIcon from '../../icon'
import { MTransitionExpansion } from '../../transition'
import MCheckbox from '../../checkbox'
import MRadio from '../../radio'
import { getStyleSize } from '../../core/util'
import { on, off } from '../../core/event'
import { Size } from '../../types/model'

const _name = 'm-table-body'

@Component({ components: { MCheckbox, MRadio, MIcon, MTransitionExpansion } })
export default class TableBody extends Vue {
  @Prop({ type: String })
  private height!: string

  @Prop({ type: Boolean })
  private border!: boolean

  @Prop({ type: Boolean })
  private noHeader!: boolean

  @Prop({ type: String })
  private size!: Size

  @Prop({ type: Boolean })
  private rowSelect!: boolean

  @Prop({ type: Boolean })
  private rowExpand!: boolean

  @Prop({ type: String })
  private select!: 'none' | 'single' | 'multi'

  @Prop({ type: String })
  private expand!: 'none' | 'single' | 'multi'

  @Inject()
  private TableCols!: any

  @Inject()
  private TableStore!: any

  @Watch('noHeader')
  noHeaderToggle (val: string) { if (!val) { this.onDomUpdate() } }

  get selectable () {
      return this.select !== 'none'
  }

  get expandable () {
      return this.expand !== 'none'
  }

  get styles () {
    const { height } = this

    return {
      height: height !== 'auto' ? height : false
    }
  }

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
    console.log(index)
    this.TableStore.SET_SELECTED(index)
  }

  handleRowExpand (row: any, index: number) {
    console.log(index)
    this.TableStore.SET_EXPANDED(index)
  }

  RCols (row: any, index: number) {
    const { TableCols, selectable, select, size, expandable, handleRowSelect, handleRowExpand } = this
    const { Selected, keyField, NoSelect, Expanded } = this.TableStore

    const result: any = []

    const RContent = (
        item: any,
        isSelect: boolean = false,
        isExpand: boolean = false
    ) => {
      let content: any = []

      const scopedSlots = item.data.scopedSlots
      const field = item.componentOptions.propsData.field

      if (isSelect) {
        const isSelected = Selected.includes(row[keyField])

        if (select === 'multi') {
          content = (
            <div staticClass="m--center">
              <MCheckbox value={isSelected} size={size}
                nativeOnClick={(event: Event) => {
                  event.stopPropagation()
                }}
                onInput={() => handleRowSelect(row, index)} />
            </div>
          )
        } else {
          content = (
            <div staticClass="m--center">
              <MRadio value={isSelected} size={size}
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
                ? <MIcon name='remove' size={size}/>
                : <MIcon name='add' size={size}/>
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

    const RCell = (item: any) => {
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
        <td staticClass={`${_name}__cell`}
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
      <tr staticClass={`${_name}__row`}
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
      <tr staticClass={`${_name}__expand`}>
        <td colSpan={TableCols.length}>
          <MTransitionExpansion>
            {!isExpanded ? undefined : (
              <div staticClass={`${_name}__expand-content`}>
                {this.$parent.$scopedSlots.expand(row)}
              </div>
            )}
          </MTransitionExpansion>
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

  onDomUpdate () {
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
    this.onDomUpdate()
    on(window, 'resize', this.onDomUpdate)
  }

  updated () {
    this.onDomUpdate()
  }

  beforeDestroy () {
    off(window, 'resize', this.onDomUpdate)
  }

  render () {
    const { styles, RTBody } = this

    return (
      <div staticClass={_name} style={styles}>
        <table>{RTBody()}</table>
      </div>
    )
  }
}
