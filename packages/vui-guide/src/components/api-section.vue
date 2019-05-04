<template>
  <!--<component class="api-section" :is="docData"></component>-->
  <div class="api-section">
    <!--<vue-markdown>-->
      <!--{docData}-->
    <!--</vue-markdown>-->
  </div>
</template>
<style lang="scss">
  .api-section {
    width: 100%;
    padding: var(--m-space-md);
    > h2 {
      font-size: 3rem;
    }
    > h3 {
      font-size: 2.5rem;
    }
    pre {
      font-size: 2rem;
      line-height: 1.4;
      padding: var(--m-space-md);
      background-color: var(--m-color-grey-300);
    }
    > table {
      border-collapse: collapse;
      font-size: 1.5rem;
      td,
      th {
        border: 1px solid var(--m-color-grey-300);
        padding: var(--m-space-md);
      }
      width: 100%;
    }
  }
</style>
<script>
// import VueMarkdown from 'vue-markdown'

export default {
  name: 'ApiSection',
  // components: { VueMarkdown },
  props: {
    apiPath: {
      type: String,
      require: true
    }
  },
  computed: {
    docData () {
      console.log(this.apiPath)
      // return ''
      //return require(`@mobov/vui/${this.apiPath}`)
    }
  }
}
</script>
