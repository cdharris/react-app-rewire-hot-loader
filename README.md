# `react-app-rewire-hot-loader`

Add the [`react-hot-loader`](https://github.com/gaearon/react-hot-loader) to your `create-react-app` app via [`react-app-rewired`](https://github.com/timarney/react-app-rewired).

Because who wants their app, state, and styles automatically reloading all the time?

## Installation

```sh
npm install --save react-app-rewire-hot-loader

# If you don't already, you also need:
npm install --save react-app-rewired
npm install --save react-hot-loader
```

## Usage

1. In the `config-overrides.js` of the root of your project you created for `react-app-rewired` add this code:

```JS
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

/* config-overrides.js */
module.exports = function override (config, env) {
  config = rewireReactHotLoader(config, env)
  return config
}
```

2. Follow 'step 2' from https://github.com/gaearon/react-hot-loader , replicated below:

```js
Mark your root component as hot-exported:
// App.js
import React from 'react'
import { hot } from 'react-hot-loader'

const App = () => <div>Hello World!</div>

export default process.env.NODE_ENV === “development” ? hot(module)(App) : App
```

3. Replace 'react-scripts' with 'react-app-rewired' in package.json

```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-app-rewired eject"
  },
```

That's it, you now have hot reloads!


## License

Licensed under the MIT License, Copyright ©️ 2017 Chris Harris. See [LICENSE.md](LICENSE.md) for more information.
