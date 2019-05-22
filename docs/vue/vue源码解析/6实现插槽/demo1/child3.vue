<template>
  <div>
    <p>我是子组件3标题</p>

    <p>
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </p>
  </div>
</template>
<script>
// 具名插槽
export default {
  data () {
    return {
      name: 'child3'
    }
  }
}
</script>
<style scoped>
</style>