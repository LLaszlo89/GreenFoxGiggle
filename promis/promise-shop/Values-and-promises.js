/* Construct a promise chain that returns values to prove to yourself that
promise handlers will wrap your returned values in promises allowing
additional chaining.

  * Declare a function `attachTitle` which prepends `'DR. '` to its firstargument and returns the result.
  * Create a fulfilled promise with a value of `'MANHATTAN'`.
  * Build a promise chain off the promise we just constructed that first calls`attachTitle` then calls `console.log`.

If your program runs successfully, it should print out “DR. MANHATTAN” which
is extremely exciting. */

attachTitle =(name)=>{
  return 'DR. ' + name
};

let promise = Promise.resolve("MANHATTAN");

promise.then(attachTitle)   // name => attachTitle(name)
      .then(console.log)

// OR Just     
Promise.resolve('MANHATTAN')
.then(attachTitle)
.then(console.log) 