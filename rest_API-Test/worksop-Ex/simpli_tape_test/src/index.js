function add(a, b) {
  return a + b;
}

function sum(until) {
  let result = 0;
  for (let index = 1; index <= until; index++) {
    result = add(result, index);
  }
  return result;
}

module.exports = {
  add,
  sum
};