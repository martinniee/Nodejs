// 下面三行代码是 同步执行，依次一行一行执行
/* console.log("111");
console.log("222");
console.log("333"); */
// 下面的代码，sum函数调用会影响下一行语句的执行
function sum(a, b, callback) {
    // function sum(a, b) {
    const begin = Date.now();
    // while 循环会持续10次10秒（同步代码）
    /*  while (Date.now() - begin < 10000) { }
     return a + b; */
    // 将 同步代码改成 异步代码
    setTimeout(() => {
        // return a + b;
        // console.log(a + b);
        callback(a + b);
    }, 4000);
}
console.log("1111111");
// 使用回调函数
// 理解回调函数的作用：暂时储存某个封装的指令，等待合适时机执行
// const result = sum(123, 456);
const result = sum(123, 456, (result) => {
    sum(result, 777, (result) => {
        sum(result, 888, (result) => {
            sum(result, 999, (result) => {
                sum(result, 000, (result) => {
                    console.log(result);
                })
            })
        })
    })
});
console.log("2222222");  // 等10秒后，才执行下面的语句