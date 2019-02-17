// 1. 确保在声明补充的类型之前导入 'vue'
import Vue, { VueConstructor } from 'vue'
import { variety, size, color, shape, elevation } from '@megmore/vui/core/constant'
declare module 'vue/types/options' {

  interface ComponentOptions<V extends Vue> {
    // base
    staticClass?: string
    class?: string
    style?: ElementCSSInlineStyle | any
    ref?: string
    // lifecycle
    updated?: () => void
    created?: () => void
    mounted?: () => void
    // events
    onClick?: (e: MouseEvent | TouchEvent) => void
    onInput?: () => void
    nativeOnClick?: (e: MouseEvent | TouchEvent) => void
    // base
    elevation?: elevation
    fontColor?: color
    color?: color
    size?: size | string | number
    shape?: shape
    variety?: variety
    value?: any
    // table
    height?: string | number
    border?: boolean
    keyField?: string
    header?: string
    rowSelect?: boolean
    onRowClick?: () => void
    onCheck?: () => void
    updateSize?: () => void
    hover?: 'none' | 'row' | 'cell'
    select?: 'none' | 'single' | 'multi'
    selected?: any | string | number
    noSelect?: any
    rowExpand?: boolean
    expand?: 'none' | 'single' | 'multi'
    expanded?: any | string | number
    filter?: () => boolean
    filterMulti?: string
    noHeader?: boolean
    // timePicker
    max?: any
    min?: any
    firstDayOfWeek?: any
    onPick?: () => void
    onConfirm?: () => void
    onCancel?: () => void
    // checkbox & radio
    label?: boolean | string | number
    // button
    icon?: string
    block?: boolean
  }
  interface DirectiveOptions {
    name: string,
    install?: (Vue: VueConstructor) => void
  }
}

declare module 'vue/types/vue' {
  export interface RawComponentOptions<
    V extends Vue = Vue,
    Data = {} | undefined,
    Methods = {} | undefined,
    Computed = {} | undefined,
    Props = {} | undefined
    > {
    name?: string
    install?: (Vue: VueConstructor) => void
    data: Data
    methods: Methods
    computed: {
      [C in keyof Computed]: (this: V) => Computed[C]
    }
    props: Props
  }

  export interface VueConstructor<
    V extends Vue = Vue,
    Options = Record<string, any>
    > {
    version: string
    install?: (Vue: VueConstructor) => void
    options: Options
  }
}

