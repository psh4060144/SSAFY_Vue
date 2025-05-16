<template>
  <div>
    <h1>video list</h1>
    <VideoListItem
      v-for="video in videoStore.videoList"
      :key="video.id"
      :video="video"
      @click.prevent="onItemClick(video.id)"
    />
  </div>
</template>

<script setup>
import { useVideoStore } from '@/stores/videos.js'
import VideoListItem from '@/components/VideoListItem.vue'

const videoStore = useVideoStore()

const onItemClick = function (id) {
  videoStore.updateSelectedItemId(id)
}
</script>

<style scoped>

</style>