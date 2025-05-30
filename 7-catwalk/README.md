# Cat Walk Prep Exercise

## Examples

### Example 1: `1-catwalk-prep`

This version is a worked-out solution to the Cat Walk exercise.

### Example 2: `2-catwalk-callbacks`

This version uses callbacks instead of Promises. We can refactor the Promise-based version by removing the Promise constructors from the `walk()` and `dance()` functions and instead adding a callback parameter (`cb`) that we call as a function instead of `resolve()`.

In the `catWalk()` function we can no longer use a chain but need to nest the calls to `walk()`, `dance()` and (recursively) `catWalk()`. This leads to a deeply nested structure, often referred to as "callback hell" (although in this case it is not overly deep).

### Example 3: `3-cats-walk`

In this example three cats walk and dance at the same time, so we can use `Promise.all()` to wait for all of them to finish. The `catsWalk()` function returns a Promise that resolves when all cats have finished walking and dancing. When that happens, we start all over again by recursively calling `catsWalk()` again.

### Example 4: `4-cats-race`

In this example we have increased the number of cats to 5 and they are racing each other, using Promise.race(). The last (bottom) cat always finish first. A new race is started as soon at that last cat finishes (i.e. when Promise.race() resolves).

Note that when a a new race is started, the cats in the previous race continue to walk and dance. This is because the `Promise.race()` method only waits for the first promise to settle, and does not affect the other promises.
