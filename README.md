# `react-app-rewire-hot-loader`

Add the [`react-hot-loader`](https://github.com/gaearon/react-hot-loader) to your `create-react-app` app via [`react-app-rewired`](https://github.com/timarney/react-app-rewired).

Because who wants their app, state, and styles automatically reloading all the time?

## Installation

```sh
yarn add react-app-rewire-hot-loader
# or 
npm install --save react-app-rewire-hot-loader
```

## Usage

In the `config-overrides.js` of the root of your project you created for `react-app-rewired` add this code:

```JS
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  return config;
}
```

That's it, you now have hot loads!


## License

Licensed under the MIT License, Copyright ©️ 2017 Chris Harris. See [LICENSE.md](LICENSE.md) for more information.