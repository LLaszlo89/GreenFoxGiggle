/* 
Let's build exactly the system discussed above.

Some invalid JSON will be available on process.argv[2].

  * Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block, 
  and fulfills or rejected promise depending on whether an error is thrown.
 */

 parsePromised=(json)=> {
  return new Promise((fulfill, reject)=>{
    try {
      fulfill(JSON.parse(json));    //JSON.parse => data becomes a JavaScript object
    } catch (error) {
      reject(error);
    }
  });
}

parsePromised(process.argv[2])
.then(console.log)
.catch(console.error)