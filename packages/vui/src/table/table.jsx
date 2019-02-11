import Vue from 'vue'
import { BREAKPOINT, COLOR } from '../core/constant'
import { deepCopy } from '@megmore/es-helper'
import { genColor, genSize } from '../core/style-gen'
import TableHead from './components/head'
import TableBody from './components/body'

const _name = 'm-table'
const SELF_KEY_FIELD = '_table-key'

// 数据输入适配
function dataAdaptI (val, keyField) {
  const temp = deepCopy(val)
  if (keyField === SELF_KEY_FIELD) {
    temp.forEach((item, index) => {
        item[keyField] = index
    })
  }

  return temp
}

export default Vue.extend({
  name: 'MTable',
  components: { TableHead, TableBody },
  props: {
    color: {
      type: String,
      default: COLOR.primary
    },
    elevation: {
      type: Number,
      default: 2
    },
    size: {
      type: String,
      default: BREAKPOINT.md
    },
    height: {
      type: [String, Number]
    },
    border: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    keyField: {
      type: String,
      default: SELF_KEY_FIELD
    },
    header: {
      type: String,
      default: 'default',
      validator (val) {
        return ['default', 'sticky', 'none'].includes(val)
      }
    },
    hover: {
      type: String,
      default: 'none',
      validator (val) {
        return ['none', 'row', 'cell'].includes(val)
      }
    },
    select: {
      type: String,
      default: 'none',
      validator (val) {
        return ['none', 'single', 'multi'].includes(val)
      }
    },
    rowSelect: {
      type: Boolean,
      default: false
    },
    selected: {
      type: [Array, String, Number],
      default: () => []
    },
    noSelect: {
      type: [Array, String, Number],
      default: () => []
    },
    rowExpand: {
      type: Boolean,
      default: false
    },
    expand: {
      type: String,
      default: 'single',
      validator (val) {
        return ['none', 'single', 'multi'].includes(val)
      }
    },
    expanded: {
      type: [Array, String, Number],
      default: () => []
    },
    noExpand: {
      type: [Array, String, Number],
      default: () => []
    },
    filter: {
      type: Function
    },
    filterMulti: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const { border, header, hover, elevation } = this

      return {
        [`m-elevation-${elevation}`]: true,
        'm--border': border,
        'm--sticky-header': header === 'sticky',
        [`m--${hover}-hover`]: hover !== 'none'
      }
    },
    styles () {
      const { color, size } = this
      const styles = { }

      genSize(styles, _name, 'row-size', size)

      return styles
    }
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler (val) {
        this.TableStore.Data = dataAdaptI(val)
      }
    },
    selected: {
      immediate: true,
      handler (val) {
        this.TableStore.Selected = deepCopy(val)
      }
    },
    expanded: {
      immediate: true,
      handler (val) {
        this.TableStore.Expanded = deepCopy(val)
      }
    }
  },
  methods: {
    onExpand (row, index) {
      this.$emit('expand', [row, index])
    },
    onExpandAll (row, index) {
      this.$emit('expandAll', [row, index])
    },
    onSelect (row, index) {
      this.$emit('select', [row, index])
    },
    onSelectAll (row, index) {
      this.$emit('selectAll', [row, index])
    },
    onRowClick (row, index) {
      this.$emit('rowClick', [row, index])
    },
    onRowDblclick (row, index) {
      this.$emit('rowDblclick', [row, index])
    },
    syncSelected (data) {
      this.$emit('update:selected', data)
    },
    syncExpanded (data) {
      this.$emit('update:expanded', data)
    }
  },
  provide () {
    return {
      TableStore: {
        Data: [],
        keyField: this.keyField,
        Selected: [],
        NoSelect: this.noSelect,
        Expanded: [],
        SET_DATA (field, value, index = -1) {
          const { Data } = this

          if (index === -1) {
            Data.forEach(row => {
              if (row[field] !== undefined) {
                row[field] = value
              } else {
                this.$set(row, field, value)
              }
            })
          } else {
            if (Data[index][field] !== undefined) {
              Data[index][field] = value
            } else {
              console.log(field, value, index)
              // this.$set(Data[index], field, value)
            }
          }
        },
        SET_SELECTED: (index) => {
          const { select } = this
          const { Data, Selected, keyField } = this.TableStore
          const keyValue = Data[index][keyField]
          const targetIndex = Selected.indexOf(keyValue)

          if (targetIndex === -1) {
            if (select === 'multi') {
              // multi
              this.TableStore.Selected.push(keyValue)
            } else {
              // single
              this.TableStore.Selected = [keyValue]
            }
          } else {
            this.TableStore.Selected.splice(targetIndex, 1)
          }
          this.syncSelected(this.TableStore.Selected)
        },
        SET_SELECTED_ALL: () => {
          const { Data, Selected, keyField } = this.TableStore
          if (Selected.length === 0) {
            this.TableStore.Selected = Data.map(row => row[keyField])
          } else {
            this.TableStore.Selected = []
          }
          this.syncSelected(this.TableStore.Selected)
        },
        SET_EXPANDED: (index) => {
          console.log(index)
          const { expand } = this
          const { Data, keyField } = this.TableStore
          const keyValue = Data[index][keyField]
          const targetIndex = this.TableStore.Expanded.indexOf(keyValue)

          if (targetIndex === -1) {
            if (expand === 'multi') {
              // multi
              this.TableStore.Expanded.push(keyValue)
            } else {
              // single
              this.TableStore.Expanded = [keyValue]
            }
          } else {
            this.TableStore.Expanded.splice(targetIndex, 1)
          }
          this.syncExpanded(this.TableStore.Expanded)
        }
      },
      get TableCols () {
        const { $slots } = this
        const result = []
        if ($slots.default) {
          // 声明渲染
          $slots.default.forEach(item => {
            // 多级表头处理
            // const $children = item.componentOptions.children
            // if (
            //     $children
            //     && $children.length > 1
            //     && $children[0].componentOptions.tag === tableColTagName
            // ) {
            //     console.log(item.componentOptions.children[0].componentOptions.tag)
            //     console.log(tableColTagName)
            // }
            result.push(item)
          })
        }

        return result
      }
    }
  },
  render () {
    const { height, border, header, classes, styles, size,
            select, expand, rowSelect, rowExpand } = this
    const noHeader = header === 'none'

    return (
      <div staticClass={`${_name}`} class={classes} style={styles}>
        <section staticClass={`${_name}__wrapper`}>
          {noHeader ? undefined : (
            <TableHead ref={'head'}
                       size={size}
                       select={select}/>
          )}
          <TableBody ref={'body'}
                     size={size}
                     height={height}
                     border={border}
                     select={select}
                     expand={expand}
                     rowSelect={rowSelect}
                     rowExpand={rowExpand}
                     noHeader={noHeader} />
        </section>
      </div>
    )
  }
})
