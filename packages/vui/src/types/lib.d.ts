import Vue, { Component, PluginFunction, PluginObject, VueConstructor, DirectiveFunction, DirectiveOptions } from 'vue'
import {ComponentOrPack} from "@megmore/vui/types/index";

export interface MegmoreUseOptions {
  components?: Record<string, ComponentOrPack>
}

export interface Megmore {
  install: PluginFunction<MegmoreUseOptions>
  version: string,
  constant: {
    COLORS: any,
    BREAKPOINTS: any
  }
}

declare module '@megmore/vui' {
  const MApp: Component
  const MIcon: Component
  // const Megmore: Component

}
