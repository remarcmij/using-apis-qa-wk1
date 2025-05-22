/*******************************************************************************
 * 1-promise.js
 *
 * A promise is an object that represents the eventual completion (or failure)
 * of an asynchronous operation and its resulting value.
 *
 * A promise may be in one of 3 possible states:
 * - pending: initial state, neither fulfilled nor rejected.
 * - fulfilled: meaning that the operation was completed successfully.
 * - rejected: meaning that the operation failed.
 *
 * A promise has two methods:
 * - then: to handle the fulfilled case.
 * - catch: to handle the rejected case.
 *
 * A promise can be created using the Promise constructor.
 *
 ******************************************************************************/

const promise = new Promise((resolve, reject) => {
  // Do nothing
});

console.log(1, typeof promise);
console.log(2, promise);

/* 
What will be the output of the above code?

1 ...
2 ...
*/
