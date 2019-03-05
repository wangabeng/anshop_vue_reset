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

import 'common/sass/index.scss'

// 全局路由守卫 有效 
router.beforeEach((to, from, next) => {
  // console.log(next);
  next(false);
  console.log('after next');
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted () {
    fontSize(); // 自适应rem布局
  }
})
