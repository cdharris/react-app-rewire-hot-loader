const webpack = require('webpack');
const {injectBabelPlugin} = require('react-app-rewired');

function rewireHotLoader(config, env) {
  if (env === 'production') {
    return config;
  }

  config.entry.splice(1, 0, 'react-hot-loader/patch');

  return injectBabelPlugin(['react-hot-loader/babel'], config);
}

module.exports = rewireHotLoader;
