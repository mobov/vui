<template>
  <div class="api-section">
    <vue-markdown>
      {{docData}}
    </vue-markdown>
  </div>
</template>

<script lang="ts">
import VueMarkdown from 'vue-markdown'
import Vue from 'vue'

export default Vue.extend({
  name: 'ApiSection',
  components: { VueMarkdown },
  props: {
    api: {
      type: String,
      require: true
    }
  },
  computed: {
    docData () {
      return `@/lib/${this.api}/${this.api}.md`
    }
  }
})
</script>
