const webpack = require('webpack');
const {injectBabelPlugin} = require('react-app-rewired');

function rewireHotLoader(config, env) {
  if (env === 'production') {
    return config;
  }

  return injectBabelPlugin(['react-hot-loader/babel'], config);
}

module.exports = rewireHotLoader;
