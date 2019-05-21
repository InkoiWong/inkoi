<template>
  <div>
    <p>我是子组件1</p>
  </div>
</template>
<script>
import {EventBus} from './event-bus'
export default {
  mounted() {
    EventBus.$on('event', msg => {
      /* eslint-disable */
      console.log(msg);
    });
  }
}
</script>
<style scoped>
</style>