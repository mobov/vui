<style lang="scss">

</style>
<template>
  <ExampleBox>
    <MTimePicker :color="PropsData.color"
                 :elevation="PropsData.elevation"
                 :pickerType="PropsData.pickerType"
                 :landscope="PropsData.landscope"
                 :desync="PropsData.desync"
                 :confirmation="PropsData.confirmation"
                 :ampm="PropsData.ampm"
                 :valueFormat="valueFormat"
                 v-model="dateValue" />
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
import Mobov, { MTimePicker } from '@mobov/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'

const { DateValueFormat } = Mobov.constant

export default {
  name: 'ExampleTimePicker',
  components: { ExampleBox, MTimePicker },
  mixins: [exampleProps],
  data () {
    return {
      dateValue: new Date(),
      valueFormat: DateValueFormat.Date,
      Props
    }
  }
}
</script>
