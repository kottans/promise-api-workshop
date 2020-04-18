/*
 * Your task is to implement Promise static methods (.resolve, .reject, .all, .race, .allSettled, .any) via a Promise constructor.
 *
 * Note that after you implement a method, it's allowed to use it in other methods (e.g. `Promise.resolve`).
 *
 * Methods behavior should match the TC39 specification, so pay attention to the requirements described in the comments.
 *
 * Some inputs specify an "iterable", but for simplicity we'll be accounting for arrays only.
 *
 * Be sure to validate inputs — throw a TypeError if the input is invalid!
 *
 * After you're done, check your implementation by running
 * `npm run test`
 * in the console.
 *
 * If you'd like to run tests separately for individual methods, try:
 * `npm run test [nameOfTheMethod].js`
 *
 * For example, to run CustomPromise.resolve tests only:
 * `npm run test resolve.js`
 */

class CustomPromise extends Promise {
  // Accepts a value, returns a Promise resolved with that value.
  // If the value is a thenable, attempts to unwrap that thenable before outputting a value
  static resolve(value) {
    // 👉
  }
  // Accepts a value, returns a Promise rejected with that value.
  static reject(value) {
    // 👉
  }
  // Accepts an iterable of Promises, fires each one simultaneously and outputs a Promise.
  // If at least one Promise in the passed iterable was rejected, the output Promise is immediately rejected with reason of that rejected Promise.
  // If at least one Promise in the passed iterable was resolved, the output Promise is immediately resolved with reason of that resolved Promise.
  static race(iterable) {
    // 👉
  }
  // Accepts an iterable of Promises, fires each one simultaneously and outputs a Promise.
  // If at least one Promise in the passed iterable was rejected, the output Promise is immediately rejected with reason of that rejected Promise.
  // If all Promises in the passed iterable were resolved, put them in an array and resolve the output Promise with that array.
  static all(iterable) {
    // 👉
  }
  // Accepts an iterable of Promises, fires each one simultaneously and outputs a Promise.
  // If at least one Promise in the passed iterable was resolved, the output Promise is immediately resolved with value of that resolved Promise.
  // If all Promises in the passed iterable were rejected, put them in an array and reject the output Promise with that array.
  static any(iterable) {
    // 👉
  }
  // Accepts an iterable of Promises, fires each one simultaneously and outputs a Promise.
  // If all Promises in the passed iterable were resolved or rejected, put them in an array and resolve the output Promise with an array of state snapshots, e.g.:
  // [{ status: 'fulfilled', value: v }, { status: 'rejected', reason: error }].
  static allSettled(iterable) {
    // 👉
  }
}

export default CustomPromise;
