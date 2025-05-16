<template>
  <div>
    <SearchBar />
    <div>
      <VideoDetail />
      <VideoList />
    </div>
  </div>
</template>

<script setup>
  import SearchBar from '@/components/SearchBar.vue'
  import VideoDetail from '@/components/VideoDetail.vue'
  import VideoList from '@/components/VideoList.vue'
</script>

<style scoped>

</style>