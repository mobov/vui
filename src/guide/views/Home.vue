<template>
  <m-container style="width: 1000px">
    <m-row :cols="24">
      <m-col :xs="2">
        <m-radio v-model="checkVal"></m-radio>
        结合二
      </m-col>

    </m-row>
  </m-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '../components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  checkVal: boolean = false
}
</script>
