// ES5
function fakeToArray(fakeArr) {
  return Array.prototype.slice.call(fakeArr);
}

// ES6
function fakeToArray(fakeArr) {
  return Array.from(fakeArr);
}
