let a = 10
let b = 20

// console.log("我是m1模块");

/**
 * 在定义模块时，模块中的内容`默认`是不能被外部看到的
可以通过`exports`来设置要向外部暴露的内容
访问`exports`的方式有两种：
1. exports
2. module.exports
- 当我们在其他模块中引入当前模块时，`require`函数返回的就是`exports`
- 使用 exports 的方式
    - 方式1：使用 exports 分别导出数据
    - 方式2：使用 module.exports 将数据封装到对象中一次性导出
 */
/* console.log(exports);
console.log(module.exports); */
/* exports.a = 'foo'
exports.b = 'bar'
exports.c = 'baz' */
module.exports = {
    a: 'hh',
    b: [1, 2, 3, 4],
    c: () => {
        console.log(111);
    },
}
/* exports = {
    a: 'hh',
    b: [1, 2, 3, 4],
    c: () => {
        console.log(111);
    },
} */