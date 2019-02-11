import './table.scss'
import MTable from './table'
import MTableCol from './table-col'

MTable.install = (Vue) => {
    Vue.component(MTable.name, MTable)
}
MTableCol.install = (Vue) => {
    Vue.component(MTableCol.name, MTableCol)
}

export {
  MTable,
  MTableCol
}
