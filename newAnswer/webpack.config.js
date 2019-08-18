const merge = require('webpack-merge');
const path = require('path')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const px2rem = require('postcss-px2rem');

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
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      }
    }
  },
  /* 设置该选项报错会定位到具体文件 */
  devtool: 'cheap-module-source-map',
  /* 配置babel-loader */
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              minimize: true
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'less-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '/static/images/[contenthash].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                quality: '80-90',
                speed: 1,
              },
            },
          },
          'less-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: [px2rem({ remUnit: 75 })]
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '/static/css/[name].css',
      chunkFilename: '/static/css/[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    // process.env.NODE_ENV = 'production' ? new BundleAnalyzerPlugin() : null
  ]
}

module.exports = merge(commonConfig, publicConfig);