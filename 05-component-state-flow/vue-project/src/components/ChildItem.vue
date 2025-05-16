<template>
  <div>
    <h1>ChildItem</h1>
    <p>{{ item.id }}</p>
    <p>{{ item.name }}</p>

    <!-- 버튼을 클릭하면 someEvent 발생 -->
    <!-- <button @click="$emit('someEvent')">클릭</button> -->
    <button @click="buttonClick">클릭</button>
  </div>
</template>

<script setup>
  const props = defineProps({
    item: Object
  })
  console.log(props)
  console.log(props.item)

  const emit = defineEmits (['someEvent'])
  const buttonClick = function () {
    emit('someEvent', props.item, '구아바')
  }

  // 데이터 수정도 자녀 쪽에서 할 수 있긴 한데, 거의 절대 이렇게 안한다. 그냥 하지 마라.
  // 그럼 데이터 수정은 어떻게 하냐? 이벤트를 올려서 부모쪽에서 바꾸게 한다.
  // if (props.item.name === '사과') {
  //   props.item.name = '파인애플'
  // }

  </script>

<style scoped>

</style>