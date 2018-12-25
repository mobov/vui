import './list-item.scss'
import MListItem from './list-item'

/* istanbul ignore next */
MListItem.install = (Vue) => {
  Vue.component(MListItem.name, MListItem)
}

export {
  MListItem
}
