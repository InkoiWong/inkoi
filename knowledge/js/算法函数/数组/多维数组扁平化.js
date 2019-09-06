// ES6
function flattenDeep(arr) {
  return arr.flat(Math.pow(2, 53) - 1);
}
function flattenDeep(arr) {
  return arr.reduce(
    (prev, cur) =>
      Array.isArray(cur) ? prev.concat(flattenDeep(cur)) : prev.concat(cur),
    []
  );
}
