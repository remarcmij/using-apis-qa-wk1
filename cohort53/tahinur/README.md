# Question 2

 In this code, I want to stop the animation gracefully if the user clicks a “Stop” button. How can I integrate cancellation into a Promise chain or an async function?

```js
function animate() {
  return walk().then(dance).then(walkBack);
}
```

## Answer

You cannot cancel a promise. A promise is a passive construct; you cannot use it to control the underlying asynchronous process. I sometimes compare it to a doctor's stethoscope: it allows you to listen to bodily sounds but you can't use them to treat the patient.

You can of course add provisions in the code to cancel the underlying asynchronous process and then, for instance, call `reject()` on a promise.

This is what I did in the modified catwalk code from your prep exercise solution. I introduced a button that, when clicked, sets a global variable `isCancelled` to `true` (actually it toggles that value). Then, in the `walk()` function this variable is checked repeatedly in the `setInterval` callback and the promise is rejected if found to be `true`.

Of course, in this catwalk example we cannot control the animation of the GIF images. These are controlled by the browser itself, out of reach of our JavaScript code.
