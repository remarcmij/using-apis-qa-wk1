<!-- cSpell:disable -->

# Q&A Week 1

## Today's Agenda

- Welcome and intros:
  - where from?
  - what did you do previously?
  - any prior programming experience?

(Start recording!)

- Blocking

- Promise experiments

- Demo of custom promises and microtasks

- Event loop experiments in the browser debugger

- Prep exercise: Cat Walk

- Go through questions

More event loop videos:

- <https://youtu.be/eiC58R16hb8?si=NESGMiIrCvNFrEjT>
- <https://youtu.be/cCOL7MC4Pl0>

## Promise evolution

- 2011 jQuery 1.5 `deferred` promise-like object, e.g. `$.get()` Ajax call: <https://api.jquery.com/category/deferred-object/>
- 2012 Promise/A+ specification: <https://promisesaplus.com/>
- q, Bluebird: Promise libraries
- ES2015 native `Promise` support
- ES2017 native `async/await` support

## Blocking

Folder: [blocking](./blocking/)

This example demonstrates the negative impact of **blocking code** on web page responsiveness. In JavaScript, "blocking" code is code that prevents the browser from doing anything else—such as updating the UI or responding to user input—until it finishes running. In contrast, **non-blocking** code allows the browser to continue handling other tasks while waiting for an operation to complete.

The example implements a simple timer that counts down from 10 to 0 seconds. When the counter reaches zero, a beep will sound.

It provides two timer modes: a normal (non-blocking) mode using the standard `setTimeout` function, and a "blocking" mode using a custom `setTimeoutBlocking` function. The blocking version uses a busy-loop that continually checks the system clock to see if the requested timeout has been reached. This simulates a long-running or CPU-intensive task.

The example writes the countdown to the console, so please open the Developer Tools on the Console tab when you run this example.

With the "Blocking" checkbox unchecked, click the "Start" button to start the timer. The timer will count down from 10 to 0, updating the displayed count every second. Let it run to completion and take note of the countdown in the developer console.

With the "Blocking" checkbox still unchecked, click the "Start" button again and after a second or two press the "Stop" button. Notice that the timer stops as expected.

Now, check the "Blocking" checkbox to use the blocking version of timer. Press the "Start" button. Because JavaScript runs in a single thread and uses an event loop to manage tasks, blocking code prevents the browser from updating the UI or responding to user actions. As a result, when the blocking timer is running:

- The "Start" button remains red.
- The counter display does not update.
- The "Stop" button is unresponsive.

However, the console output still show the countdown and you will still hear a beep when the timer finishes.

**Takeaway:**  
Blocking code makes the web page unresponsive and leads to a poor user experience. Always write non-blocking, asynchronous code to keep your web apps smooth and interactive.

## Questions

### Ahmad Zetouny

Q: I really like how Promises improve code readability compared to callbacks, but I still don't fully understand the major advantages. Besides easier error handling, resolve and reject feel like a simple return statement, they don't stop loops,  intervals or even timeouts. So: Should we always use Promises, even in small apps? Or are they more useful in large apps with many async operations?
Is it possible to abort or cancel a Promise once it's running?
(edited)

### Oleksandr Starshynov

Q: I can use Promise or Promise.all to organize my code. But such constructs means that I wait for their result and only then can I move on with the code. If I, for example, combine five promises in promise.all, but am only willing to wait 30 seconds for execution, how can I interrupt the wait process and after 30 seconds count all uncompleted promises as completed with an error?

### Yana Seniuk

How can you implement a cancellable promise?
Сause promise with pending status and waiting for resolve or reject. But what if the user cancelled action and we don't need to wait response now. Or  if the waiting time for the user more than 10 sec I want to cancel promise. (edited)

### Nikita Stefanchuk

Q: Why does a .then() chain continue to execute even after one of the Promises fails if you don't use .catch()? And in what cases is it better to use .catch() instead of the second argument in .then() for error handling?
