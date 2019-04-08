import './app.scss'
import MApp from './app'

/* istanbul ignore next */
MApp.install = (Vue) => {
  Vue.component('MApp', MApp)
}

export default MApp
