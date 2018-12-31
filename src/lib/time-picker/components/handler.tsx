/**
 * 时间选择器底部
 */
import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
import { Color } from '@/types/model'
import MButton from "@/lib/button"

const _name = 'm-time-picker-handler'

@Component({ components: { MButton }})
export default class MTimePickerHandler extends Vue {
    @Prop({ type: String, default: 'primary' })
    private color!: Color

    @Emit('confirm')
    onConfirm (): void { }

    @Emit('cancel')
    onCancel (): void { }

    render () {
        const { classes, onConfirm, onCancel } = this

        return (
            <div staticClass={`${_name} m--p-sm`}>
                <MButton class="m--m-0 m--p-0"
                         size="md"
                         variety="flat"
                         color="primary"
                         onClick={onCancel}>cancel</MButton>
                <MButton class="m--m-0 m--p-0"
                         size="md"
                         variety="flat"
                         color="primary"
                         onClick={onConfirm}>ok</MButton>
            </div>
        )
    }
}
