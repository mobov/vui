<style lang="scss">
  .example-view {
    width: 100%;
    height: 500px;
  }
</style>
<template>
  <div class="example-checkbox">
    <m-checkbox v-model="checkVal">checkbox</m-checkbox>
  </div>
</template>

<script>
  import { MCheckbox } from '@/lib'

  export default {
    name: 'ExampleCheckbox',
    components: { MCheckbox },
    data () {
      return {
        checkVal: false
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
