import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import ItemCenter from '@/components/item-center/ItemCenter'
import Cart from '@/components/cart/Cart'
import Login from '@/components/login/Login'

Vue.use(Router)

// export default new Router({
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        showFooter: true,  // 设置导航隐藏显示
        requireAuth: true,
      }
    },
    {
      path: '/itemcenter',
      name: 'ItemCenter',
      component: ItemCenter,
      meta: {
        show: true,  // 设置导航隐藏显示
        requireAuth: true,
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        showFooter: false // 如果此参数为false 则隐藏footer
      }
    }
  ],

})
