/**
 * 静态方法：
 *  - Promise.resolve() 创建立即 完成 的 promise
 *  - Promise.reject()  创建立即 拒绝 的 promise
 *  - Promise.all([...]) 同时返回多个 promise 的执行结果。”同生共死“，全部成功才成功，一个失败都失败（ a & b 为 真  ）
 *  - Promise.allSettled([...])  同时返回多个 promise 的执行结果。无论成功或失败
 *      {status: 'fulfilled', value: 579}
 *      {status: 'reject', reason: 579}
 *  - Promise.race([...]) 返回执行结果最快的 promise （不考虑成功失败）
 *  - Promise.any([...]) 返回执行结果最快的成功（resolve） 的promise 。都失败才失败 （ a | b  为 假 ）
 * 
 */

/*
Promise.resolve(10)
等价
new Promise((resolve,reject)=>{
    resolve(10)
})
 */

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000);
    })
}
/**
 * Promise.all() 
 */
/* Promise.all([
    sum(1, 3),
    sum(10, 20),
    sum(55, 66),
]).then(r => {
    console.log("r: ", r); // r:  (3) [4, 30, 121]
}) */
/* Promise.allSettled([
    sum(1, 3),
    sum(10, 20),
    Promise.reject('哈哈，出错了！'),
    sum(55, 66),
]).then(r => {
    console.log("r: ", r); // r:  (3) [4, 30, 121]
}) */
/* Promise.race([
    Promise.reject('哈哈，出错了！'),
    sum(1, 3),
    sum(10, 20),
    sum(55, 66),
]).then(r => {
    console.log("r: ", r); // r:  (3) [4, 30, 121]
}) */
/* Promise.any([
    Promise.reject('哈哈，出错1了！'),
    Promise.reject('哈哈，出错1了！'),
    Promise.reject('哈哈，出错1了！'),
]).then(r => {
    console.log("r: ", r); // r:  (3) [4, 30, 121]
}) */

/* Promise.resolve().then(() => {
    console.log(111111);
})
console.log(222222); */

/* setTimeout(() => {
    console.log(11111);
});
console.log(222222); */

Promise.resolve().then(() => {
    console.log(11111);
})
setTimeout(() => {
    console.log(22222);
});