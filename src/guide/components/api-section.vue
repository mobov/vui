<template>
  <div class="api-section">
    <!--<vue-markdown>-->
      <!--{{docData}}-->
    <!--</vue-markdown>-->
    <markdown></markdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ComponentDoc from '@/lib/app-bar/app-bar.md'

export default Vue.extend({
  name: 'ApiSection',
  components: {
    () => import('@/lib/app-bar/app-bar.md')
  },
  props: {
    api: {
      type: String,
      require: true
    }
  },
  computed: {
    docData (): any {
      return Markdown
    }
  }
})
</script>
