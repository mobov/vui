import './layout.scss'
import MContainer from './container'
import MRow from './row'
import MCol from './col'
import MFlexFiller from './flex-filler'

/* istanbul ignore next */
MContainer.install = (Vue) => {
  Vue.component(MContainer.name, MContainer)
}
MRow.install = (Vue) => {
  Vue.component(MRow.name, MRow)
}
MCol.install = (Vue) => {
  Vue.component(MCol.name, MCol)
}
MFlexFiller.install = (Vue) => {
  Vue.component(MFlexFiller.name, MFlexFiller)
}

export {
  MContainer,
  MRow,
  MCol,
  MFlexFiller
}
