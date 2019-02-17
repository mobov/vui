import * as tslib_1 from "tslib";
import { Component, Prop, Vue, Inject, Watch } from 'vue-property-decorator';
import MIcon from '../../icon';
import { MTransitionExpansion } from '../../transition';
import MCheckbox from '../../checkbox';
import MRadio from '../../radio';
import { getStyleSize } from '../../core/util';
import { on, off } from '../../core/event';
import { typeSelect } from '../constant';
const compName = 'm-table-body';
let TableBody = class TableBody extends Vue {
    noHeaderToggle(val) { if (!val) {
        this.updateDom();
    } }
    get selectable() {
        return this.select !== typeSelect.none;
    }
    get expandable() {
        return this.expand !== typeSelect.none;
    }
    get styles() {
        const { height } = this;
        return {
            height: height !== 'auto' ? height : false
        };
    }
    handleRowClick(row, index) {
        const { selectable, rowSelect, expandable, rowExpand } = this;
        if (selectable && rowSelect) {
            this.handleRowSelect(row, index);
        }
        if (expandable && rowExpand) {
            this.handleRowExpand(row, index);
        }
    }
    handleRowSelect(row, index) {
        console.log(index);
        this.TableStore.SET_SELECTED(index);
    }
    handleRowExpand(row, index) {
        console.log(index);
        this.TableStore.SET_EXPANDED(index);
    }
    RCols(row, index) {
        const { TableCols, selectable, select, size, expandable, handleRowSelect, handleRowExpand } = this;
        const { Selected, keyField, NoSelect, Expanded } = this.TableStore;
        const result = [];
        function RContent(item, isSelect = false, isExpand = false) {
            let content = [];
            const scopedSlots = item.data.scopedSlots;
            const field = item.componentOptions.propsData.field;
            if (isSelect) {
                const isSelected = Selected.includes(row[keyField]);
                if (select === typeSelect.multi) {
                    content = (<div staticClass="m--center">
              <MCheckbox value={isSelected} size={size} nativeOnClick={(event) => {
                        event.stopPropagation();
                    }} onInput={() => handleRowSelect(row, index)}/>
            </div>);
                }
                else {
                    content = (<div staticClass="m--center">
              <MRadio value={isSelected} size={size} nativeOnClick={(event) => {
                        event.stopPropagation();
                    }} onInput={() => handleRowSelect(row, index)}/>
            </div>);
                }
            }
            else if (isExpand) {
                const isExpanded = Expanded.includes(row[keyField]);
                content = (<div staticClass="m--center" onClick={(event) => {
                    event.stopPropagation();
                    handleRowExpand(row, index);
                }}>
            <transition name="m-transition-scale">
              {isExpanded
                    ? <MIcon name='remove' size={size}/>
                    : <MIcon name='add' size={size}/>}
            </transition>
          </div>);
            }
            else if (scopedSlots) {
                // 自定模板
                content = scopedSlots.default(row);
            }
            else {
                content = row[field];
            }
            return content;
        }
        function RCell(item) {
            const width = getStyleSize(item.componentOptions.propsData.width);
            const styles = {
                width,
                minWidth: width,
                maxWidth: width
            };
            const align = item.componentOptions.align ||
                item.componentOptions.Ctor.options.props.align.default;
            const type = item.componentOptions.propsData.type;
            const isSelect = (type === 'select' && selectable);
            const isExpand = (type === 'expand' && expandable);
            return (<td staticClass={`${compName}__cell`} style={styles} align={align}>
          {RContent(item, isSelect, isExpand)}
        </td>);
        }
        TableCols.forEach((item) => { result.push(RCell(item)); });
        return result;
    }
    RRow(row, index) {
        const { TableStore, RCols, handleRowClick, selectable } = this;
        const { Selected, keyField, NoSelect } = TableStore;
        const classes = !selectable ? {} : {
            'm--selected': Selected.includes(row[keyField]),
            'm--disabled': NoSelect.includes(row[keyField])
        };
        return (<tr staticClass={`${compName}__row`} class={classes} onClick={() => handleRowClick(row, index)}>
        {RCols(row, index)}
      </tr>);
    }
    RExpand(row, index) {
        if (!this.$parent.$scopedSlots.expand) {
            return undefined;
        }
        const { TableStore, TableCols, expandable } = this;
        const { Expanded, keyField } = TableStore;
        if (!expandable) {
            return undefined;
        }
        const isExpanded = Expanded.includes(row[keyField]);
        return (<tr staticClass={`${compName}__expand`}>
        <td colSpan={TableCols.length}>
          <MTransitionExpansion>
            {!isExpanded ? undefined : (<div staticClass={`${compName}__expand-content`}>
                {this.$parent.$scopedSlots.expand(row)}
              </div>)}
          </MTransitionExpansion>
        </td>
      </tr>);
    }
    RTBody() {
        const { TableStore, RRow, RExpand, expandable } = this;
        const result = [];
        TableStore.Data.forEach((row, index) => {
            result.push(RRow(row, index));
            if (expandable) {
                result.push(RExpand(row, index));
            }
        });
        return (<tbody>{result}</tbody>);
    }
    updateDom() {
        const { noHeader } = this;
        const $tableBody = this.$el.querySelector('tbody');
        if (!!$tableBody.children.length && !noHeader) {
            const widthMap = [];
            const $headCells = $tableBody.children[0].children;
            const vmTableHead = this.$parent.$refs.head;
            let cellCount = $headCells.length;
            while (cellCount--) {
                // widthMap.unshift($headCells[cellCount].clientWidth + (border ? 0 : 0)) // +1px消去边框对宽度影响
                widthMap.unshift($headCells[cellCount].clientWidth);
            }
            vmTableHead.updateSize(widthMap);
        }
    }
    mounted() {
        this.updateDom();
        on(window, 'resize', this.updateDom);
    }
    updated() {
        this.updateDom();
    }
    beforeDestroy() {
        off(window, 'resize', this.updateDom);
    }
    render() {
        const { styles, RTBody } = this;
        return (<div staticClass={compName} style={styles}>
        <table>{RTBody()}</table>
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], TableBody.prototype, "height", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean })
], TableBody.prototype, "border", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean })
], TableBody.prototype, "noHeader", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], TableBody.prototype, "size", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean })
], TableBody.prototype, "rowSelect", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean })
], TableBody.prototype, "rowExpand", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], TableBody.prototype, "select", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], TableBody.prototype, "expand", void 0);
tslib_1.__decorate([
    Inject()
], TableBody.prototype, "TableCols", void 0);
tslib_1.__decorate([
    Inject()
], TableBody.prototype, "TableStore", void 0);
tslib_1.__decorate([
    Watch('noHeader')
], TableBody.prototype, "noHeaderToggle", null);
TableBody = tslib_1.__decorate([
    Component({
        components: { MCheckbox, MRadio, MIcon, MTransitionExpansion }
    })
], TableBody);
export default TableBody;
//# sourceMappingURL=body.jsx.map