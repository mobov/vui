<template>
  <example-box>
    <m-avatar :src="src"
              transition
              :color="PropsData.color"
              :elevation="PropsData.elevation"
              :shape="PropsData.shape"
              :variety="PropsData.variety"
              :size="PropsData.size">
    </m-avatar>
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
import Mobov, { MAvatar } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'
const { COLOR } = Mobov.constant

export default Vue.extend({
  name: 'ExampleAvatar',
  components: { ExampleBox, MAvatar },
  mixins: [exampleProps],
  data () {
    return {
      Props,
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550424956192&di=7bdf1a537fd883b58e87d14756b35404&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201603%2F06%2F20160306180327_ErTJm.jpeg',
      COLOR
    }
  }
})
</script>
