import * as tslib_1 from "tslib";
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import MIcon from '../../icon';
import MCheckbox from '../../checkbox';
import { getStyleSize } from '../../core/util';
const _name = 'm-table-head';
let TableHead = class TableHead extends Vue {
    constructor() {
        super(...arguments);
        this.widthMap = [];
    }
    updateSize(widthMap) {
        this.widthMap = widthMap;
    }
    handleSelectAll() {
        this.TableStore.SET_SELECTED_ALL();
    }
    RCell(item, index) {
        const { TableStore, select, handleSelectAll, size } = this;
        const { Data, Selected } = TableStore;
        const children = item.componentOptions.children;
        const propsData = item.componentOptions.propsData;
        const propsDefault = item.componentOptions.Ctor.options.props;
        function RContent() {
            let content = null;
            const type = item.componentOptions.propsData.type;
            if (type === 'select' && select === 'multi') {
                const selectedLength = Selected.length;
                const dataLength = Data.length;
                const checkAll = [0, 1];
                const checkVal = selectedLength === 0
                    ? []
                    : dataLength === selectedLength
                        ? [0, 1]
                        : [0];
                content = (<MCheckbox onInput={() => { handleSelectAll(); }} size={size} value={checkVal} label={checkAll}/>);
            }
            else {
                // todo:错误处理
                content = [propsData.title || children];
                if (propsData.sortable !== undefined) {
                    content.push(<MIcon size={14} name={'arrow_upward'}/>);
                }
            }
            return content;
        }
        const width = getStyleSize(this.widthMap[index] ||
            propsData.width ||
            propsDefault.width.default);
        const align = item.componentOptions.align ||
            propsDefault.align.default;
        const styles = { width, minWidth: width, maxWidth: width };
        return (<td staticClass={`${_name}__cell`} style={styles} align={align}>
        {RContent()}
      </td>);
    }
    RHead() {
        const { TableCols, RCell } = this;
        const result = [];
        TableCols.forEach((item, index) => {
            result.push(RCell(item, index));
        });
        return (<tr staticClass={`${_name}__row`}>{result}</tr>);
    }
    RSlotHeadPrepend() {
        const { TableCols } = this;
        const $slotHeadPrepend = this.$parent.$slots['head-prepend'];
        return !$slotHeadPrepend ? undefined : (<tr staticClass={`${_name}__row`}>
        <td colSpan={TableCols.length}>{$slotHeadPrepend}</td>
      </tr>);
    }
    RSlotHeadAppend() {
        const { TableCols } = this;
        const $slotHeadAppend = this.$parent.$slots['head-append'];
        return !$slotHeadAppend ? undefined : (<tr staticClass={`${_name}__row`}>
        <td colSpan={TableCols.length}>{$slotHeadAppend}</td>
      </tr>);
    }
    RSlotHeadExtra() {
        const $slotHeadExtra = this.$parent.$slots['head-extra'];
        return !$slotHeadExtra ? undefined : $slotHeadExtra;
    }
    render() {
        const { RHead, RSlotHeadPrepend, RSlotHeadAppend, RSlotHeadExtra } = this;
        return (<table staticClass={_name}>
        <thead>
          {RSlotHeadPrepend()}
          {RSlotHeadExtra()}
          {RHead()}
          {RSlotHeadAppend()}
        </thead>
      </table>);
    }
};
tslib_1.__decorate([
    Prop({ type: String })
], TableHead.prototype, "size", void 0);
tslib_1.__decorate([
    Prop({ type: String })
], TableHead.prototype, "select", void 0);
tslib_1.__decorate([
    Prop({ type: Boolean, default: false })
], TableHead.prototype, "sortable", void 0);
tslib_1.__decorate([
    Prop({ type: Function })
], TableHead.prototype, "sort", void 0);
tslib_1.__decorate([
    Inject()
], TableHead.prototype, "TableCols", void 0);
tslib_1.__decorate([
    Inject()
], TableHead.prototype, "TableStore", void 0);
TableHead = tslib_1.__decorate([
    Component({ components: { MCheckbox, MIcon } })
], TableHead);
export default TableHead;
//# sourceMappingURL=head.jsx.map