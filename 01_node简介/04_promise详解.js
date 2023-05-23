// 将 回调函数地狱的异步代码 修改 为 使用 promise
// 1. 使用回调地狱的方式
/* function sum(a, b, cb) {
    // setTimeout 中是异步代码
    setTimeout(() => {
        cb(a + b)
    }, 1000);
} */
// 2. 使用 promise 的方式
function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000);
    })
}
/*
promise中的 then，catch这三个方法都会返回一个新的Promise
- then 中的 return 返回的内容作为新的 promise.then 回调中的数据（then 中 return的数据是下一次 then 中的参数）
 */
// const promise = sum(1, 2);

const promise = new Promise((resolve, reject) => {
    reject('我是返回值')
})
/**
 * then 和 catch 
 * - then  用来处理 resolve 的操作，接受 成功情况下的返回值。resolve 遇到 catch从中会忽略
 * - catch 用来处理 reject  的操作，接受 失败情况下的返回值。reject  遇到 then 从中会忽略
 * - 如果 某个 catch 中 有错，则自身不处理，由后续处理。因此建议在最后使用 catch 以便可以处理所有错误。
 */
promise
    .then(r => '嘿嘿')
    .catch(r => {
        throw new Error("报个错玩")
        console.log('嘿嘿')
    }
    )
    .then(r => console.log('嘿嘿嘿'))
    .catch(r => console.log(""))
/* promise.
    then(result => {
        console.log(`result1: ${result}`);
        return result + 3;
    })
    .then(result => {
        console.log(`result2: ${result}`);
        return result + 4;
    })
    .then(result => {
        console.log(`result3: ${result}`);
        return result + 5;
    }) */