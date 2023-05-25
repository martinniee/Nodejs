/*
- 核心模块，是node中自带的模块，可以在node中直接使用
- `window`是浏览器的宿主对象node中是没有的
- `global`是node中的全局对象，作用类似于window
- ES标准下，全局对象的标准名应该是`globalThis`
 */
// 验证 globalThis 等价于 global
console.log(globalThis === global); // true

/*
 核心模块 process
 - process 表示node进程
 - 可以获取进程信息，进行各种操作

process属性方法
1. process.exit() 结束当前进程，终止node
2. process.nextTick(callback[,...args]) 将函数插入 tick队列
    - 新的任务执行优先级：调用栈 > tick队列 > 微队列 > 宏队列

 */
// console.log(process);
/* console.log(111);
console.log(222);
process.exit() // 从此处结束进程，以下的代码不会执行
console.log(333);
console.log(444); */

setTimeout(() => {
    console.log(4);
});
queueMicrotask(() => {
    console.log(1);
})
process.nextTick(() => {
    console.log(2);
})
console.log(3);