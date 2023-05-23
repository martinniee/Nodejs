/**
 * JS 是单线程，运行基于事件循环机制（event loop）
 *  - 调用栈 ： 正在实行的（任务）代码 在栈中
 *  - 消息队列：等待执行的（任务）代码 在队列中
 * 执行任务顺序优先级：全局 > 微队列 > 宏队列
 * 任务队列分类
 *  - 宏任务
 *  - 微任务
 * 可使用 queueMicrotask() 添加任务到 微队列中
 * 
 */
queueMicrotask(() => {
    console.log(3);
})
Promise.resolve(1).then(() => {
    console.log(1);
})
console.log(2);
/* setTimeout(() => {
    console.log(1);
}, 0);
Promise.resolve(1).then(() => {
    console.log(2);
})
console.log(3); */