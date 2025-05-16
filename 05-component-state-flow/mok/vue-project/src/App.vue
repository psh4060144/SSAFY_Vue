<template>
  <div>
    {{ myMsg }}
    <Parent
      :my-msg="myMsg"
    />
    <hr>
    <h1>Todo List</h1>
    <TodoList
    :todos="todos"
    @item-delete="onItemDelete"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Parent from '@/components/Parent.vue'
  import TodoList from '@/components/TodoList.vue'
  const myMsg = ref('App.vue 의 내용입니다.')
  const todos = ref([
    {id: 0, content: '밥먹기', isCompleted: true}, 
    {id: 1, content: '실습하기', isCompleted: false}, 
    {id: 2, content: '퇴근하기', isCompleted: false}, 
  ])
  const onItemDelete = function (id) {
    todos.value = todos.value.filter(function (todo) {
      return todo.id !== id
    })
  }
</script>

<style scoped>

</style>