import MIcon from '../../icon'
import MCheckbox from '../../checkbox'
import MRadio from '../../radio'
import { MTransitionExpansion } from '../../transition'
import { getStyleSize } from '../../core/util'
import { on, off } from '../../core/event'

const _name = 'm-table-body'

export default Vue.extend({
  name: 'MTableBody',
  components: { MCheckbox, MRadio, MIcon, MTransitionExpansion },
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
    noHeader: {
      type: Boolean,
      default: false
    },
    rowSelect: {
      type: Boolean,
      default: false
    },
    rowExpand: {
      type: Boolean,
      default: false
    },
    select: {
      type: String
    },
    expand: {
      type: String
    }
  },
  watch: {
    noHeader (newVal) {
      if (!newVal) { this.onDomUpdate() }
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
    handleRowClick (row, index) {
      const { selectable, rowSelect, expandable, rowExpand } = this

      if (selectable && rowSelect) {
        this.handleRowSelect(row, index)
      }
      if (expandable && rowExpand) {
        this.handleRowExpand(row, index)
      }
    },
    handleRowSelect (row, index) {
      this.TableStore.SET_SELECTED(index)
    },
    handleRowExpand (row, index) {
      this.TableStore.SET_EXPANDED(index)
    },
    updateDom () {
      const { noHeader } = this
      const $tableBody = this.$el.querySelector('tbody')

      if (!!$tableBody.children.length && !noHeader) {
        const widthMap = []
        const $headCells = $tableBody.children[0].children
        const vmTableHead = this.$parent.$refs.head
        let cellCount = $headCells.length
        while (cellCount--) {
          // widthMap.unshift($headCells[cellCount].clientWidth + (border ? 0 : 0)) // +1px消去边框对宽度影响
          widthMap.unshift($headCells[cellCount].clientWidth)
        }

        vmTableHead.updateSize(widthMap)
      }
    },
    RCols (row, index) {
      const { TableCols, selectable, select, size, expandable, handleRowSelect, handleRowExpand } = this
      const { Selected, keyField, NoSelect, Expanded } = this.TableStore

      const result = []

      function RContent (item, isSelect = false, isExpand = false) {
        let content = []

        const scopedSlots = item.data.scopedSlots
        const field = item.componentOptions.propsData.field

        if (isSelect) {
          const isSelected = Selected.includes(row[keyField])

          if (select === 'multi') {
            content = (
              <div staticClass="m--center">
                <MCheckbox value={isSelected} size={size}
                  nativeOnClick={(e) => {
                    e.stopPropagation()
                  }}
                  onInput={() => handleRowSelect(row, index)} />
              </div>
            )
          } else {
            content = (
              <div staticClass="m--center">
                <MRadio value={isSelected} size={size}
                  nativeOnClick={(e) => {
                    e.stopPropagation()
                  }}
                  onInput={() => handleRowSelect(row, index)} />
              </div>
            )
          }
        } else if (isExpand) {
          const isExpanded = Expanded.includes(row[keyField])
          content = (
            <div staticClass="m--center"
                 onClick={(e) => {
                    e.stopPropagation()
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

      function RCell (item) {
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

      TableCols.forEach((item) => { result.push(RCell(item)) })

      return result
    },
    RRow (row, index) {
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
    },
    RExpand (row, index) {
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
    },
    RTBody () {
      const { TableStore, RRow, RExpand, expandable } = this
      const result = []

      TableStore.Data.forEach((row, index) => {
        result.push(RRow(row, index))
        if (expandable) {
          result.push(RExpand(row, index))
        }
      })

      return (<tbody>{result}</tbody>)
    }
  },
  updated () {
    this.updateDom()
  },
  mounted () {
    this.updateDom()
    on(window, 'resize', this.onDomUpdate)
  },
  beforeDestroy () {
    off(window, 'resize', this.onDomUpdate)
  },
  render () {
    const { styles, RTBody } = this

    return (
      <div staticClass={_name} style={styles}>
        <table>{RTBody()}</table>
      </div>
    )
  }
})
