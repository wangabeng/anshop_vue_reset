# 1 初始化vue-cli 及webpack
# 安装webpack(全局安装)
```
npm install webpack webpack-cli -g
```

# 全局安装 vue-cli
```
npm install --global vue-cli
```

# 在项目文件夹下初始化vue init webpack
```
vue init webpack
```

# 安装依赖
```
npm install (cnpm install
)
```
( 如果安装速度太慢。可以安装淘宝镜像，打开命令行工具，输入：
 npm install -g cnpm --registry=https://registry.npm.taobao.org
 然后使用cnpm来安装 )

# 启动项目
```
npm run dev
```

# 配置别名 build/webpack.base.conf.js

```
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('src'),
      'common': resolve('src/common'),
      'components': resolve('src/components'),
      'api': resolve('src/api'),
      'base': resolve('src/base')
    }
  },
```

# 项目目录
```
----src-|---App.vue
        |---main.js
        |---api // 工具目录
        |
        |--base // 基本公共组件
        |
        |--components // 基本功能组件
        |
        |--common----fonts // 静态资源文件
        |          |--image
        |          |--js
        |          |--sass
        |
        |--router----index.js // vue-router
        |          |--
        |          |--
        |          |--
        |
        |--store------actions.js // vuex
        |          |--getters.js
        |          |--index.js
        |          |--mutations.js
        |          |--mutation-type.js
        |          |--state.js
        |

----index.html

```

# vue-cli全局引入jQuery  
1.首先在package.json里加入，  
```
dependencies:{
 "jquery" : "^2.2.3"
}
```
然后 nmp install  
2.在webpack.base.conf.js里加入  
```
var webpack = require("webpack")
```

3.在module.exports的最后加入
```
plugins: [
 new webpack.optimize.CommonsChunkPlugin('common.js'),
 new webpack.ProvidePlugin({
     jQuery: "jquery",
     $: "jquery"
 })
]
```

4.然后一定要重新 run dev  
5.在main.js 引入就ok了  
```
import $ from 'jquery
```

# 安装sass
1 安装sass的依赖包  
```
npm install --save-dev sass-loader
//sass-loader依赖于node-sass
npm install --save-dev node-sass
```
2  
在组件中使用(lang="scss" 而不是sass)
```
<style scoped lang="scss">
```
3 出现的问题 图标是个框框 无法正常显示  
出现的原因，是因为路径引用的原因：(参照https://blog.csdn.net/mxf_bear/article/details/80505295)   
```
These relative modules were not found:

* ./common/.fonts/fontawesome-webfont.eot in ./node_modules/_css-loader@0.28.11@css-loader?{"sourceMap":true}!
```
  
解决步骤：
1 awesome.scss中url路径修改 ../fonts 改为 common/fonts 
```
// ~相对路径
url('~common/fonts/fontawesome-webfont.eot?v=4.7.0')
```
同时需要在webpack.base.conf.js修改配置别名
```
  'src': resolve('src'),
  'common': resolve('src/common'),
```
2 build/utils.js中添加 publicPath: '../../'  
```
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../' //解决打包后字体文件路径错误问题
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
```

# 关于打包后js css等文件路径报错问题解决  
config/index.js中
```
assetsPublicPath: './', // 改为相对路径
```

# 小结 项目中关于路径的基本配置  
1 config/index.js中
```
assetsPublicPath: './', // 改为相对路径
```
2 build/utils.js中添加 publicPath: '../../'  
```
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../' //解决打包后字体文件路径错误问题
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
```
# package-lock.json和package.json
在执行`npm install`的时候，就会在当前目录生成一个`package-lock.json`的文件。
5.4.2版本后，如果改了package.json，且package.json和lock文件不同，那么执行`npm i`时npm会根据package中的版本号以及语义含义去下载最新的包，并更新至lock。如果两者是同一状态，那么执行`npm i `都会根据lock下载，不会理会package实际包的版本是否有新。

# 使用vue-devtools调试
1 在谷歌应用商店安装vue-devtools  
2 打开谷歌开发者模式  
更多工具 - 扩展程序 - 右上角 打开开发者模式  
3 F12 右上角 vue 即可打开使用  

# Vue.use(vueLazyload,{}) https://segmentfault.com/a/1190000012865122

# npm 报错This is probably not a problem with npm. There is likely additional logging output above.
可能由于种种版本更新的原因需要执行  
```
npm install
```
重新安装一次，如果还是不可以的话，在把之前装的都清空
```
rm -rf node_modules
rm package-lock.json
npm cache clear --force
npm install
```

# 前端实现登录拦截
https://segmentfault.com/a/1190000008383094 (最完善)
实现逻辑   
## 一 路由拦截 
通过vur-route的导航卫士监听 beforeEach监听to  
首先判断即将进入的路由自定义参数是否需要登录验证
1 if 如果需要登录验证  
    if 如果在vuex中有保存token 则放行 next()  
    else 如果没有token 则next跳转到login页面  
2 else 如果不需要登录验证 则直接放行next()   

代码如下：  
1 路由配置  
```
const routes = [
    {
        path: '/',
        name: '/',
        component: Index
    },
    {
        path: '/repository',
        name: 'repository',
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Repository
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];
``` 
定义完路由后，我们主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断。  
```
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next(); // 放行
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
})
``` 

## axios request和response拦截 
要想统一处理所有http请求和响应，就得用上 axios 的拦截器。通过配置http response inteceptor，当后端接口返回401 Unauthorized（未授权），让用户重新登录。
```
// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });
```   

# 重定向 不能触发beforeEach的问题
比如 浏览器输入地址localhost:8080/ 使其重定向到localhost:8080/ 但是此时并没有触发路由的beforeEach。
解决办法：挂载路由放到最后 就是说定义beforeEach要放在挂载路由之前。router.start(App, '#app')

# vue派发表单提交submit事件
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>helloform_Vue</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <script src="./vue.js"></script>
    </head>
    <body>
    <div class="hello">
        <ul>
            <form @submit.prevent="submit">
                <input type="text" name="name" v-model="inputtext.name">
                <input type="password" name="password" v-model="inputtext.password">
                <input type="submit" value="提交">
            </form>
        </ul>
    </div>
    <script>
        var vm = new Vue({
            el: '.hello',
            data: {
                
                inputtext:{}
            },
            methods: {
                submit: function() {
                    console.log(this.inputtext);
                }
            },
        })
    </script>
 
    </body>
</html>

```

# 使用axios