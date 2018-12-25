import './side-menu.scss'
import MSideMenu from './side-menu'

/* istanbul ignore next */
MSideMenu.install = (Vue) => {
  Vue.component(MSideMenu.name, MSideMenu)
}

export default MSideMenu
