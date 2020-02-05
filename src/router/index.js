import Vue from 'vue'
import VueRouter from 'vue-router'
import Topnav from '../components/Topnav.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path:'/topnav',
    component:Topnav,
    children:[
      {path:'device',name:'device',component:() => import('../components/Device.vue')},
      {path:'weixin',name:'weixin',component:() => import('../components/Weixin.vue')},
      {path:'IM',name:'IM',component:() => import('../components/IM.vue')},
    ]
  },
  {path:'/',redirect:'/topnav/IM'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
