// ES5
function uniq(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) < 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// ES6
function uniq(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
function uniq(arr) {
  return arr.reduce(
    (prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]),
    []
  );
}
function uniq(arr) {
  return [...new Set(arr)];
}
