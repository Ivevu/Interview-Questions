const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

commonConfig = {
  // 入口
  entry: {
    app: ["@babel/polyfill", path.join(__dirname, 'src/index.js')]
  },
  /* 输出 */
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: './static/js/[name].[chunkhash].js'
  },
  /* 目录别名 */
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers'),
    }
  },
  /* 配置babel-loader */
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      
    ]
  },
  plugins: [
    // 清除旧的打包文件
    new CleanWebpackPlugin(),
    // 自动更新js到html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
  ]
}


module.exports = commonConfig