// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入jquery
import $ from 'jquery'
import App from './App'
import router from './router'
import store from './store'
// rem布局字体自适应
import fontSize from './common/js/fontSize'

// axios
import axios from 'axios'
Vue.prototype.$http = axios

import 'common/sass/index.scss'

// 导入vuex
import {mapActions, mapGetters} from 'vuex'



Vue.config.productionTip = false



// 全局路由守卫 有效 
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next(); // 放行 必须放行才能进入
        }
        else { // 如果token不存在 则跳转到login页面
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else { // 如果不需要登录权限
        next(); // 直接放行
    }

    // 判断显示footer
    if (to.meta.showFooter) { // 更改
      // 
    }

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {

  },
  computed: {
    ...mapGetters([
      'token'
    ]),
  },
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted () {
    fontSize(); // 自适应rem布局
  }
})