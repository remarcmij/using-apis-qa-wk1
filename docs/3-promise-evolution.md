# Promise Evolution

Folder: [3-promise-evolution](3-promise-evolution/)

Promises were introduced as a native feature in JavaScript with ES2015 (ES6). However, the concept of promises has been around for a long time and has evolved over the years. Below is a timeline of significant events in the evolution of promises:

| Year | Description | Example |
|------|-------------|---------|
| 1995? | Callbacks   | [1-callbacks](promise-evolution/1-callbacks) |
| 2011 | 2011 jQuery 1.5 `deferred` promise-_like_ object, e.g. `$.get()` Ajax call: <https://api.jquery.com/category/deferred-object/> | [2-jquery-1.5](promise-evolution/2-jquery-1.5) |
| 2011 | Q Promise promise library. | [3-q-library](promise-evolution/3-q-library) |
| 2012 | Promise/A+ specification: <https://promisesaplus.com/> | - |
| 2013 | Bluebird promise library. | - |
| 2015 | ES2015 native `Promise` support. Broad browser support in 2016. | [4-promises-es6](promise-evolution/4-promises-es6) |
| 2017 | ES2017 native `async/await` support. Broad browser support in 2018. | [5-async-await](promise-evolution/5-async-await) |

Notes: 

1. In modern applications we prefer native promises over the older `jQuery` and external promise libraries. The examples for the older versions are provided here for demo purposes only.
2. The `async/await` syntax is the topic for week 2. We show it here to wet your appetite, but stick to `.then()` and `.catch()` for this week's assignments.

## Examples

The examples are about finding the answer to [The Ultimate Question of Life, the Universe, and Everything](https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#_The_Answer_to_the_Ultimate_Question_of_Life,_the_Universe,_and_Everything_is_42), in brief the Meaning of Life. As we all know, the answer is 42. Our examples with try and give this answer after some random thinking time. There will be a 50% chance that the answer will be found.

To run an example, open the corresponding HTML file in a browser.

Here is the code from the `index.js` file from the callbacks version:

```javascript
var answerContainer = document.querySelector('#answer');

function whatIsTheMeaningOfLife(successCallback, errorCallback) {
  answerContainer.classList.add('heartbeat');

  setTimeout(function () {
    answerContainer.classList.remove('heartbeat');
    if (Math.random() > 0.5) {
      successCallback(42);
    } else {
      errorCallback(new Error("I don't have a clue."));
    }
  }, Math.floor(Math.random() * 5000) + 3000);
}

whatIsTheMeaningOfLife(
  function (result) {
    answerContainer.classList.add('success');
    answerContainer.textContent = 'The answer is: ' + result;
  },
  function (error) {
    answerContainer.classList.add('fail');
    answerContainer.textContent = 'Unfortunately, ' + error.message;
  }
);
```

All examples will use a `whatIsTheMeaningOfLife()` function, which simulates a random delay before returning the answer or an error. The implementation differs across the examples to reflect the different methods as listed in the table above, but the core functionality remains the same.
