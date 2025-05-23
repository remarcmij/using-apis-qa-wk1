# Q&A Week 1

## Today's Agenda

- Welcome and intros:
  - where from?
  - what did you do previously?
  - any prior programming experience?

(Start recording!)

1. [Blocking Demo](#1-blocking-demo)

2. [Promise Quiz](#2-promise-quiz)
  
3. [Promise Evolution](#3-promise-evolution)

4. [Event Loop and Call Stack](#4-event-loop-and-call-stack)

5. [Promises, Event Loop and Microtasks](#5-promises-event-loop-and-microtasks)

6. Prep exercise: Cat Walk

7. Q&A

More event loop videos:

- <https://youtu.be/eiC58R16hb8?si=NESGMiIrCvNFrEjT>
- <https://youtu.be/cCOL7MC4Pl0>

## 1. Blocking Demo

Folder: [1-blocking-demo](./1-blocking-demo/)

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

## 2. Promise Quiz

Folder: [2-promise-quiz](2-promise-quiz/)

A promise is an object that represents the eventual completion (or failure)
 of an asynchronous operation and its resulting value.

A promise may be in one of 3 possible states:

- `pending`: initial state, neither fulfilled nor rejected.
- `fulfilled`: meaning that the operation was completed successfully.
- `rejected`: meaning that the operation failed.

 A promise has two methods:

- `then()`: to handle the fulfilled case.
- `catch()`: to handle the rejected case.

 A promise can be created using the Promise constructor.

### Instructions

Starting with `1-promise.js`, analyze the given code and predict the expected output.

## 3. Promise Evolution

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

## 4. Event Loop and Call Stack

Folder : [4-event-loop-call-stack](4-event-loop-call-stack/)

This folder contains examples and explanations of the event loop and call stack in JavaScript. It demonstrates how asynchronous code is executed and how the call stack and event loop work together to manage execution contexts.

The event loop is a mechanism that allows JavaScript to perform non-blocking operations by using a single thread. It enables the execution of asynchronous code, such as callbacks and promises, while still allowing the main thread to handle other tasks.

The call stack is a data structure that keeps track of the execution context of the code. It follows the Last In First Out (LIFO) principle, meaning that the last function called is the first one to be executed.

The event loop continuously checks the call stack and the event queue. If the call stack is empty, it takes the first event from the queue and pushes it onto the call stack for execution. This process allows JavaScript to handle asynchronous operations without blocking the main thread.

There are two types of queues in the event loop:

- **Task Queue**: This queue contains tasks that are scheduled to be executed after the current stack is empty. These tasks include `setTimeout`, `setInterval`, and I/O operations.

- **Microtask Queue**: This queue contains tasks that are scheduled to be executed after the current stack is empty but before the next task from the task queue. These tasks include promise callbacks.

The event loop processes the microtask queue before the task queue, which means that promise callbacks will be executed before any other tasks in the task queue.

### Demo

1. Open the `index.html` file in your browser.
2. Open the Developer Tools (F12) .
3. Press the "Start" button to start. Because the demo code includes a `debugger` statement inside the `console_log()` function, the Developer Tools will automatically switch to the Sources tab, with execution being paused at the `debugger` statement, as shown below:

   ![debugger](assets/event-loop-call-stack.png)

4. On the right-hand side, you will see the Call Stack and Scope sections. The Call Stack shows the current execution context, while the Scope section shows the variables in the current scope. Notice that the Call Stack shows that the `console_log()` function is currently at the top of the stack and paused at line 3 (i.e., at the `debugger` statement). This function was called by the `main()` function in line 7.

5. Click the blue "Resume script execution" button (or press F8) to continue running the code. The code will run until it pauses at the same `debugger` statement again. This time the Call Stack will show that the `console_log()` function is called from line 25 in the `main()` function. At this point in the execution two timers have been started with `setTimeout()` (both with a 0ms delay), and an immediately resolved promise has been created.

    The `main()` function is about to exit. Therefore, when we continue execution in the next step, the `main()` function's execution context will be dead and gone.

6. Click "Resume script execution". The code will run until it reaches the end of the `main()` function. At this point, the Call Stack will be empty, and the event loop will start processing queued tasks, giving precedence to the Micro Task Queue (promises) over the Task Queue (`setTimeout()`, etc.).

7. Click "Resume". The Call Stack will now show `console_log()` at the top of the stack, called from the first `.then()` callback at line 19. The `.then()` method at line 18 in the `main()` function body. Observe that because an arrow function is used for the callback the call stack shows it as `(anonymous)`: in contrast to (regular) named functions, arrow functions have no name.

8. Click "Resume". This time the Call Stack will show that `console_log()` is called from the second `.then()` callback.

9. Click "Resume". With the Micro Task Queue and Call Stack now empty, the JavaScript engine will start to pick up tasks from the Task Queue.  The Call Stack will show that `console_log()` is called from the first `setTimeout()` callback at line 10.

10. Click "Resume". The Call Stack will show that `console_log()` is called from the second `setTimeout()` callback at line 14.

11. Click "Resume". The Call Stack will be empty. All tasks have been executed. No more tasks are queued. The demo is finished.

## 5. Promises, Event Loop and Microtasks

Folder: [5-promises-event-loop-microtasks](5-promises-event-loop-microtasks/)

This folder contains examples and explanations of how promises, the event loop, and microtasks work together in JavaScript.

> **Note**: The goal of this section is to help you understand how promises work under the hood and how they interact with the event loop and microtasks. You do not need think in these terms when you use promises in your own code. However, understanding these concepts will help you better understand how JavaScript handles asynchronous operations and how to write more efficient and effective code.

When a promise is settled it creates a microtask and enqueues it in the microtask queue. This microtask is responsible for executing the appropriate callbacks (from either `.then()` or `.catch()`) associated with the promise. The event loop processes the microtask queue before the task queue, ensuring that promise callbacks are executed before any other tasks in the task queue.

Each call to `.then()` creates a new promise. (Note that [`.catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) is just syntactic sugar for `.then(null, onRejected)`, i.e. it is just a `.then()` in disguise). Because each `.then()` and `.catch()` creates a new promise, you can chain them together to create a sequence of asynchronous operations.

To illustrate how the microtasks are used by promises, the examples in this folder use a custom replacement of `Promise` called `CustomPromise`. This replacement is a simplified version of the native `Promise` object, designed to logs its internal events to the console. (There is no need to understand its internal implementation to follow along, nor do we expect this from you.)

Each promise that created with `CustomPromise` is assigned a unique ID that is used to label the output of each event, as illustrated in the table below:

| Event | Example Message |
|-------|---------|
| A promise is created | `[promise#1 created (pending)]` |
| A promise is fulfilled | `[promise#1 fulfilled]` |
| A promise is rejected | `[promise#1 rejected]` |
| A microtask is enqueued | `[microtask#1 enqueued]` |
| A microtask starts | `[microtask#1 start]` |
| A microtask exits | `[microtask#1 exit]` |

### Examples

It is best to run the examples in the VSCode Integrated Terminal, as the console output uses colour and is easier to read there. To do this, open the Integrated Terminal in VSCode by selecting `Terminal` > `New Terminal` from the menu bar. This will open a terminal window at the bottom of the VSCode window.

Then, use the following command (you only need to do this once):

```bash
npm install
```

This will install a library (if not already installed) that is used to colour the console output for the examples.

Next, descend into the `5-promises-event-loop-microtasks` folder by running the following command (tip: because the terminal supports tab completion, you can type `cd 5` and then press the `Tab` key to complete the folder name):

```bash
cd 5-promises-event-loop-microtasks
```

### Example 1: `1-resolved-chain.js`

Open the file `1-resolved-chain.js` in the VSCode editor. You will find a function called `main()` that creates a promise that is immediately resolved. (Because `resolve()` is called without a value here it resolves to the value `undefined`.) A chain of `.then()`  and `.catch()` method calls hangs off the promise.

Note that the `.catch()` method calls in this (and the next) example are somewhere in the middle of the chain. This is not a common pattern, but it is used here to illustrate how a rejected promise is handled in the chain. In practice, you would typically add a `.catch()` method call at the end of the chain to handle any errors that may occur.

To run the example, use the following command in the terminal (you can again use tab completion to help you by typing `node 1` and then pressing the `Tab` key):

```bash
node 1-resolved-chain.js
```

This will run the example and print the output to the terminal. You should see a series of messages that show the order in which the events occur.
The output will look something like this:

```text
<<< main starting >>>
[promise#1 resolved → undefined]
[microtask#1 enqueued]
[promise#2 created (pending)]
[promise#3 created (pending)]
[promise#4 created (pending)]
[promise#5 created (pending)]
[promise#6 created (pending)]
<<< main ending >>>

[microtask#1 start]
then#1
[promise#2 resolved → undefined]
[microtask#2 enqueued]
[microtask#1 exit]

[microtask#2 start]
then#2
[promise#3 resolved → undefined]
[microtask#3 enqueued]
[microtask#2 exit]

[microtask#3 start]
[promise#4 resolved → undefined]
[microtask#4 enqueued]
[microtask#3 exit]

[microtask#4 start]
[promise#5 resolved → undefined]
[microtask#5 enqueued]
[microtask#4 exit]

[microtask#5 start]
then#5
[promise#6 resolved → undefined]
[microtask#5 exit]

```

Before we will go over the output in detail, let's take a look at a version of the code that makes it easier to reason about the association between the output and the code. This version is in the file `2-resolved-unchained.js` and is functionally identical to the previous example, except that each promise in the chain is assigned to a separate variable with a name `promiseX`, where `X` is the promise sequence number. Verify for yourself that the output is the same as in the previous example by running the following command and then comparing the output with the previous version:

```bash
node 2-resolved-unchained.js
```

**Discussion:**

- As mentioned earlier, each `.then()` or `.catch()` method called on a promise creates a new promise. This is why you see multiple `[promise#X created (pending)]` messages in the output. Promise#1 is created by calling the Promise constructor with `new` and further promises (2-6) are created by the `.then()` and `.catch()` method calls. So the `main()` function creates 6 promises in total.

- In the code promise#1 was created as an immediately resolved promise. Because a `.then()` method was called on it, the promise, upon settlement, enqueues a microtask (microtask#1) to schedule the processing of that `.then()`. Observe that promise#2 up to promise#6 remain pending during the execution of `main()`.

- With `main()` completed, the call stack is now empty and the event loop will start processing the microtask queue. There it will find microtask#1 and start its execution. Because promise#1 was fulfilled (i.e. resolved) microtask#1 will run the `onFulfilled` callback of the `promise1.then()`. This callback logs the message `then#1` on the console. The return value of the callback will become the fulfillment value of promise#2. Because the `onFulfilled` callback does not return anything here (thus effectively returning `undefined`), promise#2, returned by `promise1.then()`, is resolved to `undefined`. Because `.then()` was called on promise#2 a new microtask (microtask#2) is enqueued. With that, microtask#1 is done and exits.

- With the call stack empty again, the event loop now picks up microtask#2 and starts its execution. It runs the `onFulfilled` callback of promise#2, which logs the message `then#1` on the console. The return value of this callback will become the fulfillment value of promise#3. Again, because the `onFulfilled` callback does not return anything here (thus effectively returning `undefined`), promise#3 is now resolved to `undefined`. This in turn causes microtask#3 to be enqueued. With that, microtask#2 is done and exits.

- Promise#3 is resolved in a similar manner when microtask#2 is executed.

- Promise#4 is created for the first `.catch()` in the chain. Because the promise of the `.then()` preceding it was resolved its `onRejected` callback is _not_ called. Instead, it passes on a promise that is resolved to the value of the previous promise (i.e. `undefined`).

- The same thing happens for promise#5, which is associated with the second `.catch()` in the chain.

| Microtask | Event | Promise | Message |
|-----------|-------|---------|---------|
| 1         | start | 1       | then#1  |
| 1         | exit  | 2       |         |
| 2         | start | 2       | then#2  |
| 2         | exit  | 3       |         |
| 3         | start | 3       |         |
| 3         | exit  | 4       |         |
| 4         | start | 4       |         |
| 4         | exit  | 5       |         |
| 5         | start | 5       | then#5  |
| 5         | exit  | 6       |         |
| 6         | start | 6       |         |
| 6         | exit  |         |         |

## Questions
