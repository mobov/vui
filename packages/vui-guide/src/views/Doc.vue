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
    <div class="doc-title" v-t="name"></div>
    <component :is="example"></component>
    <DocBox>
      <component :is="doc"></component>
    </DocBox>
  </div>
</template>

<script>
import Vue from 'vue'
import VuiComponents from '../vui-components'
import DocBox from '@/components/doc-box.vue'

export default Vue.extend({
  name: 'doc',
  components: { DocBox },
  computed: {
    Data () {
      return VuiComponents.find(doc => doc.name === this.$route.params.docName)
    },
    name () {
      return this.Data.name
    },
    doc () {
      return require(`@mobov/vui/src/${this.name}/${this.name}.md`).default
      // return require(`@mobov/vui/src/${this.name}/${this.name}.${this.$i18n.locale}.md`).default
    },
    example () {
      return require(`@/examples/${this.name}/index.vue`).default
    }
  }
})
</script>
