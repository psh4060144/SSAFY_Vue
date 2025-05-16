<template>
  <div>
    <h1>부모</h1>
    <p>App.vue 에서 넘어온 내용: {{ myMsg }}</p>
  </div>
</template>

<script setup>
  // import { defineProps } from 'vue'
  const props = defineProps ({
    myMsg: String
  })

</script>

<style scoped>

</style>