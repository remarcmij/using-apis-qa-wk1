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

Note: In modern applications we prefer native promises over the older `jQuery` and external promise libraries. The examples for the older versions are provided here for demo purposes only.

TODO: discuss the examples.
