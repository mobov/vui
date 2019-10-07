import { Component, Prop, Vue } from 'vue-property-decorator'
import { size, Color, color, Align, align } from '../core/constants'

export const compName = 'm-table-col'

@Component
export default class MTableCol extends Vue {
    @Prop({ type: String, default: 'normal'})
    type?: 'normal' | 'select' | 'expand'

    @Prop({ type: String })
    title?: string

    @Prop({ type: [ String, Number ], default: 'auto' })
    width?: size

    @Prop({ type: String })
    field?: string

    @Prop({ type: String, default: Align.center })
    align?: align

    @Prop({ type: String, default: Color.primary })
    color?: color

    @Prop({ type: Function })
    sort?: () => boolean

    @Prop({ type: Boolean, default: false })
    sortable?: boolean
}
