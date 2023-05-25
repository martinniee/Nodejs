const fs = require("node:fs/promises")
const path = require("node:path")
/*
fs,readFile()读取文件
fs.appendFile()创建新文件，或将数据添加到已有文件中
fs.mkdir()创建目录
fs.rmdir()删除目录
fs.rm()删除文件
fs,rename()重命名
fs.copyFile()复制文件
 */
// ----------1.fs.mkdir()创建目录----------
/*
mkdir可以接收一个配置对象作为第二个参数，通过该对象可以对方法的功能进行配置
- recursive: 默认值false,设置 true，则会自动创建上一级不存在的目录
 */
/* fs.mkdir(path.resolve(__dirname, "./hello"), { recursive: true })
    .then(r => {
        console.log("创建成功：\n", path.resolve(__dirname, "./hello"));
    })
    .catch(r => {
        console.log("创建失败！");
    }) */
// ----------2. fs.rmdir()删除目录----------
/* fs.rmdir(path.resolve(__dirname, "./hello/abc/def/ghi"), { recursive: true })
    .then(
        r => {
            console.log("删除成功：\n", path.resolve(__dirname, "./hello"));
        }
    ) */
// 未来版本推荐使用 rm 删除
/* fs.rm(path.resolve(__dirname, "./hello"), { recursive: true })
    .then(
        r => {
            console.log("删除成功：\n", path.resolve(__dirname, "./hello"));
        }
    ) */
// ----------3 .fs,rename()重命名----------
// 本质是 “剪切”
fs.rename(
    path.resolve(__dirname, "./hello"), // 新名
    path.resolve(__dirname, "./halo")  // 旧名
).then(r => {
    console.log("重命名成功");
})