<template>
  <m-app >
    <m-view :fill-header="fillHeader"
            :fill-footer="fillFooter">
      <m-app-bar v-if="isHeader" slot="header"
                 font-color="white"
                 :elevation="2">
        <m-button shape="circle" :elevation="0" icon="menu" />
        <m-avatar variety="outline"
                  shape="circle"
                  src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3643687533,272026720&fm=58">
          A
        </m-avatar>
        <m-icon name="menu" />
      </m-app-bar>
      <div v-if="isLeft" slot="left" style="background-color: powderblue;height: 100%" class="m--elevation-2"></div>
      <div v-if="isRight" slot="right" style="background-color: powderblue;height: 100%" class="m--elevation-2"></div>
      <m-app-bar v-if="isFooter" slot="footer" size="md" font-color="white" :elevation="2"></m-app-bar>
      <router-view />
    </m-view>
  </m-app>
</template>
<script lang="ts">
export default {
  name: 'App',
  data () {
    return {
      fillHeader: 'both',
      fillFooter: 'both',
      isHeader: true,
      isFooter: true,
      isLeft: true,
      isRight: true
    }
  }
}
</script>
