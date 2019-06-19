<template>
  <example-box>
    <m-flex>
      <m-button :color="PropsData.color"
                :elevation="PropsData.elevation"
                :shape="PropsData.shape"
                :variety="PropsData.variety"
                :size="PropsData.size"
                paddingX="sm"
                marginRight="sm">
        just we
      </m-button>
      <m-button :color="PropsData.color"
                :elevation="PropsData.elevation"
                :shape="PropsData.shape"
                :variety="PropsData.variety"
                :size="PropsData.size"
                :padding="0"
                marginRight="sm">
        <m-icon size="16" value="menu" />
      </m-button>
      <m-button :color="PropsData.color"
                :elevation="PropsData.elevation"
                :shape="PropsData.shape"
                :variety="PropsData.variety"
                :size="PropsData.size"
                paddingX="sm"
                marginRight="sm">
        just we
      </m-button>
    </m-flex>
    <m-row slot="handler"
           class="m-my-md"
           align="center"
           :cols="24">
      <template v-for="(prop, index) in Props">
        <m-col class="m-mb-sm" :key="'field' + index" :xs="4" :md="4" align="center">{{prop.name}}</m-col>
        <m-col class="m-mb-sm" :key="'value' + index" :xs="20" :md="20" align="center">
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
import { MButton } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'

export default Vue.extend({
  name: 'ExampleButton',
  mixins: [exampleProps],
  components: { ExampleBox, MButton },
  data () {
    return {
      Props
    }
  }
})
</script>
