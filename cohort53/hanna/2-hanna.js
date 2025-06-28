async function sleepy() {
  await new Promise((r) => setTimeout(r, 1000));
  console.log('I’m awake');
}
const result = sleepy();
console.log(result); // ❓ what is this?
