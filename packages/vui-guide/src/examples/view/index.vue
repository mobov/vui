<style lang="scss">
  .example-view {
    width: 700px;
    margin: 0 auto;
    height: 400px;
    .view-main {
      background-color: var(--m-color-grey-50);
    }
  }
</style>
<template>
  <example-box>
    <m-view ref="view"
            border
            padding="20px"
            @scroll="handleScroll"
            :onRefresh="handleRefresh"
            :onLoadMore="handleLoadMore"
            height="600px" >
      <div v-for="(item, index) in 100">
        {{index}}
      </div>
    </m-view>
  </example-box>
</template>

<script lang="ts">
import Vue from 'vue'
import { MView } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'

export default Vue.extend({
  name: 'ExampleView',
  components: { ExampleBox, MView },
  mixins: [exampleProps],
  data () {
    return {
      Props
    }
  },
  methods: {
    handleScroll (res: any) {
      console.log(res)
    },
    handleRefresh (end: any) {

    },
    handleLoadMore (end: any) {

    }
  },
  mounted () {
    (this.$refs.view as any).scrollTo(500)
  }
})
</script>
