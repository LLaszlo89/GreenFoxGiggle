'use strict'

const all =(promise1, promise2) => {
    return new Promise(function(fulfill, reject) {
      let counter = 0;
      let values = [];

      promise1.then((value)=>{
        values[0] = value;
        counter++;
        if (counter >= 2) {
          return fulfill(values);
        }
      });

      promise2.then((value) =>{
        values[1] = value;
        counter++;
        if (counter >= 2) {
          return fulfill(values);
        }
      });
      return true;
    });
  };

  all(getPromise1(), getPromise2()).then(console.log);