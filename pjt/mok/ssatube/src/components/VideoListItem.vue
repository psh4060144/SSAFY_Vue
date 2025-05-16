<template>
  <div>
    <a href="">
      <p>
        <img :src="video.thumbnail">
        <span>{{ video.title }}</span>
      </p>
    </a>
    <hr>
  </div>
</template>

<script setup>
  defineProps ({
    video: Object
  })
</script>

<style scoped>

</style>