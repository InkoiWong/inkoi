<template>
  <div>
    <p>我是子组件2</p>
  </div>
</template>
<script>
import {EventBus} from './event-bus'
export default {
  mounted() {
    EventBus.$emit('event', 'asd');
  }
}
</script>
<style scoped>
</style>