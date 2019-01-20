// vue插件参数接口拓展
import { Vue, VueConstructor } from 'vue/types/vue'
import { Color, Shape, Size, Variety } from '../types/model'
import { Prop } from 'vue-property-decorator'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // default
    staticClass?: string
    class?: string
    style?: ElementCSSInlineStyle | any
    ref?: string
    // lifecycle
    updated?: () => void
    created?: () => void
    mounted?: () => void
    // events
    onClick?: (e: MouseEvent) => void
    onInput?: () => void
    nativeOnClick?: (e: MouseEvent) => void
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
    header?: string
    rowSelect?: boolean
    onRowClick?: () => void
    onCheck?: () => void
    updateSize?: () => void
    // data?: any
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
