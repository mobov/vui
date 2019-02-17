<template>
  <example-box>
    <m-button :color="PropsData.color"
              :elevation="PropsData.elevation"
              :shape="PropsData.shape"
              :variety="PropsData.variety"
              :size="PropsData.size">
      just we
    </m-button>
    <m-row slot="handler"
           class="m-my-md"
           align="center"
           :cols="24">
      <template v-for="(prop, index) in Props">
        <m-col class="m-mb-sm" :key="'field' + index" :xs="4" :md="4" align="center">{{prop.name}}</m-col>
        <m-col class="m-mb-sm" :key="'value' + index" :xs="20" :md="20" align="center">
          <m-flex>
            <m-radio class="m-mr-sm"
                     v-model="prop.default"
                     :key="index"
                     v-for="(select, index) in prop.value"
                     :label="select">{{select}}</m-radio>
          </m-flex>
        </m-col>
      </template>
    </m-row>
  </example-box>
  <!--<div class="example-button">-->
    <!--<section>-->
      <!--<h2>colors</h2>-->
      <!--<m-button :color="color"-->
                <!--style="width: 80px"-->
                <!--:key="color"-->
                <!--class="m-mr-sm"-->
                <!--v-for="color in COLORS">{{color}}</m-button>-->
    <!--</section>-->
    <!--<section>-->
      <!--<h2>outline</h2>-->
      <!--<m-button variety="outline"-->
                <!--style="width: 80px"-->
                <!--:color="color"-->
                <!--:key="color"-->
                <!--class="m-mr-sm"-->
                <!--v-for="color in COLORS">{{color}}</m-button>-->
    <!--</section>-->
    <!--<section>-->
      <!--<h2>flat</h2>-->
      <!--<m-button variety="flat"-->
                <!--style="width: 80px"-->
                <!--:color="color"-->
                <!--:key="color"-->
                <!--class="m-mr-sm"-->
                <!--v-for="color in COLORS">{{color}}</m-button>-->
    <!--</section>-->
    <!--<section>-->
      <!--<m-button :size="size"-->
                <!--class="m-px-md m-mr-sm"-->
                <!--:key="size"-->
                <!--v-for="size in BREAKPOINTS">{{size}}</m-button>-->

    <!--</section>-->

  <!--</div>-->
</template>

<script lang="ts">
import Vue from 'vue'
import { MButton } from '@megmore/vui'
import ExampleBox from '@/components/example-box.vue'
import exampleProps from '@/mixins/example-props'
import Props from './props'

export default Vue.extend({
  name: 'ExampleButton',
  mixins: [exampleProps],
  components: { ExampleBox, MButton },
  data () {
    return {
      Props
    }
  }
})
</script>
