<style lang="scss">
  .example-view {
    width: 100%;
    height: 500px;
  }
</style>
<template>
  <div class="example-radio">
    <m-radio class="m-mr-md"
             :key="item"
             v-model="radio"
             :label="item"
             v-for="item in 4">
      radio{{item}}
    </m-radio>
  </div>
</template>

<script>
import { MRadio } from '@megmore/vui'

export default {
  name: 'ExampleRadio',
  components: { MRadio },
  data () {
    return {
      radio: '1'
    }
  }
}
</script>
