<template>
  <div class="example-button">
    <section>
      <h2>colors</h2>
      <m-button :color="color"
                style="width: 80px"
                :key="color"
                class="m-mr-sm"
                v-for="color in COLORS">{{color}}</m-button>
    </section>
    <section>
      <h2>outline</h2>
      <m-button variety="outline"
                style="width: 80px"
                :color="color"
                :key="color"
                class="m-mr-sm"
                v-for="color in COLORS">{{color}}</m-button>
    </section>
    <section>
      <h2>flat</h2>
      <m-button variety="flat"
                style="width: 80px"
                :color="color"
                :key="color"
                class="m-mr-sm"
                v-for="color in COLORS">{{color}}</m-button>
    </section>
    <section>
      <m-button :size="size"
                class="m-px-md m-mr-sm"
                :key="size"
                v-for="size in BREAKPOINTS">{{size}}</m-button>

    </section>

  </div>
</template>

<script>
import Megmore, { MButton } from '@megmore/vui'

const { COLORS, BREAKPOINTS } = Megmore.constant

export default {
  name: 'ExampleButton',
  components: { MButton },
  data () {
    return {
      COLORS,
      BREAKPOINTS
    }
  }
}
</script>
