<template>
  <div>
    <p>我是子组件</p>
    <p>子组件内容：{{ value }}</p>
    <p><button @click="onChange">改变内容</button></p>
  </div>
</template>

<script>
export default {
  props: {
    //此处一定要用value
    value: {
      type: String
    }
  },
  methods: {
    onChange() {
      this.value = 'change by child'
    }
  }
}

</script>
<style scoped>
</style>