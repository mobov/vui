<style lang="scss">
  .doc {
    width: 100%;
    font-size: 14px;
  }
</style>
<template>
  <div class="doc m-shape-corner m-elevation-2 m-my-md">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Doc'
  })
</script>
