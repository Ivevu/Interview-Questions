const merge = require('webpack-merge');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commonConfig = require('./webpack.common.config');

publicConfig = {
  /* 提取公共js缓存优化 */
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          parallel: true,
          cache: true,
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|redux|react-redux)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
  /* 设置该选项报错会定位到具体文件 */
  devtool: 'cheap-module-source-map',
  /* 配置babel-loader */
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'my-custom-hash',
              },
            },
          },
          'less-loader',
          'postcss-loader'
        ],
      }
    ]
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ]
}

module.exports = merge(commonConfig, publicConfig);