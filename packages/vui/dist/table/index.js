import MTable from './table';
import MTableCol from './table-col';
/* istanbul ignore next */
MTable.install = (Vue) => {
    Vue.component(MTable.name, MTable);
};
MTableCol.install = (Vue) => {
    Vue.component(MTableCol.name, MTableCol);
};
export { MTable, MTableCol };
//# sourceMappingURL=index.js.map