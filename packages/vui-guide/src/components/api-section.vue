<template>
  <component class="api-section" :is="docData"></component>
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
export default {
  name: 'ApiSection',
  props: {
    apiPath: {
      type: String,
      require: true
    }
  },
  computed: {
    docData () {
      // console.log(this.apiPath)
      // return ''
      //  return require(`@megmore/vui/${this.apiPath}`).default
    }
  }
}
</script>
