<template>
  <div>
    <p>我是父级组件</p>

    <child1></child1>
    <child2></child2>
  </div>
</template>
<script>
import child1 from './child1'
import child2 from './child2'
export default {
  components: {
    child1,
    child2
  }
}
</script>
<style scoped>
</style>