
//Create a promise.
let promise = new Promise(function (fulfill, reject) {
//after a delay of 300ms fulfill the promise with value 'FULFILLED!'.
  setTimeout(()=> fulfill('FULFILLED!'));
  }, 300);

  /*  Then, print the contents of the promise after it has been fulfilled by passing
  console.log to then. */
  promise.then(console.log)




