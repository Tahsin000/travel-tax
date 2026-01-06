import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import BlogLayout from '../pages/blogs/BlogLayout.vue'
import BlogList from '../pages/blogs/BlogList.vue'
import BlogShow from '../pages/blogs/BlogShow.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  {
    path: '/blogs',
    component: BlogLayout, // parent wrapper
    children: [
      {
        path: '', // /blogs
        name: 'blogs.index',
        component: BlogList,
      },
      {
        path: ':slug', // /blogs/{slug}
        name: 'blogs.show',
        component: BlogShow,
        props: true, // passes slug as prop
      },
    ],
  },
]

export default createRouter({
  history: createWebHistory(), // uses normal URLs: /about
  routes,
})
