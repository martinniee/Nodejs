/**
 * 早期的网页中，是没有一个实质的模块规范的, 
 * 
 * NodeJS中支持的 模块化规范
 * 1. CommonJS 是 JS 中的模块化规范（第三方）。在 NodeJS是默认的模块化规范
 */

/**
  CommonJS模块化规范
  引入模块
    - 使用  ` require("<模块的路径>")` 格式，引入自定义模块时，路径要以 ./ 或 ../开头
    - 扩展名可以省略: 在CommonJS中，如果省略的js文件的扩展名 node,会自动为文件补全扩展名。
    如 `./m1.js`,如果没有js,它会寻找`./m1.json`（优先级：js < json > node）
    js-->json->node（特殊）   
    - 如引入核心模块，可直接写模块名，或在核心模块前添加 `node:`
 */
const m1 = require('./m1.js')
const m2 = require('./m2.cjs') // 引入 CommonJS标准模块
const hello = require('./hello') // 引入文件夹 hello
// const m1 = require('node:path')
// console.log(m2);
console.log(m1);
// console.log(hello);
/* console.log(m1.a);
console.log(m1.b);
console.log(m1.c); */