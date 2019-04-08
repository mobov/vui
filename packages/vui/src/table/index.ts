import'./table.scss'
import MTable from './table'
import MTableCol from './table-col'

/* istanbul ignore next */
MTable.install = (Vue) => {
    Vue.component('MTable', MTable)
}
MTableCol.install = (Vue) => {
    Vue.component('MTableCol', MTableCol)
}

export {
  MTable,
  MTableCol
}
