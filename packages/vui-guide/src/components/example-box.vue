<style lang="scss">
  .example-box {
    width: 100%;
    font-size: 14px;
  }
</style>
<template>
  <div class="example-box m-shape-corner m-elevation-2 m-my-md">
    <div class="m-p-md">
      <slot></slot>
    </div>
    <div class="m-hr-b"></div>
    <div class="m-p-md">
      <slot name="handler"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ExampleBox'
})
</script>
