<template>
  <m-app>
    <m-app-bar size="md" font-color="white" :elevation="2">
      <m-button shape="circle" :elevation="0" icon="menu" />
      <m-avatar variety="outline" shape="circle"
                src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3643687533,272026720&fm=58">
        A
      </m-avatar>
      <m-icon name="menu" />
    </m-app-bar>
    <router-view />
  </m-app>
</template>
<script lang="ts">
export default {
  name: 'App'
}
</script>
