import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import Binding from "../views/binding_view.vue"
import Conditional from "../views/conditional.vue" 
import List from "../views/list_rendering.vue"
import Method from "../views/MethodVue.vue"
import Handling from "../views/eventAndfrom_handling.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/a',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },{
      path:'/binding',
      name:'binding_vue',
      component: Binding
    },{
      path:'/conditional',
      name:'conditional',
      component: Conditional
    },{
      path:'/list',
      name:'list',
      component: List
    },{
      path:'/method',
      name:'method',
      component: Method,
    },{
      path:'/handling',
      name:'handling',
      component: Handling,
    }
  ]
})

export default router
