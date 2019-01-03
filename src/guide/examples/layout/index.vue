<style lang="scss">
  .example-chip {
    width: 100%;
    height: 500px;
  }
</style>
<template>
  <div class="example-layout">
    <example-box>
      <m-row :gutter="5" :cols="18">
        <m-col style="height: 50px;"
               :gutter="5"
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
  import ExampleBox from '../../components/example-box'
  import Megmore, { MRow, MCol } from '@/lib'

  const { COLORS, BREAKPOINTS } = Megmore.constant

  export default {
    name: 'ExampleDiv',
    components: { ExampleBox, MRow, MCol },
    data () {
      return {
        COLORS,
        BREAKPOINTS
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
