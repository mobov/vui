<style lang='scss' scoped>

</style>
<template>
  <example-box>
    <m-flex inline>
      <m-tooltip content="测试速度速度" :elevation="0" placement="bottom">
        <span style="margin: 10px">文字节点</span>
      </m-tooltip>
      <m-tooltip content="测试速度速度" :elevation="0" placement="bottom">
        <span style="margin: 10px">文字节点</span>
      </m-tooltip>
      <m-tooltip content="测试速度速度" :elevation="0" placement="bottom">
        <span style="margin: 10px">文字节点</span>
      </m-tooltip>
      <m-tooltip content="测试速度速度" :elevation="0" placement="bottom">
        <span style="margin: 10px">文字节点</span>
      </m-tooltip>
    </m-flex>
    <m-tooltip content="测试速度速度" :elevation="0" placement="bottom">
      <div style="margin: 10px 0">文字节点</div>
    </m-tooltip>
    <m-tooltip content="头像"  :elevation="0" shape="circle" placement="bottom">
      <m-avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550424956192&di=7bdf1a537fd883b58e87d14756b35404&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201603%2F06%2F20160306180327_ErTJm.jpeg"></m-avatar>
    </m-tooltip>
    <m-tooltip content="测试速度速度" :elevation="0" placement="bottom">
      <div style="margin: 10px 0">
        普通节点
      </div>
    </m-tooltip>
  </example-box>
</template>

<script lang="ts">
import Vue from 'vue'
import Mobov, { MTooltip } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'
const { COLOR } = Mobov.constant

export default Vue.extend({
  name: 'ExampleTooltip',
  components: { ExampleBox, MTooltip },
  mixins: [exampleProps],
  data () {
    return {
      Props,
      COLOR
    }
  }
})
</script>
