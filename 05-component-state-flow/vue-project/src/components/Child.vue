<template>
  <div>
    <h1>Child</h1>
    <p>{{ userName }}</p>
    <p>{{ parentName }}</p>
    <button @click="$emit('changeUserName')">click</button>
    <ChildItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @some-event="onSomeEvent"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import ChildItem from './ChildItem.vue'
  defineProps({
    userName: String, 
    parentName: String
  })
  const items = ref([
    {id: 1, name: '사과'}, 
    {id: 2, name: '바나나'}, 
    {id: 3, name: '딸기'}, 
  ])

  const onSomeEvent = function (arg, name) {
    console.log('넘겨받은 데이터:')
    for (let i = 0; i < items.value.length; i ++) {
      console.log(items.value[i])
      if (arg.id === items.value[i].id) {
        items.value[i].name = name
      }
    }
  }
</script>

<style scoped>

</style>