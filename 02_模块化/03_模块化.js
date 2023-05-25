// -----------------引入部分方式1：直接获取目标属性-----------------
/* const name = require('./m3').name
console.log(name); */
// -----------------引入部分方式2：类似对象解构赋值-----------------
const { name, age, gender } = require('./m3')
console.log(name, age, gender);
