function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

class Common {
  static getType(target) {
    return Object.prototype.toString
      .call(target)
      .slice(8, -1)
      .toLocaleLowerCase();
  }
}

const A = [1, 2];
const B = 'String';
const C = /[\w]/g;
const D = new Date();
const E = new Error('something wrong');
console.log(Common.getType(A)); // array
console.log(Common.getType(B)); // string
console.log(Common.getType(C)); // regexp
console.log(Common.getType(D)); // date
console.log(Common.getType(E)); // error
