import {createRouter, createWebHistory} from 'vue-router'
import IndexView from '../views/IndexView.vue'
import NewView from '../views/NewView.vue'
import EditView from '../views/EditView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/new',
    name: 'new',
    component: NewView
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
