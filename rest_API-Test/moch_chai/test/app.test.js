const app = require('../app')
const assert = require('chai').assert;

/* in the package.json we 
   "scripts": {
   "test": "mocha || true"         // use mocha & show less detail}, */

sayHelloResult = app.sayHello()
addNumbersResult = app.addNumbers(5,5)

describe('App' , function(){                        // we can categorized the test give separation 
  describe('Working with sayHello', function(){ 
it('App should return hello' , function(){         //description message
  assert.equal( sayHelloResult , 'Hello')                   //  actual thing we check -> its a func so () needed ,  and our expectation
})
it('App should return type of string', function(){
  assert.typeOf(sayHelloResult , 'string')
})
})
describe('working with addNumber', function(){
  it('add numbers should be above 5 ' , function(){
    assert.isAbove(addNumbersResult, 5 )
  })
})
});