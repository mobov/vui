import './core/style/color.scss'
import './core/style/elevation.scss'
import './core/style/space.scss'
import './core/style/shape.scss'
import './core/style/theme.scss'
import './core/style/mode.scss'
import './core/style/utils.scss'
import {
  Component,
  PluginFunction,
  PluginObject,
  PropOptions,
  ComponentOptions,
  FunctionalComponentOptions,
  VueConstructor
} from 'vue'
import * as components from './components'
import * as directives from './directives'
import * as constant from './core/constant'
import './icon/presets'

export type ComponentOrPack = Component & { $_mobov_subcomponents?: Record<string, ComponentOrPack> }

export interface MobovUseOptions {
  components?: Record<string, ComponentOrPack>
  directives?: Record<string, ComponentOrPack>
}

export interface MobovPlugin {
  install: PluginFunction<MobovUseOptions>
  version: string,
  constant: typeof constant
}

export interface MobovObject  {
  install?: (V: any) => void
  name: string
  functional?: true
  props?: any
  data?: any
  computed?: any
  methods?: object
  $slots?: any
  classes?: any
  styles?: any
}

const Mobov: MobovPlugin = {
  install (Vue, opts = {}): void {
    if ((this as any).installed) { return }
    (this as any).installed = true

    // 注册组件
    const componentsList = opts.components || components
    const directivesList = opts.directives || directives
    Object.values(componentsList).forEach(item => {
      Vue.use(item)
    })
    Object.values(directivesList).forEach(item => {
      Vue.use(item)
    })

    // 挂载根组件
    window.Mobov = this
    // console.log(Vue)
    // console.log(this)
  },
  version: '0.2.7',
  constant
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Mobov)
}

export default Mobov
export * from './components'
