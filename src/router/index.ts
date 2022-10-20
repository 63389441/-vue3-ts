import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes:Array<RouteRecordRaw>=[{
  path:'/',
  name:'login',
  component:()=>import('../views/login-view.vue')
}]
const router = createRouter({
  history:createWebHashHistory(),
  routes
})
export default router