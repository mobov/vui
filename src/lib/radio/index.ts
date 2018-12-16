import './radio.scss'
import MRadio from './radio'

/* istanbul ignore next */
MRadio.install = function install(Vue) {
    Vue.component(MRadio.name, MRadio)
}

export default MRadio
