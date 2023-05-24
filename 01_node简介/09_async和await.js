/**
 * async 和  await
 */
// -----------------创建异步函数方式1：使用 promise-----------------
/* function fn() {
    return Promise.resolve(10)
}
fn().then(r => {
    console.log(r);
}) */
// -----------------创建异步函数方式2：使用 async-----------------
// 异步函数的返回值会自动封装到一个Promise中返回
/* async function fn2() {
    return 10
}
fn2().then(r => {
    console.log(r);
})
 */
// -----------------使用 await-----------------
function sum(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    })
}
async function fn3() {
    /*    sum(123, 456)
           .then(r => sum(r, 8))
           .then(r => sum(r, 9))
           .then(r => console.log(r)) */
    // result 是 promise
    // 上面的 .then().then() 等价于下面的 await ... 👇
    /**
     * 当我们通过await去调用异步函数时，它会暂停代码的运行。
        直到异步代码执行有结果时，才会将结果返回
        注意 await 只能用于 async 声明的异步函数中，或es模块的顶级作用域中

        await 只阻塞异步函数内的代码
        通过await调用异步代码时，需要通过try-catch来处理异常
        如果 async 函数中没使用 await，则此函数和普通函数没区别
     */
    try {
        let result = await sum(123, 456)
        result = await sum(result, 789)
        console.log(result);
    } catch (error) {
        console.log('出错了惹~');
    }
}
// fn3()
/* async function fn4() {
    console.log(1);
    console.log(2);
    console.log(3);
}
function fn5() {
    return new Promise(resolve => {
        console.log(1);
        console.log(2);
        console.log(3);
        resolve()
    })
} */

async function fn4() {
    console.log(1);
    /**
     * 当我们使用await调用函数后，当前函数后边的所有代码
会在当前函数执行完毕后，被放入到 微任务队 里
     */
    await console.log(2);
    console.log(3);
}
// 上面代码等价于下面的
async function fn5() {
    return new Promise(resolve => {
        console.log(1);
        console.log(2);

        resolve()
    }).then(r => {
        console.log(3);
    })
}
fn4()
console.log(4);

/*
 async 使用范围
 1. async 关键字声明的函数中
 2. es模块中
    1）Html的 使用 type="mudule 属性 script 标签中
    2）.mjs文件中
*/

// 立即执行的 async函数
; (async () => {
    await console.log('hh');
})()
