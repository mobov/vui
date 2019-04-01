<template>
  <ExampleBox>
    <MRadio v-model="checkVal"
            :color="PropsData.color"
            label="just"
            :size="PropsData.size">just</MRadio>
    <MRadio v-model="checkVal"
            :color="PropsData.color"
            label="we"
            :size="PropsData.size">we</MRadio>
    <MRow slot="handler"
          class="m-my-md"
          align="center"
          :cols="24">
      <template v-for="(prop, index) in Props">
        <MCol class="m-mb-sm" :key="'field' + index" :xs="4" :md="4" align="center">{{prop.name}}</MCol>
        <MCol class="m-mb-sm" :key="'value' + index" :xs="20" :md="20" align="center">
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
<script>
import { MRadio } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'
export default {
  name: 'ExampleCheckbox',
  components: { ExampleBox, MRadio },
  mixins: [exampleProps],
  data () {
    return {
      checkVal: 'just',
      Props
    }
  }
}
</script>
