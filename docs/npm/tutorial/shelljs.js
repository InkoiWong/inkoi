/**
 * @name    shelljs
 * @desc    Node.js的Unix shell命令
 *          这个库能够让我们在js文件中执行shell命令，具体可以看。
 *          ShellJS是Node.js API之上的Unix shell命令的可移植（Windows / Linux / OS X）实现。您可以使用它来消除shell脚本对Unix的依赖性，同时仍保留其熟悉且功能强大的命令。您也可以在全局安装它，这样您就可以从Node项目外部运行它 - 告别那些粗糙的Bash脚本！
 *          https://github.com/shelljs/shelljs
 */
// 局部引入
const shell = require('shelljs');
// 全局引入
// require('shelljs/global');
// 全局模式下，就不需要用shell开头了。

console.log('%s', '\033[1H]\033[2J');
// ---------------

// shell.which(cmd)
// 查看当前环境是否有cmd命令
// console.log('shell.which(git)', !!shell.which('git'));
// console.log('shell.which(npm)', !!shell.which('npm'));

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

// Copy files to release dir
shell.rm('-rf', 'out/Release');
shell.cp('-R', 'stuff/', 'out/Release');

// Replace macros in each .js file
shell.cd('lib');
shell.ls('*.js').forEach(function (file) {
  shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
  shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
});
shell.cd('..');

// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}