import Vue from 'vue'
import VueRouter from 'vue-router'
import goodlist from '../views/goodlist.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',name: 'goodlist',component: goodlist},
  {path: '/shangjia',name: 'shangjia', component: () => import( '../views/Shangjia.vue')},
  {path: '/pingjia',name: 'pingjia', component: () => import( '../views/Pingjia.vue')}
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
