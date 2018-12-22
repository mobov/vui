<template>
  <m-container style="width: 1000px">
    <api-section api-path="app-bar/app-bar.md"></api-section>
  </m-container>
</template>

<script lang="ts">
import Vue from 'vue'
import ApiSection from '@/guide/components/api-section.vue'

export default Vue.extend({
  components: { ApiSection },
  data () {
    return {
      checkVal: false
    }
  }
})
</script>
