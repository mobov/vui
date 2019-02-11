import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Vue, Provide, Watch } from 'vue-property-decorator';
import { deepCopy } from '@megmore/es-helper';
import TableHead from './components/head';
import TableBody from './components/body';
import { BREAKPOINT } from '../core/constant/constant';
import { genSize } from '../core/style-gen';
const _name = 'm-table';
const selfKeyField = '_table-key';
// const selfSelectField = '_table-select'
// const selfExpandField = '_table-expand'
let MTable = class MTable extends Vue {
    // const selfSelectField = '_table-select'
    // const selfExpandField = '_table-expand'
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
    get classes() {
        const { border, header, hover } = this;
        return {
            [`m-elevation-${this.elevation}`]: true,
            'm--border': border,
            'm--sticky-header': header === 'sticky',
            [`m--${hover}-hover`]: hover !== 'none'
        };
    }
    get styles() {
        const { color, size } = this;
        const styles = {};
        genSize(styles, _name, 'row-size', size);
        return styles;
    }
    // 数据输入适配
    dataAdaptI(val) {
        const { keyField } = this;
        const temp = deepCopy(val);
        if (keyField === selfKeyField) {
            temp.forEach((item, index) => {
                item[keyField] = index;
            });
        }
        return temp;
    }
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
    onExpand(row, index) { }
    onExpandAll(row, index) { }
    onSelect(row, index) { }
    onSelectAll(row, index) { }
    onRowClick(row, index) { }
    onRowDblclick(row, index) { }
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
        const { height, border, header, classes, styles, size, select, expand, rowSelect, rowExpand } = this;
        const noHeader = header === 'none';
        return (<div staticClass={`${_name}`} class={classes} style={styles}>
        <section staticClass={`${_name}__wrapper`}>
          {noHeader ? undefined : (<TableHead ref={'head'} size={size} select={select}/>)}
          <TableBody ref={'body'} size={size} height={height} border={border} select={select} expand={expand} rowSelect={rowSelect} rowExpand={rowExpand} noHeader={noHeader}/>
        </section>
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], MTable.prototype, "color", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 2 })
], MTable.prototype, "elevation", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: BREAKPOINT.md })
], MTable.prototype, "size", void 0);
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
    Prop({ type: String, default: selfKeyField })
], MTable.prototype, "keyField", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'default' })
], MTable.prototype, "header", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'none' })
], MTable.prototype, "hover", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], MTable.prototype, "rowSelect", void 0);
tslib_1.__decorate([
    Prop({ type: String, default: 'none' })
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
    Prop({ type: String, default: 'single' })
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
    Provide()
], MTable.prototype, "TableStore", void 0);
tslib_1.__decorate([
    Provide()
], MTable.prototype, "TableCols", null);
MTable = tslib_1.__decorate([
    Component({ components: { TableHead, TableBody } })
], MTable);
export default MTable;
//# sourceMappingURL=table.jsx.map