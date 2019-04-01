import { Component, Prop, Emit, Mixins, Provide, Watch } from 'vue-property-decorator'
import { deepCopy } from '@mobov/es-helper'
import sizeable from '../core/mixin/sizeable'
import elevated from '../core/mixin/elevated'
import TableHead from './components/head'
import TableBody from './components/body'
import { typeHeader,  typeHover, typeSelect }  from './constant'

const compName = 'm-table'
const SELF_KEY = '_table-key'

@Component({
  components: { TableHead, TableBody }
})
export default class MTable extends Mixins (
  sizeable,
  elevated
) {
  @Prop({ type: [String, Number] })
  height?: string | number

  @Prop({ type: Boolean, default: false })
  border?: boolean

  @Prop({ type: Array, default: () => [] })
  data!: any[]

  @Prop({ type: String, default: SELF_KEY })
  keyField?: string

  @Prop({
    type: String,
    default: typeHeader.normal,
    validator(value): boolean {
      return typeHeader.hasOwnProperty(value)
    }
  })
  header?: typeHeader

  @Prop({
    type: String,
    default: typeHover.none,
    validator(value): boolean {
      return typeHover.hasOwnProperty(value)
    }
  })
  hover?: typeHover

  @Prop({ type: Boolean, default: false })
  rowSelect?: boolean

  @Prop({
    type: String,
    default: typeSelect.none,
    validator(value): boolean {
      return typeSelect.hasOwnProperty(value)
    }
  })
  select?: typeSelect

  @Prop({ type: [Array, String, Number], default: () => [] })
  selected?: any

  @Prop({ type: Array, default: () => [] })
  noSelect?: any

  @Prop({ type: Boolean, default: false })
  rowExpand?: boolean

  @Prop({
    type: String,
    default: typeSelect.none,
    validator(value): boolean {
      return typeSelect.hasOwnProperty(value)
    }
  })
  expand?: typeSelect

  @Prop({ type: [Array, String, Number], default: () => [] })
  expanded?: any

  @Prop({ type: Array, default: () => [] })
  noExpand?: any

  @Prop({ type: Function })
  filter?: () => boolean

  @Emit('expand')
  onExpand (row: any, index: number): void {}

  @Emit('expandAll')
  onExpandAll (row: any, index: number): void {}

  @Emit('select')
  onSelect (row: any, index: number): void {}

  @Emit('selectAll')
  onSelectAll (row: any, index: number): void {}

  @Emit('rowClick')
  onRowClick (row: any, index: number): void {}

  @Emit('rowDblclick')
  onRowDblclick (row: any, index: number): void {}

  @Watch('data', { immediate: true, deep: true })
  handleDataUpdate (val: any[]): void {
    this.TableStore.Data = this.dataAdaptI(val)
  }

  @Watch('selected', { immediate: true })
  handleSelectedUpdate (val: any): void {
    this.TableStore.Selected = deepCopy(val)
  }

  @Watch('expanded', { immediate: true })
  handleExpandedUpdate (val: any): void {
    this.TableStore.Expanded = deepCopy(val)
  }

  @Emit('update:selected')
  syncSelected (data: any): void {}

  @Emit('update:expanded')
  syncExpanded (data: any): void {}

  @Provide()
  TableStore: any = {
    Data: [],
    keyField: this.keyField,
    Selected: [],
    NoSelect: this.noSelect,
    Expanded: [],
    SET_DATA (field: string, value: any, index: number = -1): void {
      const { Data } = this

      if (index === -1) {
        Data.forEach((row: any) => {
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
    SET_SELECTED: (index: number): void => {
      const { select } = this
      const { Data, Selected, keyField } = this.TableStore
      const keyValue = Data[index][keyField]
      const targetIndex = Selected.indexOf(keyValue)

      if (targetIndex === -1) {
        if (select === typeSelect.multi) {
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
    SET_SELECTED_ALL: (): void => {
      const { Data, Selected, keyField } = this.TableStore
      if (Selected.length === 0) {
        this.TableStore.Selected = Data.map((row: any) => row[keyField])
      } else {
        this.TableStore.Selected = []
      }
      this.syncSelected(this.TableStore.Selected)
    },
    SET_EXPANDED: (index: number): void => {
      console.log(index)
      const { expand } = this
      const { Data, keyField } = this.TableStore
      const keyValue = Data[index][keyField]
      const targetIndex = this.TableStore.Expanded.indexOf(keyValue)

      if (targetIndex === -1) {
        if (expand === typeSelect.multi) {
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
  }

  @Provide()
  get TableCols (): any[] {
    const { $slots } = this
    const result: any = []
    if ($slots.default) {
      // 声明渲染
      $slots.default.forEach((item: any) => {
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

  // 数据输入适配
  dataAdaptI (val: any[] = []): any[] {
    const { keyField } = this
    const temp = deepCopy(val)
    if (keyField === SELF_KEY) {
      temp.forEach((item: any, index: number) => {
        item[keyField] = index
      })
    }

    return temp
  }

  render () {
    const { height, border, header, size, elevation, select, expand, rowSelect, rowExpand } = this
    const noHeader = header === typeHeader.none

    return (
      <div staticClass={compName}
             size={size}
             elevation={elevation}>
        <section staticClass={`${compName}__wrapper`}>
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
}
