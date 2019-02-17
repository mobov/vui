import './layout.scss';
import MContainer from './container';
import MRow from './row';
import MCol from './col';
import MFlex from './flex';
import MFlexFiller from './flex-filler';
MContainer.install = (Vue) => {
    Vue.component(MContainer.name, MContainer);
};
MRow.install = (Vue) => {
    Vue.component(MRow.name, MRow);
};
MCol.install = (Vue) => {
    Vue.component(MCol.name, MCol);
};
MFlex.install = (Vue) => {
    Vue.component(MFlex.name, MFlex);
};
MFlexFiller.install = (Vue) => {
    Vue.component(MFlexFiller.name, MFlexFiller);
};
export { MContainer, MRow, MCol, MFlex, MFlexFiller };
//# sourceMappingURL=index.js.map