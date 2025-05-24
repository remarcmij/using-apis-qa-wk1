# Event Loop and Call Stack

Folder : [4-event-loop-call-stack](4-event-loop-call-stack/)

This folder contains examples and explanations of the event loop and call stack in JavaScript. It demonstrates how asynchronous code is executed and how the call stack and event loop work together to manage execution contexts.

The event loop is a mechanism that allows JavaScript to perform non-blocking operations by using a single thread. It enables the execution of asynchronous code, such as callbacks and promises, while still allowing the main thread to handle other tasks.

The call stack is a data structure that keeps track of the execution context of the code. It follows the Last In First Out (LIFO) principle, meaning that the last function called is the first one to be executed.

The event loop continuously checks the call stack and the event queue. If the call stack is empty, it takes the first event from the queue and pushes it onto the call stack for execution. This process allows JavaScript to handle asynchronous operations without blocking the main thread.

There are two types of queues in the event loop:

- **Task Queue**: This queue contains tasks that are scheduled to be executed after the current stack is empty. These tasks include `setTimeout`, `setInterval`, and I/O operations.

- **Microtask Queue**: This queue contains tasks that are scheduled to be executed after the current stack is empty but before the next task from the task queue. These tasks include promise callbacks.

The event loop processes the microtask queue before the task queue, which means that promise callbacks will be executed before any other tasks in the task queue.

## Demo

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
