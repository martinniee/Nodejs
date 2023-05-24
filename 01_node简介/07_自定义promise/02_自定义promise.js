/**
 * 解决的问题：目前 then 只能读取已存入 Promise的数据，不能读取异步储存的数据
 * 要求：在 使用 then 调用回调 取出数据之前存在数据。
 * 思路：等到 resolve 中异步储存的数据被获取到后，将数据通过 then 的回调函数取出。
 * 而直接在 resolve 中“看不见” then 中的回调，可以将回调储存在一个变量作为一个属性，这样整个类中可以使用。
 * 而被取出的数据只能在 resolve 中得到，这样原本由 then 中调用回调函数，变为了 resolve 中调用回调函数，传入数据，取出数据
 * 关键：思路有两个
 * 1（不可行）在 then 中操作 在 成功获取到数据后，调用 then 的回调函数，存入数据，取出数据
 * 2 在 resolve 中操作，在成功获取到数据后，调用 then 中的回调函数，存入数据，取出数据
 * 
 */
const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}
class MyPromise {
    #result // 创建私有属性 用于储存 传入的数据作为 Promise的结果
    #state = PROMISE_STATE.PENDING  // 0 表示未被修改，1表示被修改过
    #callback
    constructor(executor) {
        executor(this.#resolve.bind(this), this.#reject.bind(this)) // 调用回调函数
    }
    #resolve(value) {
        if (this.#state === PROMISE_STATE.FULFILLED) return // 如果 state 为 true，则表示 state为1，被修改过，不能再修改
        // 当修改操作，则将 #state 变为 1 ，表示已经被修改
        this.#result = value // this 为 undefine
        this.#state = PROMISE_STATE.FULFILLED;
        queueMicrotask(() => {
            this.#callback && this.#callback(this.#result)
        })
    }
    #reject(reason) { }
    then(onFulfilled, onRejected) {
        if (this.#state == PROMISE_STATE.PENDING) {
            this.#callback = onFulfilled
        }
        // 当获取了数据，才返回数据
        else if (this.#state === PROMISE_STATE.FULFILLED) {
            /**
             * 目前 then 只能读取已存入 Promise的数据，不能读取异步储存的数据
             */
            // then的回调函数，应该放入到微任务队列中执行，而不是直接调用
            queueMicrotask(() => {
                onFulfilled(this.#result)
            })
        }
    }
}
const mp = new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('foo')
    // }, 1000);
    resolve('foo')
})
mp.then((result) => {
    console.log("result: ", result); // foo
})