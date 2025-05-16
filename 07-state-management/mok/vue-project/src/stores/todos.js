import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', () => {
  let id = 0
  const todos = ref([
    {id: id++, content: '실습실 복습', isCompleted: false}, 
    {id: id++, content: '알고리즘 복습', isCompleted: false}, 
    {id: id++, content: 'JS 복습', isCompleted: false}, 
    {id: id++, content: 'Vue 복습', isCompleted: false}, 
  ])

  const deleteTodo = function (id) {
    todos.value = todos.value.filter(function (todo) {
      return todo.id !== id
    })
  }

  const addTodo = function (todo) {
    todos.value.push({id: id++, content: todo, isCompleted: false})
  }
  return { todos, deleteTodo, addTodo }
})
