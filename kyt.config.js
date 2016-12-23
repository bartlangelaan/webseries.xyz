
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  reactHotLoader: true,
  debug: false,
  hasServer: false,
  modifyWebpackConfig: (config, options) => {

    // Enable MobX
    const babelLoader = config.module.rules.find(loader => loader.loader === 'babel-loader')
    babelLoader.options.plugins.unshift('transform-decorators-legacy');
    babelLoader.options.presets.push('stage-1');

    if (options.type === 'client') {
      config.output.publicPath = '';
      config.plugins.push(new HtmlWebpackPlugin({
        template: 'src/index.ejs'
      }));
    }

    config.plugins.push(
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [require('postcss-cssnext')],
          context: '/',
        },
      })
    );

    return config;
  }
};
