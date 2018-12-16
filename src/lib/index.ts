import './core/common/color.scss'
import './core/common/elevation.scss'
import './core/common/space.scss'
import './core/common/shape.scss'
import './core/common/theme.scss'
import * as components from './components'
import { VueConstructor } from 'vue'
import { Megmore as MegmorePlugin, MegmoreUseOptions } from '@/typings'

const Megmore: MegmorePlugin = {
  install (Vue, opts = {}): void {
    // if ((this as any).installed) { return }
    // (this as any).installed = true

    // 注册组件
    const componentsList = opts.components || components
    Object.values(componentsList).forEach((component: any) => {
      Vue.use(component)
    })
  },
  version: '1.0.0'
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Megmore)
}

export default Megmore
