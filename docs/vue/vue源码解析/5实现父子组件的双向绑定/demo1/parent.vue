<template>
  <div>
    <p>我是父级组件</p>
    <p>父级组件内容：{{ text }}</p>
    <p><button @click="onChange">改变内容</button></p>
    <hr>
    <child v-model="text"></child>
  </div>
</template>
<script>
import Child from './child-right'
export default {
  components: {
    Child
  },
  data() {
    return {
      text: '我是父级组件的原始内容'
    }
  },
  methods: {
    onChange() {
      this.text = 'change by parent'
    }
  }
}
</script>
<style scoped>
</style>