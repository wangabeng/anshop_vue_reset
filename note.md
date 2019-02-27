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
安装sass的依赖包
```
npm install --save-dev sass-loader
//sass-loader依赖于node-sass
npm install --save-dev node-sass
```
在build文件夹下的webpack.base.conf.js的rules里面添加配置
```
      {
         test: /\.sass$/,
         loaders: ['style', 'css', 'sass']
      }
```
在组件中使用(lang="scss" 而不是sass)
```
<style scoped lang="scss">
```