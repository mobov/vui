<style lang="scss">
  .example-view {
    width: 100%;
    height: 500px;
  }
</style>
<template>
  <div class="example-time-picker">
    <div class="m--mb-md">
      <m-time-picker picker-type="datetime"
                     desync confirmation
                     value-format="Date"
                     v-model="dateValue"
                     :elevation=2 />
    </div>
    <div class="m--mb-md">
      <m-time-picker picker-type="date"
                     value-format="Date"
                     v-model="dateValue"
                     :elevation=2 />

    </div>
    <div class="m--mb-md">
      <m-time-picker picker-type="time"
                     value-format="Date"
                     ampm
                     v-model="dateValue"
                     :elevation=2 />
    </div>
    <div class="m--mb-md">
      <m-time-picker picker-type="year"
                     value-format="Date"
                     ampm
                     v-model="dateValue"
                     :elevation=2 />
    </div>
    <div class="m--mb-md">
      <m-time-picker picker-type="month"
                     value-format="Date"
                     ampm
                     v-model="dateValue"
                     :elevation=2 />
    </div>
    <div class="m--mb-md">
      <m-time-picker picker-type="datetime"
                     confirmation
                     landscope
                     value-format="Date"
                     v-model="dateValue"
                     :elevation=2 />
    </div>
    <div class="m--mb-md">
      <m-time-picker picker-type="datetime"
                     landscope
                     value-format="Date"
                     v-model="dateValue"
                     :elevation=2 />
    </div>
  </div>
</template>

<script>
  import { MTimePicker } from '@/lib'

  export default {
    name: 'ExampleTimePicker',
    components: { MTimePicker },
    data () {
      return {
        dateValue: new Date()
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
