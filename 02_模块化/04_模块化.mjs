/*
默认在Nodejs中的模块化标准是 CommonJS
采用 ES模块化的方式（两种）
1. 使用 `.mjs` 作为扩展名
2. 设置 `package.json` 的 type 属性为 'module`。设置后，则项目的js采用的都是 ES 模块化规范。
 */
// console.log(module);
// 导入 m4模块。es模块不能省略扩展名（官方标准）
// import {...} from "<path>"
// ----------导入方式1：对象解构----------
// import { a, b, c } from "./m4.mjs"
// ----------导入方式2：对象解构取别名----------
// import { a as haha, b as xixi, c as heihei } from "./m4.mjs"
// ----------导入方式3：引入所有（开发时避免使用此方式）----------
// import * as m4 from "./m4.mjs"
// ----------导入方式4：引入 默认导出。默认导出的内容可随意命名----------
import sum from "./m4.mjs"
// console.log(a, b, c);
// console.log(haha, xixi, heihei);
// console.log(m4);
// console.log(sum);
import { a, b, c } from "./m4.mjs"
console.log(b);
// b.name = 'baz' // 不能修改常量
console.log(b);
/*
通过 ES 模块化，导入的内容都是常量
ES模块都是运行在严格模式下的
ES模块化，在浏览器中同样支持，但是通常我们不会直接使用，通常都会结合打包工具使用
*/
