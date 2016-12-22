
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  reactHotLoader: true,
  debug: false,
  hasServer: false,
  modifyWebpackConfig: (config, options) => {

    const babelLoader = config.module.rules.find(loader => loader.loader === 'babel-loader')
    babelLoader.options.plugins.push('transform-decorators-legacy');

    console.log(babelLoader.options.plugins);

    if (options.type === 'client') {
      config.plugins.push(new HtmlWebpackPlugin({
        template: 'src/index.ejs'
      }));
    }

    return config;
  }
};
