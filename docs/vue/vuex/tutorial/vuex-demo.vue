<template>
  <div>vuexDemo</div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
export default {
  name: '',
  props: [], // 父子组件间传递的数据
  components: {
  },

  data () {
    return {
      localNum: 100
    }
  },
  // 计算属性
  computed: {
    // 使用对象展开运算符将 state 混入computed 对象中
    ...mapState([
      // 将 `this.count` 映射为 `this.$store.state.count`
      'count'
    ]),
    ...mapState({
      // 将 `this.countAlias` 映射为 `this.count` 再映射为 `this.$store.state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalNum (state) {
        return state.count + this.localNum
      }
    }),

    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      // 将 `this.getTodos` 映射为 `this.$store.getters.getTodos`
      'getTodos',
      'doneTodos',
      'doneTodosCount',
      'getTodoById'
    ]),
    ...mapGetters({
      // 将 `this.getTodosAlias` 映射为 `this.getTodos` 再映射为 `this.$store.getters.getTodos`
      getTodosAlias: 'getTodos',
      doneTodosAlias: 'doneTodos',
      doneTodosCountAlias: 'doneTodosCount',
      getTodoByIdAlias: 'getTodoById'
    })
  },

  methods: {
    // 使用对象展开运算符将 mutation 混入 methods 对象中
    ...mapMutations([
      // 将 `this.PLUS_ONE()` 映射为 `this.$store.commit('PLUS_ONE')`
      'PLUS_ONE',
      'MINUS_ONE',

      // `mapMutations` 也支持载荷：
      // 将 `this.PLUS(n)` 映射为 `this.$store.commit('PLUS', n)`
      'PLUS',
      // 将 `this.MINUS(payload)` 映射为 `this.$store.commit('MINUS', payload)`
      'MINUS'
    ]),
    ...mapMutations({
      // 将 `this.PLUS_ONE_Alias()` 映射为 `this.PLUS_ONE` 再映射为 `this.$store.commit('PLUS_ONE')`
      PLUS_ONE_Alias: 'PLUS_ONE',
      MINUS_ONE_Alias: 'MINUS_ONE',
      // 将 `this.PLUS_Alias()` 映射为 `this.PLUS` 再映射为 `this.$store.commit('PLUS_ONE')`
      PLUS_Alias: 'PLUS',
      MINUS_Alias: 'MINUS'
    }),

    // 使用对象展开运算符将 actions 混入 methods 对象中
    ...mapActions([
       // 将 `this.PLUS_ONE_INACTIONS()` 映射为 `this.$store.dispatch('PLUS_ONE_INACTIONS')`
      'PLUS_ONE_INACTIONS',
      'MINUS_ONE_INACTIONS',

      // `mapActions` 也支持载荷：
      // 将 `this.PLUS_INACTIONS(plusNum)` 映射为 `this.$store.dispatch('PLUS_INACTIONS', plusNum)`
      'PLUS_INACTIONS',
      // 将 `this.MINUS_INACTIONS(payload)` 映射为 `this.$store.dispatch('MINUS_INACTIONS', payload)`
      'MINUS_INACTIONS'
    ]),
    ...mapActions({
      // 将 `this.PLUS_ONE_INACTIONS_Alias()` 映射为 `this.PLUS_ONE_INACTIONS()` 再映射为 `this.$store.dispatch('PLUS_ONE_INACTIONS')`
      PLUS_ONE_INACTIONS_Alias: 'PLUS_ONE_INACTIONS',
      MINUS_ONE_INACTIONS_Alias: 'MINUS_ONE_INACTIONS',
      // 将 `this.PLUS_INACTIONS_Alias()` 映射为 `this.PLUS_INACTIONS()` 再映射为 `this.$store.dispatch('PLUS_ONE_INACTIONS')`
      PLUS_INACTIONS_Alias: 'PLUS_INACTIONS',
      MINUS_INACTIONS_Alias: 'MINUS_INACTIONS'
    })
  },

  beforeCreate () {
    // 组件实例刚被创建，组件属性计算之前，如data属性等
    // Tips：可以在这加个loading事件
  },
  created () {
    // 组件实例创建完成，属性已绑定，但DOM还未生成，$el属性还不存在
    // Tips：在这结束loading，还做一些初始化，实现函数自执行，在这发起后端请求，拿回数据，配合路由钩子做一些事情

    // -----------------------Store-----------------------
    // console.log('store', this.$store)

    // -----------------------State-----------------------
    // console.log('state', this.$store.state)

    // 1.state
    // console.log('count', this.$store.state.count)
    // console.log('todos', this.$store.state.todos)

    // 2.mapState
    // console.log('count', this.count)

    // 2.Alias
    // console.log('countAlias', this.countAlias)
    // console.log('countPlusLocalNum', this.countPlusLocalNum)

    // -----------------------Getters-----------------------
    // console.log('getters', this.$store.getters)

    // 1.getter
    // console.log('getTodos', this.$store.getters.getTodos)
    // console.log('doneTodos', this.$store.getters.doneTodos)
    // console.log('doneTodosCount', this.$store.getters.doneTodosCount)
    // console.log('getTodoById', this.$store.getters.getTodoById(2))

    // 2.mapGetters
    // console.log('getTodos', this.getTodos)
    // console.log('doneTodos', this.doneTodos)
    // console.log('doneTodosCount', this.doneTodosCount)
    // console.log('getTodoById', this.getTodoById(2))

    // 2.Alias
    // console.log('getTodosAlias', this.getTodosAlias)
    // console.log('doneTodosAlias', this.doneTodosAlias)
    // console.log('doneTodosCountAlias', this.doneTodosCountAlias)
    // console.log('getTodoByIdAlias', this.getTodoByIdAlias(2))

    // ------------------------Mutations----------------------
    // console.log('mutations', this.$store.commit)

    // 1.mutation
    // console.log('count', this.count)
    // this.$store.commit('PLUS_ONE')
    // console.log('countAfterPLUS_ONE', this.count)
    // this.$store.commit('MINUS_ONE')
    // console.log('countAfterMINUS_ONE', this.count)
    // this.$store.commit('PLUS', 10)
    // console.log('countAfterPLUS(10)', this.count)
    // this.$store.commit('MINUS', {
    //   minusNum: 10
    // })
    // console.log('countAfterMINUS(10)', this.count)

    // 2.mapMutations
    // console.log('count', this.count)
    // this.PLUS_ONE()
    // console.log('countAfterPLUS_ONE', this.count)
    // this.PLUS(10)
    // console.log('countAfterPLUS(10)', this.count)
    // this.MINUS_ONE()
    // console.log('countAfterMINUS_ONE', this.count)
    // this.MINUS({
    //   minusNum: 10
    // })
    // console.log('countAfterMINUS(10)', this.count)

    // 2.Alias
    // this.PLUS_ONE_Alias()
    // console.log('countAfterPLUS_ONE_Alias', this.count)
    // this.PLUS_Alias(10)
    // console.log('countAfterPLUS_Alias(10)', this.count)
    // this.MINUS_ONE_Alias()
    // console.log('countAfterMINUS_ONE_Alias', this.count)
    // this.MINUS_Alias({
    //   minusNum: 10
    // })
    // console.log('countAfterMINUS_Alias(10)', this.count)

    // -----------------------Actions-----------------------
    // console.log('actions', this.$store.dispatch)

    // 1.分发action
    // this.$store.dispatch('PLUS_ONE_INACTIONS')
    // console.log('countAfterPLUS_ONE_INACTIONS', this.count)

    // 2.支持异步
    // this.$store.dispatch('MINUS_ONE_ASYNC_INACTIONS')
    // setTimeout(() => {
    //   console.log('countAfterMINUS_ONE_ASYNC_INACTIONS', this.count)
    // }, 1000)

    // 3.支持同样的载荷方式和对象方式进行分发
    // 写法一：载荷方式
    // this.$store.dispatch('PLUS_INACTIONS', 10)
    // console.log('countAfterPLUS_INACTIONS(10)', this.count)
    // this.$store.dispatch('MINUS_INACTIONS', {minusNum: 10})
    // console.log('countAfterMINUS_INACTIONS(10)', this.count)
    // 写法二：对象方式
    // this.$store.dispatch({
    //   type: 'MINUS_INACTIONS',
    //   minusNum: 10
    // })
    // console.log('countAfterMINUS_INACTIONS(10)', this.count)

    // 4.mapActions
    // this.PLUS_ONE_INACTIONS()
    // console.log('countAfterPLUS_ONE_INACTIONS', this.count)
    // this.MINUS_INACTIONS({
    //   minusNum: 1
    // })
    // console.log('countAfterMINUS_INACTIONS(1)', this.count)

    // 4.Alias
    // this.PLUS_ONE_INACTIONS_Alias()
    // console.log('countAfterPLUS_ONE_INACTIONS_Alias', this.count)
    // this.MINUS_INACTIONS_Alias({
    //   minusNum: 1
    // })
    // console.log('countAfterMINUS_INACTIONS_Alias(1)', this.count)

    // 5.组合action
    // console.log('count', this.count)
    // this.$store.dispatch('actionA').then(() => {
    //   console.log('countAfterActionA', this.count)
    // })

    // console.log('count', this.count)
    // this.$store.dispatch('actionB').then(() => {
    //   console.log('async from actionB')
    //   console.log('countAfterActionB', this.count)
    // })

    // console.log('count', this.count)
    // this.$store.dispatch('actionD').then(() => {
    //   console.log('async from actionD')
    //   console.log('countAfterActionD', this.count)
    // })
  },
  beforeMount () {
    // 模板编译/挂载之前
  },
  mounted () {
    // 模板编译/挂载之后
  },
  beforeUpdate () {
    // 组件更新之前
  },
  updated () {
    // 组件更新之后
  },
  beforeDestroy () {
    // 组件销毁前调用
    // Tips：你确认删除XX吗？
  },
  destroyed () {
    // 组件销毁后调用
    // Tips：当前组件已被删除，清空相关内容
  },

  // 数据监听
  watch: {
    keyName: {
      // 注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
      deep: true,
      handler (curVal, oldVal) {
        // console.log(curVal, oldVal)
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
