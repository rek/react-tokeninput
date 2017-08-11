'use strict';

/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
const webpack = require('webpack')
const WebpackBaseConfig = require('./webpack.base.config')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// var path = require('path');
class WebpackDistConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      cache: false,
      devtool: 'source-map',
      output: {
        path: path.resolve('./dist'),
        filename: 'react-tokeninput.js',
      },
      stats: {
          // Add asset Information
          assets: true,
          // Add information about cached (not built) modules
          cached: true,
          // Add children information
          children: true,
          // Add chunk information (setting this to `false` allows for a less verbose output)
          chunks: true,
          // Add built modules information to chunk information
          chunkModules: true,
          // Add the origins of chunks and chunk merging info
          chunkOrigins: true,
          // Add errors
          errors: true,
          // Add details to errors (like resolving log)
          errorDetails: true,
          // Add the hash of the compilation
          hash: true,
          // Add built modules information
          modules: true,
          // Add public path information
          publicPath: true,
          // Add information about the reasons why modules are included
          reasons: true,
          // Add the source code of modules
          source: true,
          // Add timing information
          timings: true,
          // Add webpack version information
          version: true,
          // Add warnings
          warnings: true
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
      ]
    };

    // Deactivate hot-reloading if we run dist build on the dev server
    this.config.devServer.hot = false;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'prod';
  }
}

module.exports = WebpackDistConfig;
