import Vue from 'vue'
import { BREAKPOINT, COLOR } from '../core/constant'

export default Vue.extend({
  name: 'MTableCol',
  props: {
    color: {
      type: String,
      default: COLOR.primary
    },
    type: {
      type: String,
      default: BREAKPOINT.md,
      validator (val) {
        return ['select', 'expand'].includes(val)
      }
    },
    title: {
      type: String
    },
    width: {
      type: [ String, Number ],
      default: 'auto'
    },
    field: {
      type: String
    },
    align: {
      type: String,
      default: 'center',
      validator (val) {
        return ['start', 'center', 'end'].includes(val)
      }
    },
    sort: {
      type: Function
    },
    sortable: {
      type: Boolean,
      default: false
    }
  }
})
