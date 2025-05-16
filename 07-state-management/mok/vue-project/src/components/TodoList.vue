<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <TodoListItem
      :todo = todo
      v-for="todo in store.todos"/>
    </ul>
  </div>
</template>

<script setup>
  import TodoListItem from '@/components/TodoListItem.vue'
  import { useTodoStore } from '@/stores/todos.js'

  const store = useTodoStore()

</script>

<style scoped>

</style>