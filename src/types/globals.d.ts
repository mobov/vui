/* eslint-disable max-len */

import {
  VueConstructor,
  ComponentOptions,
  FunctionalComponentOptions,
  VNodeData, PluginFunction, DirectiveFunction, DirectiveOptions
} from 'vue'
import { CombinedVueInstance, Vue } from 'vue/types/vue'
import {
  RecordPropsDefinition,
  ThisTypedComponentOptionsWithArrayProps,
  ThisTypedComponentOptionsWithRecordProps
} from 'vue/types/options'
// import { TouchStoredHandlers } from './directives/touch'
import { Size, Variety, Shape, Color } from '@/types/model'
import { Megmore } from './index'

declare global {
  interface Window {
    Vue: VueConstructor
    $Megmore: Megmore
  }

  interface HTMLCollection {
    [Symbol.iterator] (): IterableIterator<Element>
  }

  interface Element {
    getElementsByClassName(classNames: string): NodeListOf<HTMLElement>
  }

  interface HTMLElement {
    _clickOutside?: EventListenerOrEventListenerObject
    _onResize?: {
      callback: () => void
      options?: boolean | AddEventListenerOptions
    }
    _onScroll?: {
      callback: EventListenerOrEventListenerObject
      options: boolean | AddEventListenerOptions
      target: EventTarget
    }
    // _touchHandlers?: {
    //   [_uid: number]: TouchStoredHandlers
    // }
  }

  interface Date {
    isLeapYear(): boolean

    maxDayOfMonth(): number

    firstWeekDay(): number

    getZeroize(type: string): string
  }

  interface Number {
    dateZeroize(): string
  }

  function parseInt(s: string | number, radix?: number): number
  function parseFloat(string: string | number): number

  export type Dictionary<T> = Record<string, T>

  export const __VUETIFY_VERSION__: string
  export const __REQUIRED_VUE__: string
}

declare module 'vue/types/vnode' {
  export interface VNodeData {
    model?: {
      callback: (v: any) => void
      expression: string
      value: any
    }
  }
}

// vue插件参数接口拓展
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // default
    staticClass?: string
    class?: string
    style?: ElementCSSInlineStyle
    ref?: string
    // lifecycle
    updated?: (() => void) | undefined
    created?: (() => void) | undefined
    mounted?: (() => void) | undefined
    // events
    onClick?: (e: MouseEvent) => void
    onInput?: (() => void) | undefined
    nativeOnClick?: (() => void) | undefined
    // base
    elevation?: number
    size?: Size
    color?: Color
    shape?: Shape
    variety?: Variety
    value?: any
    // table
    height?: string | number
    border?: boolean
    keyField?: string
    noHeader?: string
    rowSelect?: boolean
    onRowClick?: (() => void) | undefined
    onCheck?: (() => void) | undefined
    updateSize?: (() => void) | undefined
    // timePicker
    max?: any
    min?: any
    firstDayOfWeek?: any
    onPick?: (() => void) | undefined
    onConfirm?: (() => void) | undefined
    onCancel?: (() => void) | undefined
    // checkbox & radio
    label?: boolean | string | number

  }
  interface DirectiveOptions {
    name: string,
    install?: (Vue: VueConstructor) => void
  }
}

declare module 'vue/types/vue' {
  export type OptionsVue<Instance extends Vue, Data, Methods, Computed, Props, Options = {}> = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue,
    Options
  >

  export interface Vue {
    _uid: number
    _isDestroyed: boolean

    /** bindObjectListeners */
     _g (data: VNodeData, value: {}): VNodeData
  }

  interface VueConstructor<
    V extends Vue = Vue,
    Options = Record<string, any>
  > {
    install: PluginFunction<void>
    register: (data: any) => void
    version: string
    /* eslint-disable-next-line camelcase */
    options: Options

    extend<Data, Methods, Computed, Options, PropNames extends string = never> (options?: ThisTypedComponentOptionsWithArrayProps<V, Data, Methods, Computed, PropNames> & Options): OptionsVue<V, Data, Methods, Computed, Record<PropNames, any>, Options>
    extend<Data, Methods, Computed, Props, Options> (options?: ThisTypedComponentOptionsWithRecordProps<V, Data, Methods, Computed, Props> & Options): OptionsVue<V, Data, Methods, Computed, Props, Options>
    extend<Options, PropNames extends string = never> (definition: FunctionalComponentOptions<Record<PropNames, any>, PropNames[]> & Options): OptionsVue<V, {}, {}, {}, Record<PropNames, any>, Options>
    extend<Props, Options> (definition: FunctionalComponentOptions<Props, RecordPropsDefinition<Props>> & Options): OptionsVue<V, {}, {}, {}, Props, Options>
    extend<V extends Vue = Vue> (options?: ComponentOptions<V> & Options): OptionsVue<V, {}, {}, {}, {}, Options>
  }
}
