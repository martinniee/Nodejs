/**
 * 解决的问题
 * 1.解决不能多次调用then （已解决）
 * 2.解决不能链式调用then （已解决）
 */
const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}
class MyPromise {
    #result // 创建私有属性 用于储存 传入的数据作为 Promise的结果
    #state = PROMISE_STATE.PENDING  // 0 表示未被修改，1表示被修改过
    #callbacks = []
    constructor(executor) {
        executor(this.#resolve.bind(this), this.#reject.bind(this)) // 调用回调函数
    }
    #resolve(value) {
        if (this.#state === PROMISE_STATE.FULFILLED) return // 如果 state 为 true，则表示 state为1，被修改过，不能再修改
        // 当修改操作，则将 #state 变为 1 ，表示已经被修改
        this.#result = value // this 为 undefine
        this.#state = PROMISE_STATE.FULFILLED;
        queueMicrotask(() => {
            // this.#callback && this.#callback(this.#result)
            // 调用 callbacks 中的所有函数
            this.#callbacks.forEach(cb => {
                cb();
            })
        })
    }
    #reject(reason) { }
    then(onFulfilled, onRejected) {
        /**
         * 返回一个新的 promise 用于 下一次 then 调用
         */
        return new MyPromise((resolve, reject) => {
            if (this.#state == PROMISE_STATE.PENDING) {
                // this.#callback = onFulfilled
                this.#callbacks.push(() => {
                    resolve(onFulfilled(this.#result))
                })
            }
            // 当获取了数据，才返回数据
            else if (this.#state === PROMISE_STATE.FULFILLED) {
                /**
                 * 目前 then 只能读取已存入 Promise的数据，不能读取异步储存的数据
                 */
                // then的回调函数，应该放入到微任务队列中执行，而不是直接调用
                queueMicrotask(() => {
                    resolve(onFulfilled(this.#result))
                })
            }
        })
    }
}
const mp = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo')
    }, 1000);
    // resolve('foo')
})
/* mp.then((result) => {
    console.log("result1: ", result); // foo
})
mp.then((result) => {
    console.log("result2: ", result); // foo
})
mp.then((result) => {
    console.log("result3: ", result); // foo
}) */
mp.then((result) => {
    console.log("result1: ", result); // foo
    return '111'
}).then(result => {
    console.log("result2: ", result); // foo
    return '222'
}).then(result => {
    console.log("result3: ", result); // foo
    return '333'
})