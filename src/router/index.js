import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/Web/PostList'
import PostDetail from '@/components/Web/PostDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/post/:id',
      name: 'PostDetail',
      component: PostDetail
    }
  ]
})
