import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/login",
      component: () => import(/* webpackChunkName: "about" */ './views/user/login.vue')

    },
    {
      path: '/',
      name: 'main',
      component: () => import( /* webpackChunkName: "about" */ './views/main.vue'),
      // 嵌套路由
      children: [{
        // 把path置空就可以一进http: //localhost:8080/#/ 就显示主页
            path: '',
            name: '',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Home.vue')
          },{
          path: 'userlist',
          name: '',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/user/userlist.vue')
        },{
          path: 'canvas',
          name: '',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( /* webpackChunkName: "about" */ './views/myCanvas.vue')
        }
        
      ]
    },
    
  ]
})
