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