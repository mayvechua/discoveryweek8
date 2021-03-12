import PageContent from './PageContent.vue'
import orders from './Orders.vue'
import modify from './Modify.vue'
import dashboard from './Dashboard.vue'

export default [
    { path: '/', component: PageContent },
  { path: '/orders', component: orders },
  { path: '/dashboard', component: dashboard },
  { path: '/modify',name:'modify', component: modify, props:true},
]
