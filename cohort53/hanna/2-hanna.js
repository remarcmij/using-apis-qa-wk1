async function sleepy() {
  await new Promise((r) => setTimeout(r, 1000));
  console.log('I’m awake');
}
const result = sleepy();
console.log(result); // ❓ what is this? => Promise { <pending> }

// Note: you can use `await` at the top level of a module. This
// in addition to its normal use in `async` functions.
console.log(await result); // I'm awake
