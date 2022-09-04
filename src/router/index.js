import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboardview from '../views/DashboardView.vue'
import inputPostView from '../views/inputPost.vue'
import AllEventsview from '../views/AllEvents.vue'
import AboutView from '../views/AboutView.vue'
import postLembaga from '../views/post-lembaga.vue'
import formput from '../views/from-PutLembaga.vue'
import loginadmin from"../views/login.vue"
import detailEvent from '../views/eventdetail.vue'
import eventuai from '../views/eventUAI.vue'
import eventOrmawa from '../views/eventOrmawa.vue'
import eventUkkm from '../views/eventUkkm.vue'
import loginLembaga from '../views/loginLembaga.vue'
import DashboardViewLembaga from '../views/DashboardViewLembaga.vue'
import formPostAbout from '../views/form-aboutUs.vue'
import PutLembaga from '../views/put-lembaga.vue'
import eventNotConfirmSadmin from '../views/eventNotConfirmSadmin.vue'
import eventConfirmSadmin from '../views/eventConfirmSadmin.vue'
import eventDeniedSadmin from '../views/eventDeniedSadmin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/dashboard',
    name: 'dashboard',
    component:Dashboardview
  },
  {
    path:'/dashboardlembaga/:lembagaId',
    name: 'dashboard',
    component:DashboardViewLembaga
  },
  {
    path:'/inputpost/:lembagaId',
    name: 'inputpost',
    component:inputPostView
  },
  {
    path:'/postlembaga',
    name: 'postlembaga',
    component:postLembaga
  },
  {
    path:'/allevents',
    name: 'allevents',
    component:AllEventsview
  },
  {
    path:'/eventsuai',
    name: 'eventsuai',
    component:eventuai
  },
  {
    path:'/eventsormawa',
    name: 'eventsormawa',
    component:eventOrmawa
  },
  {
    path:'/eventsukkm',
    name: 'eventsukkm',
    component:eventUkkm
  },
  {
    path:'/about',
    name: 'about',
    component:AboutView
  },
  {
    path:'/detailevent/:id',
    name: 'detailevent',
    component:detailEvent
  },
  {
    path:'/putevent/:id',
    name: 'putevent',
    component:formput
  },
  {
    path:'/login',
    name: 'login-admin',
    component:loginadmin
  },
  {
    path:'/loginlembaga',
    name: 'login-lembaga',
    component:loginLembaga
  },
  {
    path:'/formabout',
    name: 'form-about',
    component:formPostAbout
  },
  {
    path:'/putlembaga/:id',
    name: 'put-lembaga',
    component:PutLembaga
  },
  {
    path:'/eventnotconfirmSadmin',
    name: 'put-lembaga',
    component:eventNotConfirmSadmin
  },
  {
    path:'/eventconfirmSadmin',
    name: 'put-lembaga',
    component:eventConfirmSadmin
  },
  {
    path:'/eventdeniedSadmin',
    name: 'put-lembaga',
    component:eventDeniedSadmin
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
