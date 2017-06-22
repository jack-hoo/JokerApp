import Vue from 'vue'
import Vonic from 'vonic'
import store from './vuex/store'
import Vuex from 'vuex'
// Page Components
import Home from './components/Home.vue'
import About from './components/JokeDetail/About.vue'
import Index from './components/Index.vue'
import Joke_Sel from './components/joke_post.vue'
import User from './components/user.vue'
import Joke_Fill from './components/JokePost/fill_joke.vue'
import Joke_Detail from './components/JokeDetail/details.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
// Routes
/*const routes = [
  { path: '/', component: Home },
  /!*{ path: '/about', component: About },
  { path: '/home', component: Index}*!/
]*/

Vue.use(Vuex)

let routes = [
  {
    path: '/',
    component: Index,
    children: [
      { path: '/', component: Home },
      { path: '/add_joke', component: Joke_Sel},
      { path: '/user', component: User },
    ]
  },
  //jokePost路由组
  {
    path: '/fill_joke',
    component: Joke_Fill,
    beforeEnter: (to, from, next) => {
      if(store.state.isLogged==false && to.path != '/login'){
        next({path:'/login'})
      }else {
        next()
      }
    }
  },
  {
    path: '/joke_det',
    component: Joke_Detail
  },

  //用户界面路由组

  //登录
  {
    path:'/login',
    component: Login
  },
  //注册
  {
    path:'/register',
    component:Register
  }

]

Vue.use(Vonic.app, {
  routes: routes,
  store:store
})
