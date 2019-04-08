import './list.scss'
import MList from './list'

/* istanbul ignore next */
MList.install = (Vue) => {
  Vue.component('MList', MList)
}

export {
  MList
}
