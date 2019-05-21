import Vue from 'vue'
import App from './App'
import store from '@/store/index'
import VueRouter from 'vue-router'
import {currency} from "@/currency";
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

Vue.config.productionTip = false
Vue.filter('currency', currency)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: ProductList },
  { path: '/cart', component: ShoppingCart }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
