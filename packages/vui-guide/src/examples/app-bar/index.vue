
<template>
  <div class="example-app-bar">
    <div>
      <m-app-bar class="m-mb-md" :color="color" :key="color" v-for="color in COLORS">
        <m-button shape="circle" :color="color" :elevation="0" icon="menu" />
      </m-app-bar>
    </div>
    <div>
      <m-app-bar class="m-mb-md" :color="color" variety="flat" :key="color" v-for="color in COLORS">
        <m-button shape="circle" variety="flat" :color="color" :elevation="0" icon="menu" />
      </m-app-bar>
    </div>
  </div>
</template>

<script>
import Megmore, { MAppBar } from '@megmore/vui'

const { COLORS } = Megmore.constant

export default {
  name: 'ExampleAppBar',
  components: { MAppBar },
  data () {
    return {
      COLORS
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
