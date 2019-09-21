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
  return arr.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  });
}
function uniq(arr) {
  return arr.reduce(function(temp, item, index) {
    return temp.includes(item) ? temp : [...temp, item];
  }, []);
}
function uniq(arr) {
  return [...new Set(arr)];
}
