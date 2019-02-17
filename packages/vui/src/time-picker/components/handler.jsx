import Vue from 'vue'
import MButton from '../../button'

const _name = 'm-time-picker-handler'

export default Vue.extend({
  name: 'MTimePickerHandler',
  components: { MButton },
  props: {
    color: {
      type: String
    }
  },
  methods: {
    onConfirm () {
      this.$emit('confirm')
    },
    onCancel () {
      this.$emit('cancel')
    }
  },
  render () {
    const { onConfirm, onCancel, color } = this

    return (
        <div staticClass={`${_name} m-p-sm`}>
            <MButton size="sm"
                     style={{ width: '5rem' }}
                     variety="flat"
                     color={color}
                     onClick={onCancel}>cancel</MButton>
            <MButton size="sm"
                     style={{ width: '5rem' }}
                     color={color}
                     onClick={onConfirm}>ok</MButton>
        </div>
    )
}
})
