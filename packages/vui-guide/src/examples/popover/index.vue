<style lang='scss' scoped>

</style>
<template>
  <example-box>
    <m-popover content="测试速度速度" trigger="hover"  :elevation="0" placement="bottom">
      <m-avatar marginY="20px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550424956192&di=7bdf1a537fd883b58e87d14756b35404&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201603%2F06%2F20160306180327_ErTJm.jpeg"></m-avatar>
    </m-popover>
    <m-popover content="测试速度速度" :elevation="0" placement="bottom">
      <m-avatar marginY="20px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550424956192&di=7bdf1a537fd883b58e87d14756b35404&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201603%2F06%2F20160306180327_ErTJm.jpeg"></m-avatar>
    </m-popover>
    <m-popover :elevation="0" trigger="toggle" placement="top">
      <div slot="content">
        <m-avatar marginY="20px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550424956192&di=7bdf1a537fd883b58e87d14756b35404&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201603%2F06%2F20160306180327_ErTJm.jpeg"></m-avatar>
      </div>
      <m-avatar marginY="20px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550424956192&di=7bdf1a537fd883b58e87d14756b35404&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201603%2F06%2F20160306180327_ErTJm.jpeg"></m-avatar>
    </m-popover>
    <m-popover :elevation="0" :padding="0" trigger="toggle" placement="top">
      <m-time-picker slot="content" v-model="date"></m-time-picker>
      <span style="cursor:pointer">
        日期选择
      </span>
    </m-popover>
  </example-box>
</template>

<script lang="ts">
import Vue from 'vue'
import Mobov, { MTooltip, MTimePicker, MAvatar } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'
const { COLOR } = Mobov.constant

export default Vue.extend({
  name: 'ExamplePopover',
  components: { ExampleBox, MTooltip, MTimePicker, MAvatar  },
  mixins: [exampleProps],
  data () {
    return {
      date: '',
      Props,
      COLOR
    }
  }
})
</script>
