
<template>
  <div class="example-table">
    <m-app-bar></m-app-bar>
    <m-table border
             header="sticky"
             class="m-mb-lg"
             :data="tableData"
             :selected.sync="selectedData"
             key-field="name"
             select="multi"
             expand="multi"
             row-expand
             height="400px"
             hover="row">
      <m-table-col type="select" width="80"/>
      <m-table-col title="name" field="name" />
      <m-table-col title="calories" field="calories" />
      <div class="m-p-md" slot="expand" slot-scope="scope">
        表格expand内容{{scope}}
      </div>
    </m-table>
  </div>
</template>

<script>
  import Megmore, { MTable, MTableCol } from '@/lib'

  const { COLORS } = Megmore.constant

  export default {
    name: 'ExampleAppBar',
    components: { MTable, MTableCol },
    data () {
      return {
        COLORS,
        selectedData: ['Eclair'],
        disSelectData: ['Cupcake'],
        expandedData: ['Lollipop'],
        tableData: [
          {
            isCheck: true,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            isCheck: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            isCheck: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            isCheck: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            isCheck: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            isCheck: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            isCheck: true,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            isCheck: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            isCheck: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            isCheck: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
