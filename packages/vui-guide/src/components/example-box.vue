<template>
  <div class="example-box m-shape-corner m-elevation-2 m-p-md">
    <slot></slot>
    <div class="m-hr-b m-my-md"></div>
    <slot name="handler"></slot>
  </div>
</template>
<style lang="scss">
  .example-box {
    width: 100%;
  }
</style>
<script>
export default {
  name: 'ExampleBox'
}
</script>
