import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import SecondPage from '@/components/SecondPage.vue';

const routes = [
  // 根路径重定向到 /hello
  { path: '/', redirect: '/hello' },

  // 确保有 /hello 路径
  {
    path: '/hello',
    component: HelloWorld
  },

  // 第二个页面
  {
    path: '/second',
    component: SecondPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


/* 
import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import SecondPage from "@/components/SecondPage.vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:HelloWorld,
        },
        {
            path:'/second',
            component:SecondPage
        }
    ]
})
export default router;

*/