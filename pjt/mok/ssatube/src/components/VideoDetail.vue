<template>
  <div>
    <h1>video detail</h1>
    <iframe :src="`https://www.youtube.com/embed/${videoStore.selectedItemId}`" frameborder="0"></iframe>
  </div>
</template>

<script setup>
  import { useVideoStore } from '@/stores/videos'

  const videoStore = useVideoStore()
</script>

<style scoped>

</style>