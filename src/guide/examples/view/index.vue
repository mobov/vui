<style lang="scss">
  .example-view {
    width: 100%;
    height: 500px;

    .view-header,
    .view-left,
    .view-right,
    .view-footer,
    .view-main {
      width: 100%;
      height: 100%;
    }
    .view-header,
    .view-footer {
      background-color: var(--m-color-deeppurple-300);
    }
    .view-left,
    .view-right {
      background-color: var(--m-color-grey-300);
    }
    .view-main {
      background-color: var(--m-color-grey-50);
    }
  }
</style>
<template>
  <div class="example">
    <m-view class="example-view m--elevation-4"
            :fill-header="fillHeader"
            :fill-footer="fillFooter"
            left-size="300px"
            header-size="4rem">
      <div class="view-header" v-if="isHeader" slot="header"></div>
      <div class="view-left" v-if="isLeft" slot="left" ></div>
      <div class="view-right" v-if="isRight" slot="right"></div>
      <div class="view-footer" v-if="isFooter" slot="footer" size="md" font-color="white" :elevation="2"></div>
      <div class="view-main"></div>
    </m-view>
    <div class="m--py-sm">
      <m-button class="m--ml-0" @click="isHeader = !isHeader">isHeader</m-button>
      <m-button @click="isFooter = !isFooter">isFooter</m-button>
      <m-button @click="isLeft = !isLeft">isLeft</m-button>
      <m-button @click="isRight = !isRight">isRight</m-button>
    </div>
    <div class="m--py-sm">
      <m-button @click="fillHeader = 'both'">header-both</m-button>
      <m-button @click="fillHeader = 'left'">header-left</m-button>
      <m-button @click="fillHeader = 'right'">header-right</m-button>
      <m-button @click="fillHeader = 'none'">header-none</m-button>
    </div>
    <div class="m--py-sm">
      <m-button @click="fillFooter = 'both'">footer-both</m-button>
      <m-button @click="fillFooter = 'left'">footer-left</m-button>
      <m-button @click="fillFooter = 'right'">footer-right</m-button>
      <m-button @click="fillFooter = 'none'">footer-none</m-button>
    </div>
  </div>

</template>

<script>
  import { MView } from '@/lib'

  export default {
    name: 'ExampleView',
    components: { MView },
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

<style lang='scss' scoped>

</style>
