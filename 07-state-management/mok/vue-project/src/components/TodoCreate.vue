<template>
  <div>
    <h2>Todo Create</h2>
    <form @submit.prevent="onAdd">
      <input type="text" v-model="todoContent">
      <button>추가</button>
    </form>
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todos.js'
import { ref } from 'vue'

const todoContent = ref('')
const todoStore = useTodoStore()
const onAdd = function () {
  if (todoContent.value === '') {
    alert('내용을 입력하세요')
    return false
  } else {
    todoStore.addTodo(todoContent.value)
    todoContent.value = ''
  }
}

</script>

<style scoped>

</style>