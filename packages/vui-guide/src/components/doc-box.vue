<style lang="scss">
  .doc-box {
    width: 100%;
    padding: var(--m-space-md);
    .vmark {
      > h2 {
        font-size: 3rem;
      }
      > h3 {
        font-size: 2.5rem;
      }
      pre {
        font-size: 2rem;
        line-height: 1.4;
        padding: var(--m-space-md);
        background-color: var(--m-color-grey-300);
      }
      > table {
        border-collapse: collapse;
        font-size: 1.5rem;
        td,
        th {
          border: 1px solid var(--m-color-grey-300);
          padding: var(--m-space-md);
        }
        width: 100%;
      }
    }
  }
</style>
<template>
  <div class="doc-box m-shape-corner m-elevation-2 m-my-md">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'DocBox'
  }
</script>
