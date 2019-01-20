<style lang="scss">
  /*.doc {*/
    /*font-weight: bold;*/
  /*}*/
  .doc-title {
    font-size: 4rem;
    text-transform: capitalize;
  }
</style>

<template>
  <div class="doc m-elevation-1 m-p-md">
    <div class="doc-title">{{docName}}</div>
    <component  :is="example"></component>
    <api-section :api-path="docPath"></api-section>

  </div>
</template>

<script>
  import Vue from 'vue'
  import docsData from '../data/docs'
  import ApiSection from '../components/api-section.vue'

  export default Vue.extend({
    components: { ApiSection },
    computed: {
      Data () {
        return docsData.find(doc => doc.name === this.$route.params.docName)
      },
      docName () {
        return this.Data.name
      },
      docPath () {
        return this.Data.docSrc
      },
      example () {
        return require(`@/guide/examples/${this.Data.name}/index.vue`).default
      }
    }
  })
</script>
