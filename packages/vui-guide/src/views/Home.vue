<template>
  <m-view class="home"
          :Fill-header="fillHeader"
          :Fill-footer="fillFooter"
          left-size="300px"
          header-size="4rem">
    <m-app-bar v-if="isHeader" slot="header"
               size="100%"
               font-color="white"
               :elevation="2">
      <m-button shape="circle" :elevation="0" icon="menu" />
      <m-avatar variety="outline"
                marginLeft="10px"
                shape="circle"
                src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3643687533,272026720&fm=58">
        A
      </m-avatar>
      <m-icon name="menu" />
    </m-app-bar>
  </m-view>
</template>

<script>
import Vue from 'vue'

export default {
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
}
</script>
