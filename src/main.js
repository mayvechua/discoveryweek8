import Vue from 'vue'
import App from './App.vue'
import QuantityCounter from './QuantityCounter.vue'
import PageContent from './PageContent.vue'
import Shop from './Shop.vue'
import Orders from './Orders.vue'
import Login from './Login.vue'
import menu from './menu.vue'
import VueRouter from 'vue-router' 
import Routes from './routes.js'
import modify from './Modify.vue'
import dashboard from './Dashboard.vue'
Vue.config.productionTip = false

Vue.component('Orders',Orders)
Vue.component('Shop',Shop)
Vue.component('Dashboard',dashboard)
Vue.component('Login',Login)
Vue.component('QuantiCounter',QuantityCounter)
Vue.component('PageContent',PageContent)
Vue.component('modify',modify)
Vue.component('menu',menu)
Vue.use(VueRouter) 

const myRouter = new VueRouter({
  routes : Routes,
  mode:'history'
})
new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')
