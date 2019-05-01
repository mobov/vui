<style lang="scss">
  .example-frame {
    width: 100%;
    height: 500px;

    .frame-header,
    .frame-left,
    .frame-right,
    .frame-footer,
    .frame-main {
      width: 100%;
      height: 100%;
    }
    .frame-header,
    .frame-left,
    .frame-right,
    .frame-footer {
      box-shadow: var(--m-elevation-5);
    }
    .frame-header,
    .frame-footer {
      background-color: var(--m-color-deeppurple-300);
    }
    .frame-left,
    .frame-right {
      background-color: var(--m-color-grey-300);
    }
    .frame-main {
      background-color: var(--m-color-grey-50);
    }
  }
</style>
<template>
  <example-box>
    <m-frame class="example-frame"
            :fill-header="PropsData.fillHeader"
            :fill-footer="PropsData.fillFooter"
            :header-size="PropsData.headerSize"
            :footer-size="PropsData.footerSize"
            :transition="PropsData.transition"
            :left-size="PropsData.leftSize"
            :right-size="PropsData.rightSize"
            :header-index="PropsData.headerIndex"
            :footer-index="PropsData.footerIndex"
            :left-index="PropsData.leftIndex"
            :right-index="PropsData.rightIndex">
      <div class="frame-header" v-if="PropsData.headerSlot" slot="header"></div>
      <div class="frame-left" v-if="PropsData.leftSlot" slot="left" ></div>
      <div class="frame-right" v-if="PropsData.rightSlot" slot="right"></div>
      <div class="frame-footer" v-if="PropsData.footerSlot" slot="footer"></div>
      <div class="frame-main"></div>
    </m-frame>
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
import { MFrame } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'

export default Vue.extend({
  name: 'ExampleFrame',
  components: { ExampleBox, MFrame },
  mixins: [exampleProps],
  data () {
    return {
      Props
    }
  }
})
</script>
