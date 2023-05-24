/*
所有的CommonJS的模块都会被包装到一个函数中
    (function(exports,require,module,__filename,__dirname){

    });
*/
let a = 10
let b = 20
// 证明
// console.log(arguments);
console.log(__filename); // 表示当前模块的绝对路径
console.log(__dirname); // 表示当前模块就所在目录的路径