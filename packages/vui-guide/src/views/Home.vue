<template>
  <m-view class="home"
          :fill-header="fillHeader"
          :fill-footer="fillFooter"
          left-size="300px"
          header-size="4rem">
    <m-app-bar v-if="isHeader" slot="header"
               size="100%"
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
    <div v-if="isLeft" slot="left" style="background-color: powderblue;height: 100%" class="m-elevation-2"></div>
    <div v-if="isRight" slot="right" style="background-color: powderblue;height: 100%" class="m-elevation-2"></div>
    <m-app-bar v-if="isFooter" slot="footer" size="md" font-color="white" :elevation="2"></m-app-bar>
    <m-button @click="isHeader = !isHeader">isHeader</m-button>
    <m-button @click="isFooter = !isFooter">isFooter</m-button>
    <m-button @click="isLeft = !isLeft">isLeft</m-button>
    <m-button @click="isRight = !isRight">isRight</m-button>
    <m-button @click="fillHeader = 'both'">header-both</m-button>
    <m-button @click="fillHeader = 'left'">header-left</m-button>
    <m-button @click="fillHeader = 'right'">header-right</m-button>
    <m-button @click="fillHeader = 'none'">header-none</m-button>
    <m-button @click="fillFooter = 'both'">footer-both</m-button>
    <m-button @click="fillFooter = 'left'">footer-left</m-button>
    <m-button @click="fillFooter = 'right'">footer-right</m-button>
    <m-button @click="fillFooter = 'none'">footer-none</m-button>
    <m-container style="width: 1000px">
      <api-section api-path="app-bar/app-bar.md"></api-section>
    </m-container>
  </m-view>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      checkVal: false,
      fillHeader: 'both',
      fillFooter: 'both',
      isHeader: true,
      isFooter: true,
      isLeft: true,
      isRight: true
    }
  }
})
</script>
