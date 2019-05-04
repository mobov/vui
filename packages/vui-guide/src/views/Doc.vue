<style lang="scss">
  /*.doc {*/
    /*font-weight: bold;*/
  /*}*/
  .doc-title {
    font-size: 4rem;
    text-transform: capitalize;
  }
  .doc-content {
    font-size: 2rem;
    h2 {
      font-size: 4rem;
    }
    > table {
      width: 100%;
      td {
        border: 1px solid slategray;
      }
    }
  }
</style>

<template>
  <div class="doc m-elevation-1 m-p-md">
    <div class="doc-title">{{name}}</div>
    <component :is="example"></component>
    <component class="doc-content" :is="doc"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import VuiComponents from '../vui-components'

export default Vue.extend({
  computed: {
    Data () {
      return VuiComponents.find(doc => doc.name === this.$route.params.docName)
    },
    name () {
      return this.Data.name
    },
    doc () {
      return require(`@mobov/vui/src/frame/frame.${this.$i18n.locale}.md`).default
    },
    example () {
      return require(`@/examples/${this.name}/index.vue`).default
    }
  }
})
</script>
