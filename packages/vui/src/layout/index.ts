import './layout.scss'
import MContainer from './container'
import MRow from './row'
import MCol from './col'
import MFlex from './flex'
import MFlexFiller from './flex-filler'

MContainer.install = (Vue) => {
  Vue.component('MContainer', MContainer)
}
MRow.install = (Vue) => {
  Vue.component('MRow', MRow)
}
MCol.install = (Vue) => {
  Vue.component('MCol', MCol)
}
MFlex.install = (Vue) => {
  Vue.component('MFlex', MFlex)
}
MFlexFiller.install = (Vue) => {
  Vue.component('MFlexFiller', MFlexFiller)
}

export {
  MContainer,
  MRow,
  MCol,
  MFlex,
  MFlexFiller
}
