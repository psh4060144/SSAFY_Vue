<template>
  <div>
    <h1>App.vue</h1>
    <hr>
    <TodoCreate />
    <hr>
    <TodoList />
  </div>
</template>

<script setup>
  import TodoCreate from '@/components/TodoCreate.vue'
  import TodoList from '@/components/TodoList.vue'
</script>

<style scoped>

</style>