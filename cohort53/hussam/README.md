## Question

In Promise.race, the first promise that settles (either fulfills or rejects) determines the result, and the other promises are ignored even if they later fulfill or reject. Is this correct ?

## Answer

That is correct. Check the example that I demoed with many cats racing across the screen. The bottom cat is the fastest and always wins the race: `Promise.race()` is resolved when it reaches the end of the screen. This starts a new race while the cats from the previous race unwittingly continue their own walk.
