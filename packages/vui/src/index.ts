import './core/common/color.scss'
import './core/common/elevation.scss'
import './core/common/space.scss'
import './core/common/shape.scss'
import './core/common/theme.scss'
import './core/common/mode.scss'
import './core/common/flex.scss'
import './core/common/utils.scss'
import * as components from './entries'
import * as constant from './core/constant'
import './icon/presets'
import { Megmore as MegmorePlugin, MegmoreUseOptions } from './types'
import {Component, PluginFunction} from "vue";

export type ComponentOrPack = Component & { $_megmore_subcomponents?: Record<string, ComponentOrPack> }

export interface MegmoreUseOptions {
  components?: Record<string, ComponentOrPack>
}

export interface MegmorePlugin {
  install: PluginFunction<MegmoreUseOptions>
  version: string,
  constant: {
    COLORS: any,
    BREAKPOINTS: any
  }
}

const Megmore: MegmorePlugin = {
  install (Vue, opts = {}): void {
    if ((this as any).installed) { return }
    (this as any).installed = true

    // 注册组件
    const componentsList = opts.components || components
    console.log(componentsList)
    Object.values(componentsList).forEach(component => {
      console.log(component)
      Vue.use(component)
    })
    // const $Megmore = {
    //   cons
    // }
    // 挂载根组件
    window.Megmore = this
    // console.log(Vue)
    // console.log(this)
  },
  version: '1.0.0',
  constant
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Megmore)
}

export default Megmore
export * from './entries'
