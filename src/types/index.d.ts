import Vue, { Component, PluginFunction, PluginObject, VueConstructor, DirectiveFunction, DirectiveOptions } from 'vue'

export interface Megmore {
  install: PluginFunction<MegmoreUseOptions>
  version: string
}

export type ComponentOrPack = Component & { $_megmore_subcomponents?: Record<string, ComponentOrPack> }

export interface MegmoreUseOptions {
  components?: Record<string, ComponentOrPack>
}
