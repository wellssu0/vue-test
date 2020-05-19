import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    alias: '/home_page', // 别名,输入这个路径也能进home
    name: 'Home',
    component: Home
  },
  // 路由懒加载
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/countup',
    name: 'CountTo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/CountTo.vue')
  },
  // 动态路由
  {
    path: '/list/:id',
    name: 'List',
    component: () => import('@/views/List.vue')
  },
  // 嵌套路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/Child.vue')
      }
    ]
  },
  // 命名视图
  {
    path: '/name_component',
    name: 'NameComponent',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    }
  },
  // 重定向
  {
    path: '/main',
    redirect: to => '/'
  },
  {
    path: '/ab',
    redirect: to => {
      return {
        name: 'About'
      }
    }
  },
  // * 的匹配规则放在最末尾,来响应那些匹配不到的路径
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]

export default routes
