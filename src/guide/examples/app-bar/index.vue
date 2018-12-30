<style lang="scss">
  .example-view {
    width: 100%;
    height: 500px;
  }
</style>
<template>
  <div class="example-app-bar">
    <div>
      <m-app-bar :color="color" v-for="color in COLORS">
        <m-button shape="circle" variety="flat" :elevation="0" icon="menu" />
      </m-app-bar>
    </div>
    <div>
      <m-app-bar :color="color" variety="flat" v-for="color in COLORS">
        <m-button shape="circle" variety="flat" :color="color" :elevation="0" icon="menu" />
      </m-app-bar>
    </div>
  </div>
</template>

<script>
  import Megmore, { MAppBar } from '@/lib'

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
