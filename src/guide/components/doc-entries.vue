<template>
  <div class="doc-entries">
    <m-list-item :key="doc.name" v-for="doc in docsData" @click="handleDocClick(doc.name)">
      {{doc.name}}
    </m-list-item>
  </div>
</template>

<script>
  import docsData from '../data/docs'

  export default {
    name: 'doc-entries',
    data () {
      return {
        docsData
      }
    },
    methods: {
      handleDocClick (name) {
        this.$router.push(`/doc/${name}`)
      }
    }
  }
</script>

<style lang="scss">
  .doc-entries {

  }

</style>
