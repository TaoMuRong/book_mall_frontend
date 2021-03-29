/* eslint-disable no-unused-vars */

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'


// 解决vue-cli和vue-router版本冲突问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}



const HomeLayout = () => import('../layout/HomeLayout.vue')
const AdminLayout = () => import('../layout/AdminLayout.vue')
const Login = () => import('../views/Login.vue')
const ErrorPage = () => import('../views/ErrorPage.vue')
const BookMall = () => import('../views/home/BookMall.vue')
const Cart = () => import('../views/home/Cart.vue')
const Order = () => import('../views/home/Order.vue')
const SortManagement = () => import('../views/admin/SortManagement.vue')
const BookManagement = () => import('../views/admin/BookManagement.vue')
const NoPermission = () => import('../views/NoPermission.vue')
const BookDetail = () => import('../views/home/BookDetail.vue')






Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      roles: ['admin', 'user']
    }
  },
  {
    name: 'no_permission',
    path: '/no_permission',
    component: NoPermission,
    meta: {
      roles: ['admin', 'user']
    }
  },
  {
    name: "home",
    path: '/home',
    component: HomeLayout,
    meta: {
      roles: ['admin', 'user']
    },
    children: [{
        name: 'book_mall',
        path: 'book_mall',
        meta: {
          roles: ['admin', 'user']
        },
        component: BookMall
      },
      {
        name: 'cart',
        path: 'cart',
        meta: {
          roles: ['admin', 'user']
        },
        component: Cart
      },
      {
        name: 'order',
        path: 'order',
        meta: {
          roles: ['admin', 'user']
        },
        component: Order
      },
      {
        name: 'book_detail',
        path: 'book_detail',
        meta: {
          roles: ['admin', 'user']
        },
        component: BookDetail
      },
    ]
  },
  {
    name: "admin",
    path: '/admin',
    component: AdminLayout,
    meta: {
      roles: ['admin']
    },
    children: [{
      name: 'sort_management',
      path: 'sort_management',
      meta: {
        roles: ['admin']
      },
      component: SortManagement
    }, {
      name: 'book_management',
      path: 'book_management',
      meta: {
        roles: ['admin']
      },
      component: BookManagement
    }, ]
  },
  {
    name: 'not_found',
    path: '/404',
    component: ErrorPage,
    meta: {
      roles: ['admin', 'user']
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]


const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  const role = store.getters.getRole
  // if(store.state.token) {
  //   if(to.path === "/login") {
  //     next('/home')
  //   } else {
  //     if(to.meta.roles.includes(role)){
  //       next()
  //     } else {
  //       next('/no_permission')
  //     }
  //   }
  // } else {
  //   if(to.path === '/login') {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
  if (to.path === "/login") {
    next()
  } else {
    if (to.meta.roles.includes(role)) {
      next()
    } else {
      next('/no_permission')
    }
  }
})

export default router