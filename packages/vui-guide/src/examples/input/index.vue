<style lang='scss' scoped>

</style>
<template>
  <example-box>
    <m-input>

    </m-input>
  </example-box>
</template>

<script lang="ts">
import Vue from 'vue'
import Mobov, { MInput } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'
const { COLOR } = Mobov.constant

export default Vue.extend({
  name: 'ExamplePopover',
  components: { ExampleBox, MInput },
  mixins: [exampleProps],
  data () {
    return {
      Props,
      COLOR
    }
  }
})
</script>
