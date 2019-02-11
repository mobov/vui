import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Mixins, Provide, Watch } from 'vue-property-decorator';
import { deepCopy } from '@megmore/es-helper';
import Table from './table.style';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import TableHead from './components/head';
import TableBody from './components/body';
const _name = 'm-table';
const SELF_KEY = '_table-key';
let MTable = class MTable extends Mixins(sizeable, elevated) {
    constructor() {
        super(...arguments);
        this.TableStore = {
            Data: [],
            keyField: this.keyField,
            Selected: [],
            NoSelect: this.noSelect,
            Expanded: [],
            SET_DATA(field, value, index = -1) {
                const { Data } = this;
                if (index === -1) {
                    Data.forEach((row) => {
                        if (row[field] !== undefined) {
                            row[field] = value;
                        }
                        else {
                            this.$set(row, field, value);
                        }
                    });
                }
                else {
                    if (Data[index][field] !== undefined) {
                        Data[index][field] = value;
                    }
                    else {
                        console.log(field, value, index);
                        // this.$set(Data[index], field, value)
                    }
                }
            },
            SET_SELECTED: (index) => {
                const { select } = this;
                const { Data, Selected, keyField } = this.TableStore;
                const keyValue = Data[index][keyField];
                const targetIndex = Selected.indexOf(keyValue);
                if (targetIndex === -1) {
                    if (select === 'multi') {
                        // multi
                        this.TableStore.Selected.push(keyValue);
                    }
                    else {
                        // single
                        this.TableStore.Selected = [keyValue];
                    }
                }
                else {
                    this.TableStore.Selected.splice(targetIndex, 1);
                }
                this.syncSelected(this.TableStore.Selected);
            },
            SET_SELECTED_ALL: () => {
                const { Data, Selected, keyField } = this.TableStore;
                if (Selected.length === 0) {
                    this.TableStore.Selected = Data.map((row) => row[keyField]);
                }
                else {
                    this.TableStore.Selected = [];
                }
                this.syncSelected(this.TableStore.Selected);
            },
            SET_EXPANDED: (index) => {
                console.log(index);
                const { expand } = this;
                const { Data, keyField } = this.TableStore;
                const keyValue = Data[index][keyField];
                const targetIndex = this.TableStore.Expanded.indexOf(keyValue);
                if (targetIndex === -1) {
                    if (expand === 'multi') {
                        // multi
                        this.TableStore.Expanded.push(keyValue);
                    }
                    else {
                        // single
                        this.TableStore.Expanded = [keyValue];
                    }
                }
                else {
                    this.TableStore.Expanded.splice(targetIndex, 1);
                }
                this.syncExpanded(this.TableStore.Expanded);
            }
        };
    }
    // 数据输入适配
    dataAdaptI(val = []) {
        const { keyField } = this;
        const temp = deepCopy(val);
        if (keyField === SELF_KEY) {
            temp.forEach((item, index) => {
                item[keyField] = index;
            });
        }
        return temp;
    }
    onExpand(row, index) { }
    onExpandAll(row, index) { }
    onSelect(row, index) { }
    onSelectAll(row, index) { }
    onRowClick(row, index) { }
    onRowDblclick(row, index) { }
    handleDataUpdate(val) {
        this.TableStore.Data = this.dataAdaptI(val);
    }
    handleSelectedUpdate(val) {
        this.TableStore.Selected = deepCopy(val);
    }
    handleExpandedUpdate(val) {
        this.TableStore.Expanded = deepCopy(val);
    }
    syncSelected(data) { }
    syncExpanded(data) { }
    get TableCols() {
        const { $slots } = this;
        const result = [];
        if ($slots.default) {
            // 声明渲染
            $slots.default.forEach((item) => {
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
                result.push(item);
            });
        }
        return result;
    }
    render() {
        const { height, border, header, size, elevation, select, expand, rowSelect, rowExpand } = this;
        const noHeader = header === 'none';
        return (<Table staticClass={`${_name}`} size={size} elevation={elevation}>
        <section staticClass={`${_name}__wrapper`}>
          {noHeader ? undefined : (<TableHead ref={'head'} size={size} select={select}/>)}
          <TableBody ref={'body'} size={size} height={height} border={border} select={select} expand={expand} rowSelect={rowSelect} rowExpand={rowExpand} noHeader={noHeader}/>
        </section>
      </Table>);
    }
};
tslib_1.__decorate([
    Prop({ type: [String, Number] })
], MTable.prototype, "height", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MTable.prototype, "border", void 0);
tslib_1.__decorate([
    Prop({ type: Array, default: () => [] })
], MTable.prototype, "data", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: SELF_KEY })
], MTable.prototype, "keyField", void 0);
tslib_1.__decorate([
    Prop({
        type: String,
        default: 'default',
        validator(value) {
            return ['default', 'sticky', 'none'].includes(value);
        }
    })
], MTable.prototype, "header", void 0);
tslib_1.__decorate([
    Prop({
        type: String,
        default: 'none',
        validator(value) {
            return ['none', 'row', 'cell'].includes(value);
        }
    })
], MTable.prototype, "hover", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MTable.prototype, "rowSelect", void 0);
tslib_1.__decorate([
    Prop({
        type: String,
        default: 'none',
        validator(value) {
            return ['none', 'single', 'multi'].includes(value);
        }
    })
], MTable.prototype, "select", void 0);
tslib_1.__decorate([
    Prop({ type: [Array, String, Number], default: () => [] })
], MTable.prototype, "selected", void 0);
tslib_1.__decorate([
    Prop({ type: Array, default: () => [] })
], MTable.prototype, "noSelect", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MTable.prototype, "rowExpand", void 0);
tslib_1.__decorate([
    Prop({
        type: String,
        default: 'none',
        validator(value) {
            return ['none', 'single', 'multi'].includes(value);
        }
    })
], MTable.prototype, "expand", void 0);
tslib_1.__decorate([
    Prop({ type: [Array, String, Number], default: () => [] })
], MTable.prototype, "expanded", void 0);
tslib_1.__decorate([
    Prop({ type: Array, default: () => [] })
], MTable.prototype, "noExpand", void 0);
tslib_1.__decorate([
    Prop({ type: Function })
], MTable.prototype, "filter", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'single' })
], MTable.prototype, "filterMulti", void 0);
tslib_1.__decorate([
    Emit('expand')
], MTable.prototype, "onExpand", null);
tslib_1.__decorate([
    Emit('expandAll')
], MTable.prototype, "onExpandAll", null);
tslib_1.__decorate([
    Emit('select')
], MTable.prototype, "onSelect", null);
tslib_1.__decorate([
    Emit('selectAll')
], MTable.prototype, "onSelectAll", null);
tslib_1.__decorate([
    Emit('rowClick')
], MTable.prototype, "onRowClick", null);
tslib_1.__decorate([
    Emit('rowDblclick')
], MTable.prototype, "onRowDblclick", null);
tslib_1.__decorate([
    Watch('data', { immediate: true, deep: true })
], MTable.prototype, "handleDataUpdate", null);
tslib_1.__decorate([
    Watch('selected', { immediate: true })
], MTable.prototype, "handleSelectedUpdate", null);
tslib_1.__decorate([
    Watch('expanded', { immediate: true })
], MTable.prototype, "handleExpandedUpdate", null);
tslib_1.__decorate([
    Emit('update:selected')
], MTable.prototype, "syncSelected", null);
tslib_1.__decorate([
    Emit('update:expanded')
], MTable.prototype, "syncExpanded", null);
tslib_1.__decorate([
    Provide()
], MTable.prototype, "TableStore", void 0);
tslib_1.__decorate([
    Provide()
], MTable.prototype, "TableCols", null);
MTable = tslib_1.__decorate([
    Component({ components: { Table, TableHead, TableBody } })
], MTable);
export default MTable;
//# sourceMappingURL=table.jsx.map