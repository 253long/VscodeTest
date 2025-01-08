<template>
  <div class="hello">
    <p> 我是第一个路由组件</p>
    <button @click="clickFun">click me</button>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router';
const router=useRouter();
const clickFun=async()=>{
const response = await axios.get('http://localhost:8080/hello');
alert(response.data);
  router.push('/second')
}
</script>

<style scoped>
</style>

