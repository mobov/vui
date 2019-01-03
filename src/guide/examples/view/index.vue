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
    <example-box>
      <m-view class="example-view"
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
      <template slot="handler">
        <m-row class="m-my-md" align="center" :cols="10">
          <m-col :xs="1" align="center">fillHeader</m-col>
          <m-col :xs="9" align="center">
            <m-radio class="m-mr-sm" v-model="fillHeader" label="none">none</m-radio>
            <m-radio class="m-mr-sm" v-model="fillHeader" label="both">both</m-radio>
            <m-radio class="m-mr-sm" v-model="fillHeader" label="left">left</m-radio>
            <m-radio class="m-mr-sm" v-model="fillHeader" label="right">right</m-radio>
          </m-col>
        </m-row>
        <m-row class="m-my-md" align="center" :cols="10">
          <m-col :xs="1" align="center">fillFooter</m-col>
          <m-col :xs="9" align="center">
            <m-radio class="m-mr-sm" v-model="fillFooter" label="none">none</m-radio>
            <m-radio class="m-mr-sm" v-model="fillFooter" label="both">both</m-radio>
            <m-radio class="m-mr-sm" v-model="fillFooter" label="left">left</m-radio>
            <m-radio class="m-mr-sm" v-model="fillFooter" label="right">right</m-radio>
          </m-col>
        </m-row>
        <m-button class="m-mr-sm" @click="isHeader = !isHeader">isHeader</m-button>
        <m-button class="m-mr-sm" @click="isFooter = !isFooter">isFooter</m-button>
        <m-button class="m-mr-sm" @click="isLeft = !isLeft">isLeft</m-button>
        <m-button class="m-mr-sm" @click="isRight = !isRight">isRight</m-button>
      </template>
    </example-box>
  </div>

</template>

<script>
  import ExampleBox from '../../components/example-box'
  import { MView } from '@/lib'

  export default {
    name: 'ExampleView',
    components: { ExampleBox, MView },
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
