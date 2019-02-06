const webpack = require('webpack');

function rewireHotLoader(config, env) {
  if (env === 'production') {
    return config;
  }

  // Find a rule which contains eslint-loader
  const condition = u => typeof u === 'object' && u.loader && u.loader.includes('eslint-loader');
  const rule = config.module.rules.find(rule => rule.use && rule.use.some(condition));

  if (rule) {
    const use = rule.use.find(condition);

    if (use) {
      // Inject the option for eslint-loader
      use.options.emitWarning = true;
    }
  }

  return config;
}

module.exports = rewireHotLoader;
