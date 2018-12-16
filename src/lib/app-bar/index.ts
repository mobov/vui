import './app-bar.scss'
import MAppBar from './app-bar'

/* istanbul ignore next */
MAppBar.install = (Vue) => {
  Vue.component(MAppBar.name, MAppBar)
}

export default MAppBar
