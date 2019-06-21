import './list.scss'
import MList from './list'
import MListItem from './item'

/* istanbul ignore next */
MList.install = (Vue) => {
  Vue.component('MList', MList)
}

/* istanbul ignore next */
MListItem.install = (Vue) => {
  Vue.component('MListItem', MListItem)
}

export {
  MList,
  MListItem
}
