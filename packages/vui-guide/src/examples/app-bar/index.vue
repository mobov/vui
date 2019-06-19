<style lang='scss' scoped>

</style>
<template>
  <ExampleBox>
    <MAppBar :color="PropsData.color"
             padding="10px"
               :elevation="PropsData.elevation"
               :variety="PropsData.variety"
               :size="PropsData.size">
      <MButton shape="circle"
                :color="PropsData.color"
                :elevation="0"
                icon="menu" />
      <MButton shape="circle"
               :color="PropsData.color"
               :elevation="0"
               icon="adjust" />
    </MAppBar>
    <MRow slot="handler"
           class="m-my-md"
           align="center"
           :cols="12">
      <template v-for="(prop, index) in Props">
        <MCol class="m-mb-sm" :key="'field' + index" :xs="4" :md="2" align="center">{{prop.name}}</MCol>
        <MCol class="m-mb-sm" :key="'value' + index" :xs="20" :md="10" align="center">
          <MFlex>
            <MRadio class="m-mr-sm"
                     v-model="prop.default"
                     :key="index"
                     v-for="(select, index) in prop.value"
                     :label="select">{{select}}</MRadio>
          </MFlex>
        </MCol>
      </template>
    </MRow>
  </ExampleBox>
</template>

<script lang="ts">
import Vue from 'vue'
import adjust from '@mobov/vui/lib/icons/adjust'
import Mobov, { MAppBar, MIcon } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'
const { COLOR } = Mobov.constant

MIcon.register(adjust)

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
