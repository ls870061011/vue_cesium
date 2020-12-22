/* eslint-disable no-param-reassign */
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

// The path to the CesiumJS source code
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/styles/variables.scss";
        @import "~@/styles/mixin.scss";
        `,
      },
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';
      config.devtool = 'source-map'; // 开发环境显示源码，方便调试
    }

    config.plugins = [
      ...config.plugins,
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
          { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
          { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
        ],
      }),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify(''),
      }),
    ];
  },
  chainWebpack: (config) => {
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ]);
    // 修复HMR（热更新）失效
    config.resolve.symlinks(true);

    // 移除prefetch插件
    config.plugins.delete('prefetch');

    // 设置别名
    config.resolve.alias.set('cesium', resolve(cesiumSource));
  },
};
