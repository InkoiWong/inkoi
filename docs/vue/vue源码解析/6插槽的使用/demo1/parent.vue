<template>
  <div>
    <p>我是父级组件</p>
    <hr>

    <child1></child1>

    <child1>lalala</child1>

    <child1>
      <child2></child2>
    </child1>

    <child1>
      获取的是parent中的data.name：{{ name }}
    </child1>
    <hr>

    <child3>
      <template v-slot:header>
        <p>slotname 为 header 的内容</p>
      </template>

      <p>slotname 为 default/无 的内容</p>

      <template v-slot:footer>
        <p>slotname 为 footer 的内容</p>
      </template>
    </child3>
    <hr>

    <child4>
      <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </child4>

    <child4>
      <template #default="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </child4>

  </div>
</template>
<script>
import child1 from './child1'
import child2 from './child2'
import child3 from './child3'
import child4 from './child4'
export default {
  components: {
    child1,
    child2,
    child3,
    child4
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