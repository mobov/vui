/**
 * 时间选择器底部
 */
import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
import { Color, color, Variety, variety } from '../../core/constants'
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
        const { onConfirm, onCancel, color } = this

        return (
            <div staticClass={`${compName} m-p-sm`}>
                <MButton size="32px"
                         minWidth="75px"
                         variety={Variety.flat}
                         color={Color.default}
                         onClick={onCancel}>cancel</MButton>
                <MButton size="32px"
                         minWidth="75px"
                         color={color}
                         onClick={onConfirm}>ok</MButton>
            </div>
        )
    }
}
