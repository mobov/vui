<style lang='scss' scoped>

</style>
<template>
  <example-box>
    <m-app-bar :color="PropsData.color"
               :elevation="PropsData.elevation"
               :variety="PropsData.variety"
               :size="PropsData.size">
      <m-button shape="circle"
                :color="PropsData.color"
                :elevation="0"
                icon="menu" />
    </m-app-bar>
    <m-row slot="handler"
           class="m-my-md"
           align="center"
           :cols="12">
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
import Megmore, { MAppBar } from '@megmore/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'
const { COLOR } = Megmore.constant

export default Vue.extend({
  name: 'ExampleAppBar',
  components: { ExampleBox, MAppBar },
  mixins: [exampleProps],
  data () {
    return {
      Props,
      COLOR
    }
  }
})
</script>
