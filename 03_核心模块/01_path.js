/*
path
- 表示路径，通过 path 可以获得各种路径信息
- 使用 path 需要引入 `const path = require("node:path")`
 */
// 引入 path
const path = require("node:path")
// console.log(path);
// ----------方式1：不传参数，默认获取当前工作目录路径----------
// 情况1：使用 F5 得到的路径（得到是当前文件的所在目录的路径）：D:\Projects\frontend-space\frontend-learning\JavaScript-learning\Nodejs
// 情况2：在命令行执行得到的路径（得到是当前文件的路径）：     D:\Projects\frontend-space\frontend-learning\JavaScript-learning\Nodejs\03_包管理器
/* const result = path.resolve()
console.log(result); */
// ----------方式2：传入相对路径的参数，路径格式是 <路径><文件名.扩展名>。路径有不同情况（类似方式1的两种情况）----------
// 情况1：F5执行得到的路径：      D:\Projects\frontend-space\frontend-learning\JavaScript-learning\Nodejs\hello.js
// 情况2：在命令行执行得到的路径： D:\Projects\frontend-space\frontend-learning\JavaScript-learning\Nodejs\03_包管理器\hello.js
/* const result = path.resolve("./hello.js")
console.log(result); */
// ----------方式3：最终形态。__dirname 是当前文件所在路径----------
// D:\Projects\frontend-space\frontend-learning\JavaScript-learning\Nodejs\03_包管理器\hello.js
/* const result = path.resolve(__dirname, './hello.js')
console.log(result); */

/*
fs（File System）
fs用来帮助node来操作磁盘中的文件
 */

const fs = require('node:fs/promises')
    // ----------读取文件1：同步读取----------
    // readFileSync() 同步的读取文件的方法，会阻塞后边代码的执行
    /* const buf = fs.readFileSync(path.resolve(__dirname, "./hello.txt"))
    console.log(buf.toString()); */
    // ----------读取文件2：异步读取----------
    // ----------方式1：使用 回调函数 方式----------
    /* fs.readFile(
        path.resolve(__dirname, "./hello.txt"),
        (err, buffer) => {
    
            if (err) {// err 是错误信息
                console.log("出错了~");
            } else {
                console.log(buffer.toString());
            }
        }
    ) */
    // ----------方式2：使用promise方式----------
    /* fs.readFile(path.resolve(__dirname, "./hello.txt"))
        .then(buffer => {
            console.log(buffer.toString());
        })
        .catch(e => {
            console.log("出错了~");
        }) */
    // ----------方式3：使用 async 方式----------
    ; (async () => {
        try {
            const buffer = await fs.readFile(path.resolve(__dirname, "./hello.txt"))
            console.log(buffer.toString());
        } catch (error) {
            console.log("出错了~");
        }
    })()