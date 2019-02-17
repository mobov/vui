import Vue from 'vue'
import { PropsPropertries } from '@/global'

export default Vue.extend({
  computed: {
    PropsData () {
      const { Props } = this as any
      const result: any = {}
      Props.forEach((item: PropsPropertries) => {
        result[item.name] = item.default
      })
      return result
    }
  }
})
