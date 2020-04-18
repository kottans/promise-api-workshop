# Promise API workshop

Your task is to implement Promise static methods ([.resolve](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve),
[.reject](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject),
[.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all),
[.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race),
[.allSettled](https://github.com/tc39/proposal-promise-allSettled),
[.any](https://github.com/tc39/proposal-promise-any))
from scratch via a `Promise` constructor. For this, you will create
a custom class called `CustomPromise`, that will extend the native `Promise`.

Open `index.js` to begin.

## Requirements

1. Note that after you implement a method, it's allowed to use it in other methods (e.g. `Promise.resolve`).

1. Methods behavior should match the TC39 specification, so pay attention to the requirements described in the comments.

1. Some inputs specify an _iterable_, but for simplicity we'll be accounting for arrays only.

1. Be sure to validate inputs — throw a `TypeError` if the input is invalid!

## Test it!

After you're done, check your implementation by running `npm run test` in the console.

If you'd like to run tests separately for individual methods, try:

```sh
npm run test [nameOfTheMethod].js
```

For example, to run `CustomPromise.resolve` tests only:

```sh
npm run test resolve.js
```
