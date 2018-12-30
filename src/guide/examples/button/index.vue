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
                :key="color"
                v-for="color in COLORS">{{color}}</m-button>
    </section>
    <section>
      <h2>outline</h2>
      <m-button variety="outline"
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
