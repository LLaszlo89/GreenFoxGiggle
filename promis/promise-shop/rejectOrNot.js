// prove to ourselves that promises may only resolve one time and all future attempts to resolve them will simply be ignored.

//First, create a promise using the Promise constructor. In the promise’s executor, 
//immediately attempt to fulfill the promise with a value of 'I FIRED'.
//try to reject the promise with an Error created with parameter 'I DID NOT FIRE'.

let promise = new Promise((fulfill, reject) =>{
  fulfill('I FIRED')
  reject(new Error('I DID NOT FIRE'))
})

let onRejected =(error)=>{
  console.log(error.message)};
  
  promise.then(console.log, onRejected)
  /* Its only log “I FIRED” and NOT log “I DID NOT FIRE”. */