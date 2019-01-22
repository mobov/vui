<template>
  <m-app>
    <m-view fill-header="none"
            left-size="20rem">
      <m-app-bar slot="header"
                 size="100%"
                 font-color="white"
                 :elevation="2">
        <m-button @click="showLeft = !showLeft"
                  shape="circle"
                  :elevation="0"
                  icon="menu" />
        <m-avatar variety="outline"
                  shape="circle"
                  src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3643687533,272026720&fm=58">
          A
        </m-avatar>
      </m-app-bar>
      <div v-if="showLeft" slot="left" style="height: 100%" class="m-elevation-2">
        <doc-entries></doc-entries>
      </div>
      <router-view />
    </m-view>
  </m-app>
</template>
<script lang="ts">
import Vue from 'vue'
import DocEntries from './components/doc-entries.vue'

export default Vue.extend({
  name: 'App',
  components: { DocEntries },
  data () {
    return {
      showLeft: true
    }
  }
})
</script>
