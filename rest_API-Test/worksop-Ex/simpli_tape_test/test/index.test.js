const test = require('tape');
const {add , sum} = require('../src/index');

test('add 2 numbers together ',(t)=>{
  t.equal(add(4,6), 10);
  t.end();
});
// $ node index.test.js

test('sum until 10',(t)=>{
  t.equal(sum(10), 55);
  t.end();
});