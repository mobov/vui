<template>
  <m-container style="width: 1000px">
    <m-row :cols="24">
      <m-col :xs="2">
        <m-radio v-model="checkVal"></m-radio>
        结合二
      </m-col>
    </m-row>
    <api-section api="app-bar"></api-section>
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
