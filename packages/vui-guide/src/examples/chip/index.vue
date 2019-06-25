<template>
  <example-box>
    <m-chip :color="PropsData.color"
            :variety="PropsData.variety"
            :shape="PropsData.shape"
            :elevation="PropsData.elevation"
            :closeable="PropsData.closeable"
            :closeover="PropsData.closeover"
            @click="handleClick"
            @close="handleClose"
            :size="PropsData.size">just we</m-chip>
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
import { MChip } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'

export default Vue.extend({
  name: 'ExampleChip',
  mixins: [exampleProps],
  components: { ExampleBox, MChip },
  data () {
    return {
      Props
    }
  },
  methods: {
    handleClick () {
      console.log('click')
    },
    handleClose () {
      console.log('close')
    }
  }
})
</script>
