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
  <example-box>
    <m-view class="example-view"
            :fill-header="PropsData.fillHeader"
            :fill-footer="PropsData.fillFooter"
            :header-size="PropsData.headerSize"
            :footer-size="PropsData.footerSize"
            :left-size="PropsData.leftSize"
            :right-size="PropsData.rightSize">
      <div class="view-header" v-if="PropsData.headerSlot" slot="header"></div>
      <div class="view-left" v-if="PropsData.leftSlot" slot="left" ></div>
      <div class="view-right" v-if="PropsData.rightSlot" slot="right"></div>
      <div class="view-footer" v-if="PropsData.footerSlot" slot="footer"></div>
      <div class="view-main"></div>
    </m-view>
    <m-row slot="handler"
           class="m-my-md"
           align="center"
           :cols="24">
      <template v-for="(prop, index) in Props">
        <m-col class="m-mb-sm" :key="'field' + index" :xs="4" :md="2" align="center">{{prop.name}}</m-col>
        <m-col class="m-mb-sm" :key="'value' + index" :xs="20" :md="10" align="center">
          <m-flex>
            <m-radio class="m-mr-sm"
                     v-model="prop.default"
                     :key="index"
                     v-for="(select, index) in prop.value"
                     :label="select">{{select}}</m-radio>
          </m-flex>
        </m-col>
      </template>
    </m-row>
  </example-box>
</template>

<script lang="ts">
import Vue from 'vue'
import { MView } from '@megmore/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'

export default Vue.extend({
  name: 'ExampleView',
  components: { ExampleBox, MView },
  mixins: [exampleProps],
  data () {
    return {
      Props
    }
  }
})
</script>
