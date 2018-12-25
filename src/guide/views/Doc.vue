<template>
  <div class="docs">
    <api-section :api-path="docPath"></api-section>
  </div>
</template>

<script>
  import docsData from '../data/docs'
  import ApiSection from '../components/api-section.vue'

  export default {
    components: { ApiSection },
    computed: {
      docPath () {
        return docsData.find(doc => doc.name === this.$route.params.docName).docSrc
      }
    }
  }
</script>
