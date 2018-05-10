const webpack = require('webpack');
const {injectBabelPlugin} = require('react-app-rewired');

function rewireHotLoader(config, env) {
  if (env === 'production') {
    return config;
  }

  config.module.rules[0].use[0].options.emitWarning = true;
  return injectBabelPlugin(['react-hot-loader/babel'], config);
}

module.exports = rewireHotLoader;
