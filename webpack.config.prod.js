
module.exports = function (paths, loaders, plugins) {
  return {
    output: {
      path: paths.dist,
      filename: "bundle.js",
    },
    module: {
      rules: [
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
  };
};
