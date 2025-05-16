<template>

  <li>
    <input type="checkbox" v-model="todo.isCompleted">
    <span :class="{completed: todo.isCompleted}">{{ todo.content }}</span>
    <button @click="onDelete(todo.id)">삭제</button>
  </li>

</template>

<script setup>
  import { useTodoStore } from '@/stores/todos'

  defineProps ({
    todo: Object
  })
  const todoStore = useTodoStore()
  const onDelete = function (id) {
    todoStore.deleteTodo(id)
  }
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>