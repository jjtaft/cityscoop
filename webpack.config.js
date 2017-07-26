const webpack       = require('webpack');
const merge         = require('webpack-merge');
const loaders       = require('./webpack-loaders');
const plugins       = require('./webpack-plugins');
const paths         = require('./webpack-paths');

module.exports = {

    entry: ['babel-polyfill', paths.src],
      resolve: {
        alias: {
          components:  paths.components,
          containers:  paths.containers,
        },
        extensions: ['.js', '.jsx'],
      },
    output: {
      path: paths.dist,
      filename: "bundle.js",
    },
    module: {
      rules: [
        loaders.babel,
        loaders.style,
      ],
    },
    devtool: 'source-map',
    plugins: [
      plugins.loaderOptions({
        minimize: true,
      }),
      plugins.uglifyJs({
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          drop_console: true,
          dead_code: true,
          unused: true,
          conditionals: true,
  				comparisons: true,
  				sequences: true,
  				evaluate: true,
  				if_return: true,
  				join_vars: true,
        },
      }),
      plugins.definePlugin,
      plugins.genHtml({
        filename: 'index.html',
        template: 'template.html',
      }),
    ],
}