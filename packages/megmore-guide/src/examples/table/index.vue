
<template>
  <div class="example-table">
    <example-box>
      <m-table class="m-mb-lg"
               key-field="name"
               :data="tableData"
               :selected.sync="selectedData"
               :noselect.sync="noSelectData"
               :expanded.sync="expandedData"
               :noexpand.sync="noExpandData"
               :size="PropsData.size"
               :border="PropsData.border"
               :header="PropsData.header"
               :select="PropsData.select"
               :expand="PropsData.expand"
               :row-expand="PropsData['row-expand']"
               :row-select="PropsData['row-select']"
               :hover="PropsData.hover"
               height="400px">
        <m-table-col type="select" width="80"/>
        <m-table-col title="name" field="name" />
        <m-table-col title="calories" field="calories" />
        <div class="m-p-md" slot="expand" slot-scope="scope">
          表格expand内容{{scope}}
        </div>
      </m-table>
      <template slot="handler">
        <m-row class="m-my-md"
               align="center"
               :cols="24">
          <template v-for="(prop, index) in Props">
            <m-col class="m-mb-sm" :key="'field' + index" :xs="4" :md="2" align="center">{{prop.name}}</m-col>
            <m-col class="m-mb-sm" :key="'value' + index" :xs="20" :md="10" align="center">
              <m-radio class="m-mr-sm"
                       v-model="prop.default"
                       :key="index"
                       v-for="(select, index) in prop.value"
                       :label="select">{{select}}</m-radio>
            </m-col>
          </template>
        </m-row>
      </template>
    </example-box>
  </div>
</template>

<script>
  import ExampleBox from '../../components/example-box'
  import Megmore, { MTable, MTableCol } from '@/lib'
  import Props from './props'

  const { COLORS } = Megmore.constant

  export default {
    name: 'ExampleAppBar',
    components: { ExampleBox, MTable, MTableCol },
    data () {
      return {
        COLORS,
        Props,
        selectedData: [],
        noSelectData: [],
        expandedData: [],
        noExpandData: [],
        tableData: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
        ]
      }
    },
    computed: {
      PropsData () {
        const result = {}
        this.Props.forEach(item => result[item.name] = item.default)
        return result
      }
    },
    created () {

    }
  }
</script>
