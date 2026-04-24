import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostVue from '@/views/PostVue.vue'
import GetData from '@/views/GetData.vue'
import PutData from '@/views/PutData.vue'
import DeleteData from '@/views/DeleteData.vue'


const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/post',
    component: PostVue,
  },
  {
    path: '/get',
    component: GetData,

  },
  {
    path: '/put',
    component: PutData,

  },
  {
    path: '/delete',
    component: DeleteData,

  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
