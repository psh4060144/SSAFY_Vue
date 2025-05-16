<template>
  <div>
    <h1>App.vue</h1>
    <!-- userName 변수에 들어있는 값을 Parent 컴포넌트에게 prop. -->
    <!-- prop 받을 데이터가 담길 변수명은 HTML 의 속성 형태로 작성. -->
    <!-- 속성명은 kebob-case 로 작성해야 하며, HTML 의 속성에는 문자열만 담을 수 있다. -->
    <Parent
      :user-name="userName"
      @change-user-name="onChangeUserName"
    />
  </div>
</template>

<script setup>
import Parent from '@/components/Parent.vue'
import { ref } from 'vue'
const userName = ref('Alice')
const onChangeUserName = function () {
  userName.value = 'Charlie'
}
</script>

<style scoped>

</style>