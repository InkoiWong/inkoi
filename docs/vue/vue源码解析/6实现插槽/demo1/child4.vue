<template>
  <div>
    <p>我是子组件4</p>

    <p>
      <slot v-bind:user="user">
        {{ user.lastName }}
      </slot>
    </p>
  </div>
</template>
<script>
// 作用域插槽
export default {
  data () {
    return {
      name: 'child4',

      user: {
        firstName: 'Huang',
        lastName: 'Yunkai'
      }
    }
  }
}
</script>
<style scoped>
</style>