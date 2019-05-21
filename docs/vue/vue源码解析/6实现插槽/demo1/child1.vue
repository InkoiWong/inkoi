<template>
  <div>
    <p>我是子组件1标题</p>

    <p>
      <span>插槽内容：</span>
      <slot>默认内容</slot>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'child1'
    }
  }
}
</script>
<style scoped>
</style>