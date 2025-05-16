<template>
  <div>
    <h1>search bar</h1>
    <button @click="onSearchBtnClick">click</button>
  </div>
</template>

<script setup>
import { useVideoStore } from '@/stores/videos.js'

const videoStore = useVideoStore()
const onSearchBtnClick = function () {
  videoStore.searchVideo()
}
</script>

<style scoped>

</style>