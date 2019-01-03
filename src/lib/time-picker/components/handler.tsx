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
        const { onConfirm, onCancel } = this

        return (
            <div staticClass={`${_name} m-p-sm`}>
                <MButton size="sm"
                         style={{width: '5rem'}}
                         variety="flat"
                         color="primary"
                         onClick={onCancel}>cancel</MButton>
                <MButton size="sm"
                         style={{width: '5rem'}}
                         color="primary"
                         onClick={onConfirm}>ok</MButton>
            </div>
        )
    }
}
