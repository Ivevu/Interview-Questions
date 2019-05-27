const path = require('path')
const devProxy = ['/pc', '/weixin', 'android'] // 代理
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
const env = process.env.NODE_ENV
let target = ''
let proxyObj = {}
devProxy.forEach((value, index) => {
  proxyObj[value] = {
    target: target,
    changeOrigin: true,
    pathRewrite: {
      [`^${value}`]: value
    }
  }
})

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  // 输出目录
  lintOnSave: false,
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // alias 配置
  chainWebpack: (config) => {
    config.resolve.symlinks(true);
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    proxy: 'https://activity.e.189.cn'
  },
  runtimeCompiler: true,
  pwa: {
    // name: '2月份活动',
    // themeColor: '#4DBA87',
    // msTileColor: '#000000',
    // appleMobileWebAppCapable: 'yes',
    // appleMobileWebAppStatusBarStyle: 'black',

    // // 配置 workbox 插件
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // InjectManifest 模式下 swSrc 是必填的。
    //   swSrc: 'dev/sw.js',
    //   // ...其它 Workbox 选项...
    // }
  },
  // 简单的方式
  // configureWebpack: {
  //     plugins: [
  //         new CompressionWebpackPlugin({
  //             asset: '[path].gz[query]',
  //             algorithm: 'gzip',
  //             test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  //             threshold: 10240,
  //             minRatio: 0.8
  //         })
  //     ]
  // },
  // 高级的方式
  configureWebpack: config => {
    // config.plugin('workbox');
    // config.plugins.push(new SkeletonWebpackPlugin({
    //   webpackConfig: {
    //     entry: {
    //       app: path.join(__dirname, './src/Skeleton.ts')
    //     }
    //   },
    //   minimize: true,
    //   quiet: true,
    //   router: {
    //     mode: 'hash',
    //     routes: [{
    //       path: '/home',
    //       skeletonId: 'home'
    //     },
    //     {
    //       path: '/',
    //       skeletonId: 'home'
    //     },
    //     {
    //       path: '*',
    //       skeletonId: 'common'
    //     }
    //     ]
    //   }
    // }))
    // if (process.env.NODE_ENV === 'production') {
    //   // 生产环境
    //   config.plugins.push(
    //     new CompressionWebpackPlugin({
    //       filename: '[path].gz[query]',
    //       algorithm: 'gzip',
    //       test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //       threshold: 10240,
    //       minRatio: 0.8
    //     })
    //   )
    // } else {
    //   // 开发环境

    // }
  },
  // CSS 相关选项
  css: {
    //extract: true,
    sourceMap: false,
    modules: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100,
            propList: ['*']
          })
        ]
      }
    }
  },

  // css: {
  //   extract: true,
  //   // 是否开启 CSS source map？
  //   sourceMap: false,
  //   // 为预处理器的 loader 传递自定义选项。比如传递给
  //   // sass-loader 时，使用 `{ sass: { ... } }`。
  //   modules: false,
  //   loaderOptions: { // 为所有的 CSS 及其预处理文件开启 CSS Modules。
  //     css: {},
  //     postcss: {
  //       plugins: [
  //         require('postcss-px2rem')({
  //           remUnit: 37.5
  //         })
  //       ]
  //     }
  //   }
  // },
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,
  // 配置 webpack-dev-server 行为。
  // devServer: {
  //   open: process.env.NODE_ENV === 'development',
  //   // host: 'localhost',
  //   port: 8080,
  //   https: false,
  //   hotOnly: false,
  //   disableHostCheck: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://vip.189.cn', // 需要请求的地址
  //       ws: true,
  //       changeOrigin: true, // 是否跨域
  //       pathRewrite: {
  //         '^/api': '' // 替换target中的请求地址，也就是说，在请求的时候，url用'/api'代替'http://vip.189.cn'
  //       }
  //     }
  //   }, // string | Object
  //   before: app => {}
  // },
  // 第三方插件的选项
  pluginOptions: {}
}
