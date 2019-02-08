// Mostly inlined from within `customize-cra` https://www.npmjs.com/package/customize-cra
const getBabelLoader = config => {
  // Filtering out rules that don't define babel plugins.
  const babelLoaderFilter = rule =>
    rule.loader &&
    rule.loader.includes("babel") &&
    rule.options &&
    rule.options.plugins;

  // First, try to find the babel loader inside the oneOf array.
  // This is where we can find it when working with react-scripts@2.0.3.
  let loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf;

  let babelLoader = loaders.find(babelLoaderFilter);

  // If the loader was not found, try to find it inside of the "use" array, within the rules.
  // This should work when dealing with react-scripts@2.0.0.next.* versions.
  if (!babelLoader) {
    loaders = loaders.reduce((ldrs, rule) => ldrs.concat(rule.use || []), []);
    babelLoader = loaders.find(babelLoaderFilter);
  }
  return babelLoader;
}

// Curried function that uses config to search for babel loader and pushes new plugin to options list.
const addBabelPlugin = plugin => config => {
  getBabelLoader(config).options.plugins.push(plugin);
  return config;
};

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
  
  // If in development, add 'react-hot-loader/babel' to babel plugins.
  return addBabelPlugin('react-hot-loader/babel')(config);
}

module.exports = rewireHotLoader;
