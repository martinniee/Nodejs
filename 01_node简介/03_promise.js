// 1.创建 promise
// 格式：new Promise( function )
// resolve, reject 也是函数
const promise = new Promise((resolve, reject) => {
    // 2.将数据存到 resolve中
    /* 
    关于 resolve 和 reject 使用
        - resolve ： 执行 正常 时储存数据
        - reject  ： 执行 异常 时储存数据
    */
    /*setTimeout(() => {
        // 通过 函数形式 xxx('数据') 的好处可以添加异步调用的数据
        // resolve('成功了耶！');
        // reject('哎！，失败了');
    }, 2000);*/
    // throw new Error('失败了')
})
// console.log(promise);
// 3.从 promise 中读取数据：通过 then()
// then的格式：promise.then( fun1,fun2 )
/* promise.then(
    //fun1 对应 resolve()的结果 : 成功时执行
    (result) => { console.log("读取到了 promise 中的数据：", result); },
    //fun2 对应 reject()的结果  : 失败时执行
    (result) => { console.log("读取到了 promise 中的数据：", result); }
) */

/*
promise 中维护了两个隐藏属性：
    - PromiseResult：用于储存数据
    - PromiseState：记录   Promise 状态（三种）
        - pending：进行中
        - fulfilled：完成：通过 resolve 储存数据时
        - rejected：拒绝/出错了：通过 reject 储存数据时
------------
1. 当 Promise 创建， PromiseState初始值为 pending
    - 当 储存数据通过 resolve, PromiseState 修改为 fulfilled, PromiseResult 变为 储存的数据
    - 当 储存数据通过 reject, PromiseState 修改为 rejected, PromiseResult 变为 储存的数据 或 异常对象
	
	
2. 当我们通过 then 读取数据时，相当于为 Promise 设置了回调函数，
    - 如果 PromiseState 变为fulfilled,则调用 then 的第一个回调函数来返回数据
    - 如果 PromiseState 变为rejected,则调用 then 的第二个回调函数来返回数据
*/
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功了耶！')
    }, 2000);
})
/* promise2.then(
    (result) => { console.log(result); },
    (reason) => { console.log(reason); }
) */

/**
catch（）用法和 then 类似，但是只需要一个回调函数作为参数
    - catch（）中的回调函数只会在Promise被拒绝时才调用
    - catch（）相当于then(null,reason=>{})
    - catch（）就是一个专门处理Promise异常的方法
 */
/* promise2.catch(reason => {
    console.log('失败了');
}) */

/*
finally（）
    - 无论是正常存储数据还是出现异常了，finally总会执行
    - 但是 finally 的回调函数中不会接收到数据
    - finally() 通常用来编写一些无论成功与否都要执行代码
 */
promise2.finally(() => {
    console.log('不管怎样，我都会执行~~~');
})