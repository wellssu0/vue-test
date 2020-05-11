import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 还有hash模式 // history模式,要后端处理一下
  base: process.env.BASE_URL,
  routes
})

export default router
