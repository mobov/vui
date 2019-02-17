/**
 * 时间选择器底部
 */
import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
import { Color, color, Variety, variety } from '../../core/constant'
import MButton from '../../button'

const compName = 'm-time-picker-handler'

@Component({ components: { MButton } })
export default class MTimePickerHandler extends Vue {
    @Prop({ type: String, default: Color.primary })
    color!: color

    @Emit('confirm')
    onConfirm (): void { }

    @Emit('cancel')
    onCancel (): void { }

    render () {
        const { onConfirm, onCancel } = this

        return (
            <div staticClass={`${compName} m-p-sm`}>
                <MButton size="sm"
                         style={{ width: '5rem' }}
                         variety={Variety.flat}
                         color={Color.primary}
                         onClick={onCancel}>cancel</MButton>
                <MButton size="sm"
                         style={{ width: '5rem' }}
                         color={Color.primary}
                         onClick={onConfirm}>ok</MButton>
            </div>
        )
    }
}
