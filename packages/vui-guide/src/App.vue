<template>
  <m-app>
    <m-frame fill-header="none"
            transition
            :header-size="50"
            :left-index="5"
            :left-size="300">
      <m-app-bar slot="header"
                 size="100%"
                 font-color="white"
                 :elevation="2">
        <m-button @click="showLeft = !showLeft"
                  shape="circle"
                  :paddingX="0"
                  :elevation="0">
          <m-icon value="menu" />
        </m-button>
        <m-avatar variety="outline"
                  shape="circle"
                  :marginLeft="10"
                  src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3643687533,272026720&fm=58">
          A
        </m-avatar>
      </m-app-bar>
      <div v-if="showLeft" slot="left" class="m-elevation-2" style="height: 100%">
        <doc-entries></doc-entries>
      </div>
      <router-view />
    </m-frame>
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
