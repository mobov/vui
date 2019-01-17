import './layout.scss'
import MContainer from './container'
import MRow from './row'
import MCol from './col'
import MFiller from './filler'

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
MFiller.install = (Vue) => {
  Vue.component(MFiller.name, MFiller)
}

export {
  MContainer,
  MRow,
  MCol,
  MFiller
}
