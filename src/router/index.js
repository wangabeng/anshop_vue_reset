import Vue from 'vue'
import Router from 'vue-router'
import ItemCenter from '@/components/item-center/ItemCenter'
import Cart from '@/components/cart/Cart'

Vue.use(Router)

// export default new Router({
export default new Router({
  routes: [
    {
      path: '/itemcenter',
      name: 'ItemCenter',
      component: ItemCenter,
      // 路由内导航卫士 只有在'/itemcenter/12 =》 '/itemcenter/34 这样跳转 才会触发
      // beforeEnter: (to, from, next) => {
      //   // ...
      //   console.log(' itemcenter to, from, next', to, from, next);
      // }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ],

})
