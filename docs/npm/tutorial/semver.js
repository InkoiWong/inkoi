/**
 * @name    semver
 * @desc    npm的语义版本
 *          https://www.npmjs.com/package/semver
 */
const semver = require('semver')
console.log('%s', '\033[1H]\033[2J')
// ---------------

function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

console.log('node version:', process.version);
console.log('node version:', semver.clean(process.version));
console.log('npm version:', exec('npm --version'));

console.log(semver.valid('1.2.3')) // '1.2.3'
console.log(semver.valid('a.b.c')) // null
console.log(semver.clean('  =v1.2.3   ')) // '1.2.3'
console.log(semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3')) // true
console.log(semver.gt('1.2.3', '9.8.7')) // false
console.log(semver.lt('1.2.3', '9.8.7')) // true
console.log(semver.valid(semver.coerce('v2'))) // '2.0.0'
console.log(semver.valid(semver.coerce('42.6.7.9.3-alpha'))) // '42.6.7'