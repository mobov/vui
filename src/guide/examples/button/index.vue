<style lang="scss">
  .example-view {
    width: 100%;
    height: 500px;
  }
</style>
<template>
  <div class="example-button">
    <section>
      <h2>colors</h2>
      <m-button :color="color"
                style="width: 80px"
                :key="color"
                v-for="color in COLORS">{{color}}</m-button>
    </section>
    <section>
      <h2>outline</h2>
      <m-button variety="outline"
                style="width: 80px"
                :color="color"
                :key="color"
                v-for="color in COLORS">{{color}}</m-button>
    </section>
    <section>
      <h2>flat</h2>
      <m-button variety="flat"
                style="width: 80px"
                :color="color"
                :key="color"
                v-for="color in COLORS">{{color}}</m-button>
    </section>

  </div>
</template>

<script>
  import Megmore, { MButton } from '@/lib'

  const { COLORS } = Megmore.constant

  export default {
    name: 'ExampleCheckbox',
    components: { MButton },
    data () {
      return {
        COLORS
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
