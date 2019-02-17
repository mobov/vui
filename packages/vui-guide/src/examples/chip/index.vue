<style lang="scss">
  .example-chip {
    width: 100%;
    height: 500px;
  }
</style>
<template>
  <div class="example-chip">
    <section>
      <h2>colors</h2>
      <m-chip :color="color"
              size="md"
              :key="color"
              class="m-mr-sm"
              v-for="color in COLOR">{{color}}</m-chip>
      <m-chip class="m-mr-sm" size="xs" closeable closeover>
        <m-avatar slot="media" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532848823575&di=940fe99aec0381b8ef366c52ab006095&imgtype=0&src=http%3A%2F%2Fwww.wodeyiku.com%2Fuploads3%2Fimage%2F201703%2F0301l1k3cuc3avi.jpg" />
        <span>呵呵</span>
      </m-chip>
      <m-chip class="m-mr-sm" size="sm" closeable closeover>
        <m-avatar slot="media" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532848823575&di=940fe99aec0381b8ef366c52ab006095&imgtype=0&src=http%3A%2F%2Fwww.wodeyiku.com%2Fuploads3%2Fimage%2F201703%2F0301l1k3cuc3avi.jpg" />
        <span>呵呵</span>
      </m-chip>
      <m-chip class="m-mr-sm" size="md" closeable closeover>
        <m-avatar slot="media" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532848823575&di=940fe99aec0381b8ef366c52ab006095&imgtype=0&src=http%3A%2F%2Fwww.wodeyiku.com%2Fuploads3%2Fimage%2F201703%2F0301l1k3cuc3avi.jpg" />
        <span>呵呵</span>
      </m-chip>
      <m-chip class="m-mr-sm" size="lg" closeable closeover>
        <m-avatar slot="media" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532848823575&di=940fe99aec0381b8ef366c52ab006095&imgtype=0&src=http%3A%2F%2Fwww.wodeyiku.com%2Fuploads3%2Fimage%2F201703%2F0301l1k3cuc3avi.jpg" />
        <span>呵呵</span>
      </m-chip>
      <m-chip class="m-mr-sm" color="green" size="40px" closeable closeover>
        <m-avatar slot="media" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532848823575&di=940fe99aec0381b8ef366c52ab006095&imgtype=0&src=http%3A%2F%2Fwww.wodeyiku.com%2Fuploads3%2Fimage%2F201703%2F0301l1k3cuc3avi.jpg" />
        <span>呵呵</span>
      </m-chip>
      <m-chip class="m-mr-sm" size="xs">
        <!--<m-avatar slot="media" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532848823575&di=940fe99aec0381b8ef366c52ab006095&imgtype=0&src=http%3A%2F%2Fwww.wodeyiku.com%2Fuploads3%2Fimage%2F201703%2F0301l1k3cuc3avi.jpg" />-->
        <span>呵呵</span>
      </m-chip>
      <m-chip class="m-mr-sm" size="sm">
        <m-avatar slot="media" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532848823575&di=940fe99aec0381b8ef366c52ab006095&imgtype=0&src=http%3A%2F%2Fwww.wodeyiku.com%2Fuploads3%2Fimage%2F201703%2F0301l1k3cuc3avi.jpg" />
        <span>呵呵</span>
      </m-chip>
      <m-chip class="m-mr-sm" size="md">
        <m-avatar slot="media" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532848823575&di=940fe99aec0381b8ef366c52ab006095&imgtype=0&src=http%3A%2F%2Fwww.wodeyiku.com%2Fuploads3%2Fimage%2F201703%2F0301l1k3cuc3avi.jpg" />
        <span>呵呵</span>
      </m-chip>
      <m-chip class="m-mr-sm" size="lg" closeable>
        <m-avatar slot="media" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532848823575&di=940fe99aec0381b8ef366c52ab006095&imgtype=0&src=http%3A%2F%2Fwww.wodeyiku.com%2Fuploads3%2Fimage%2F201703%2F0301l1k3cuc3avi.jpg" />
        <span>呵呵</span>
      </m-chip>
    </section>
      <!--<section>-->
        <!--<h2>outline</h2>-->
        <!--<m-button variety="outline"-->
                  <!--style="width: 80px"-->
                  <!--:color="color"-->
                  <!--:key="color"-->
                  <!--class="m&#45;&#45;mr-sm"-->
                  <!--v-for="color in COLORS">{{color}}</m-button>-->
      <!--</section>-->
    <!--<section>-->
      <!--<m-button :size="size"-->
                <!--class="m&#45;&#45;px-md m&#45;&#45;mr-sm"-->
                <!--:key="size"-->
                <!--v-for="size in BREAKPOINTS">{{size}}</m-button>-->

    <!--</section>-->

  </div>
</template>

<script>
import Megmore, { MChip } from '@megmore/vui'

const { COLOR, BREAKPOINT } = Megmore.constant

export default {
  name: 'ExampleChip',
  components: { MChip },
  data () {
    return {
      COLOR,
      BREAKPOINT
    }
  }
}
</script>
