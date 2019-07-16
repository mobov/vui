
<script lang="jsx">

export default {
  render () {
    const { $slots } = this

    return (
      <div staticClass="m-app">
        {$slots.default}
      </div>
    )
  }
}
</script>
