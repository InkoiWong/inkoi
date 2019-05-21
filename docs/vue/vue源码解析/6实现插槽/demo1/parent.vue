<template>
  <div>
    <p>我是父级组件</p>
    <hr>

    <child1></child1>
    <hr>

    <child1>lalala</child1>
    <hr>

    <child1>
      <child2></child2>
    </child1>
    <hr>

    <child1>
      获取的是parent中的data.name：{{ name }}
    </child1>
  </div>
</template>
<script>
import child1 from './child1'
import child2 from './child2'
export default {
  components: {
    child1,
    child2
  },
  data () {
    return {
      name: 'parent'
    }
  }
}
</script>
<style scoped>
</style>