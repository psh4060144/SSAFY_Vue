<template>
  <div>
    <ul>
      <TodoListItem
      v-for="todo in todos"
      :todo="todo"
      @item-delete="onItemDelete"
      />
      <!-- @click="onItemClick" -->
      <!-- @5s="on5s" -->
    </ul>
  </div>
</template>

<script setup>
  import TodoListItem from '@/components/TodoListItem.vue'
  const props = defineProps ({
    todos: Array
  })
  // const onItemClick = function () {
  //   console.log('아이템 클릭됨')
  // }
  // const on5s = function (arg) {
  //   console.log('5초가 지났습니다.')
  //   console.log(arg)
  // }
  const emit = defineEmits ([
    'item-delete'
  ])
  const onItemDelete = function (id) {
    console.log(`삭제 예정 아이템: ${id}`)
    emit('item-delete', id)
  }
</script>

<style scoped>

</style>