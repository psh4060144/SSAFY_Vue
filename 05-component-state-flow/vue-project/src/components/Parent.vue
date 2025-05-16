<template>
  <div>
    <h1>Parent</h1>
    <p>{{ userName }}</p>
    <Child
      :user-name="userName"
      parent-name="Bella"
      @change-user-name="$emit('changeUserName')"
    />
</div>
</template>

<script setup>
import Child from './Child.vue'

// prop 정보 정의.
// HTML 속성은 kebob-case 지만, JS 변수명은 camelCase로 적어야 한다.
defineProps ({
  userName: String
})
</script>

<style scoped>

</style>