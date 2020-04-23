'use strict'

const alwaysThrows =()=> {
  throw new Error('OH NOES');
}
const iterate=(i)=> {
  console.log(i);
  return i + 1;
}
const onReject=(e)=>{
  console.log(e.message);
}

Promise.resolve(1) // number given by me 
.then(iterate)    // 1 goes throw the function become 2
 .then(iterate)   // 2 goes throw the function become 3 ...
  .then(iterate)
   .then(iterate)
    .then(iterate)
.then(alwaysThrows) // after 5 we activate error func and stops the chain
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject);