<template>
  <li>
    <input type="checkbox" v-model="todo.isCompleted">
    <span>{{ todo.content }}</span>
    <button @click="onDeleteClick">삭제</button>
  </li>
</template>

<script setup>
  const props = defineProps ({
    todo: Object
  })
  // const emit = defineEmits ([
  //   '5s'
  // ])
  // '5s' 이벤트는 스크립트가 동작하고 5초 뒤에 발생.
  // setTimeout(function () {
  //   emit('5s', props.todo.id)
  // }, 5000)

  const emit = defineEmits ([
    'item-delete'
  ])
  const onDeleteClick = function () {
    emit('item-delete', props.todo.id)
  }
</script>

<style scoped>

</style>