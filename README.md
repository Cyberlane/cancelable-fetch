[![Version](http://img.shields.io/npm/v/cancelable-fetch-adv.svg)](https://www.npmjs.org/package/cancelable-fetch-adv)
[![npm](https://img.shields.io/npm/dt/cancelable-fetch-adv.svg)](Downloads)

# cancelable-fetch-adv

Adds a `cancel()` method to the Promise on fetch, useful when doing type-ahead or similar.

Easiest usage would be to add this to your polyfill file.

## Example

```js
require('watchwg-fetch');
require('cancelable-fetch-adv');
```
