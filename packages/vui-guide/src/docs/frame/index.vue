<style lang="scss">
  .doc-frame {
  }
</style>
<template>
  <doc class="doc-frame">
    框架
  </doc>
</template>

<script lang="ts">
import Vue from 'vue'
import { MFrame } from '@mobov/vui'
import Doc from '../index.vue'

export default Vue.extend({
  name: 'DocFrame',
  components: { Doc, MFrame },
  data () {
    return {
    }
  }
})
</script>
