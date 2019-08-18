const merge = require('webpack-merge');
const path = require('path')
const webpack = require('webpack')
const commonConfig = require('./webpack.common.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const px2rem = require('postcss-px2rem');
const devConfig = {
  // 入口
  entry: {
    app: ['react-hot-loader/patch', path.join(__dirname, 'src/index.js'), "@babel/polyfill"]
  },
  output: {
    /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
    filename: '[name].[hash].js'
  },
  /* 本地服务器配置 */
  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
  /* 设置该选项报错会定位到具体文件 */
  devtool: 'inline-source-map',
  /* 配置babel-loader */
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'my-custom-hash',
              },
            },
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [px2rem({ remUnit: 75 })]
            }
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2,
              name: '[contenthash].[ext]',
            },
          },
        ],
      }
    ]
  },
  plugins: [
    // 热加载
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ]
}

module.exports = merge({
  customizeArray(a, b, key) {
    /*entry.app不合并，全替换*/
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);