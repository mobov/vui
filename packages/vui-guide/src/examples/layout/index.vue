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
             :padding="5"
             :gutter="5"
             :cols="24" >
        <m-col class="example-col"
               :key="item"
               :xs="24"
               :sm="12"
               :md="8"
               :lg="2"
               :padding="5"
               v-for="item in 24">
          <div style="background-color: #449fdb;height: 100%;width: 100%;"></div>
        </m-col>
      </m-row>
      <m-container class="example-col" :marginY="20">
        <div style="background-color: #449fdb;height: 100%;width: 100%;"></div>
      </m-container>
    </example-box>
  </div>
</template>

<script>
import ExampleBox from '@/components/example-box.vue'
import Mobov, { MRow, MCol } from '@mobov/vui'

export default {
  name: 'ExampleLayout',
  components: { ExampleBox, MRow, MCol },
  data () {
    return {
    }
  }
}
</script>
