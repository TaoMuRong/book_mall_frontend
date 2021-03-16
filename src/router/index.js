import Vue from 'vue'
import VueRouter from 'vue-router'


const Login = () => import('../views/Login.vue')
const ErrorPage = () => import('../views/ErrorPage.vue')
const Home = () => import('../views/home/Home.vue')
const Admin = () => import('../views/admin/Admin.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: ErrorPage
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  routes
})

export default router
