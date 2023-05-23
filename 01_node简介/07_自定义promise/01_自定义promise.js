/**
 * 定义类的思路
 * 1.分析功能需求
 * 2.分步实现
 */

class MyPromise {
    #result // 创建私有属性 用于储存 传入的数据作为 Promise的结果
    // 为了让 promise的状态只变动一次，设置变量储存状态
    #state = 0  // 0 表示未被修改，1表示被修改过
    constructor(executor) {
        // 接收执行器作为参数
        // // 解决this为undefined方案2：使用 bind() 改变函数 内部 this 指向
        executor(this.#resolve.bind(this), this.#reject.bind(this)) // 调用回调函数
    }
    // 实例方法
    // 通过 '#' 符号 将 resolve 和 reject 变成私有方法

    //  ⚠️ class 中 代码环境在 严格模式下 ，而 普通函数在严格模式下 this 为 undefined 。需要使用箭头函数
    #resolve(value) {
        if (this.#state) return // 如果 state 为 true，则表示 state为1，被修改过，不能再修改
        // 当修改操作，则将 #state 变为 1 ，表示已经被修改
        this.#result = value // this 为 undefine
        this.#state = 1;
    }
    /*  #resolve = () => {
         // 解决this为undefined方案1：此时使用箭头函数,this 为外部的this，即 类的实例 
         this.#resolve = value
         console.log("value: ", value);
     } */
    // 实例方法
    #reject(reason) { }

    // 添加一个用来读取数据的 then 方法
    then(onFulfilled, onRejected) {
        // 当获取了数据，才返回数据
        if (this.#state) {
            onFulfilled(this.#result)
        }
    }
}
const mp = new MyPromise((resolve, reject) => {
    resolve('foo')
    resolve('bar')
})
// console.log(mp); // MyPromise {#resolve: ƒ, #reject: ƒ, #result: 'foo'}
mp.then((result) => {
    console.log(result); // foo
})