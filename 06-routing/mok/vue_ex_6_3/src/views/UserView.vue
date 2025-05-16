<template>
  <div>
    <h2>User View</h2>
    <RouterLink :to="{name: 'profile'}">유저 프로필</RouterLink> | 
    <RouterLink :to="{name: 'posts', params:{id: 5}}">유저 프로필</RouterLink>
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'

const route = useRoute()
const username = ref(route.params.username)
</script>
