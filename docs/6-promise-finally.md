# Promise.finally()

Folder: `docs/6-promise-finally.md`

MDN Web Docs: [Promise.prototype.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

Promise.finally() is a method that allows you to execute a callback function when a Promise is settled, regardless of whether it was fulfilled or rejected. This can be useful for cleanup actions or to perform operations that should always run after the Promise's resolution.

## Examples

The examples are about finding the answer to [The Ultimate Question of Life, the Universe, and Everything](https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#_The_Answer_to_the_Ultimate_Question_of_Life,_the_Universe,_and_Everything_is_42), in brief the Meaning of Life. As we all know, the answer is 42.

The code gives itself thinking time. While it is thinking it logs every second a message "Thinking..." to the console. After a random thinking time (between 1 and 5 seconds) it either gives us the correct answer 42 or tell us that it doesn't know the answer. (The chances are 50/50.) After that, we expect the thinking to stop.

### Example 1: `1-finally.js`

The example is the base case. It doesn't use `.finally()`. For logging the "Thinking..." message every second we use `setInterval()`. For generating the answer we use a Promise and a `setTimeout()`that randomly resolves to the correct answer 42 or rejects with a message that it doesn't know the answer after a random delay.

Here is the code:

```javascript
function whatIsTheMeaningOfLife() {
  let count = 0;
  const intervalTimer = setInterval(() => {
    count += 1;
    process.stdout.write('\rThinking' + '.'.repeat(count));
  }, 1000);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(42);
      } else {
        reject(new Error("I don't have a clue."));
      }
    }, Math.floor(Math.random() * 5000) + 3000);
  });
}

console.log(
  'What is the answer to the Ultimate Question of Life, the Universe, and Everything?'
);

whatIsTheMeaningOfLife()
  .then((result) => {
    console.log('\nThe answer is:', result);
  })
  .catch((err) => {
    console.log('\nUnfortunately,', err.message);
  });
```

To run the example, `cd` into the `6-promise-finally` folder and run:

```bash
node 1-finally.js`
```

When you run the code, you will see the "Thinking..." messages in the console, followed by either the correct answer or an error message. However, the "Thinking..." messages will continue to be logged even after the answer is given, because the `setInterval()` is still running. To stop the program running in the terminal, you need to press <kbd>CTRL</kbd>+<kbd>C</kbd> on the keyboard.

### Example 2: `2-finally.js`

In this example, we use both `.then()` and  `.catch()` to stop the "Thinking..." messages after the Promise is settled by calling `clearInterval()` in both. We need both methods because we don't know in advance whether the Promise will be fulfilled or rejected. We also need to ensure that the promise returned by `whatIsTheMeaningOfLife()` still reflects the answer (i.e. 42 or "I don't know..."). That's why we return the `result` from the `.then()` handler and rethrow the error in the `.catch()` handler.

To run the example, run the following command in the terminal:

```bash
node 2-finally.js
```

Observe that the "Thinking..." messages will stop after the answer is given because we called `clearInterval()` in both `.then()` and `.catch()`.

### Example 3: `3-finally.js`

In this example, we use the `.finally()` method to stop the "Thinking..." messages after the Promise is settled. The `.finally()` method is called regardless of the Promise's outcome, making it a good place to put cleanup code, like in this case stopping the interval timer.

Run the example, by typing the following command in the terminal:

```bash
node 3-finally.js
```

Note that `.finally()` is called regardless of the Promise's outcome. It returns a promise that will settle with the same state as the promise it was called upon.  Therefore, we don't need to manually return the result or rethrow the error, as we did in the previous example.
