<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="toggleTitle">切换</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('标题一');
const toggleTitle = () => {
  title.value = title.value === '标题一' ? '标题二' : '标题一';
};
</script>

<style scoped>
/* 添加一些样式 */
h1 {
  color: #333;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>