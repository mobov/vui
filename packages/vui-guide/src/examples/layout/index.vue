<style lang="scss" scoped>
  .example-row {
    background-color: #e1e1e1;
  }
  .example-col {
    height: 50px;
  }
</style>
<template>
  <div class="example-layout">
    <example-box>
      <m-row class="example-row"
             :gutter="5"
             :cols="18" >
        <m-col class="example-col"
               :key="item"
               :xs="1"
               v-for="item in 24">
          <div style="background-color: #449fdb;height: 100%;width: 100%"></div>
        </m-col>
      </m-row>
    </example-box>
  </div>
</template>

<script>
import ExampleBox from '@/components/example-box.vue'
import Megmore, { MRow, MCol } from '@megmore/vui'

export default {
  name: 'ExampleLayout',
  components: { ExampleBox, MRow, MCol },
  data () {
    return {
    }
  }
}
</script>
