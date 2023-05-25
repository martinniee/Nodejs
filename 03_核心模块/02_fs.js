/*
fs,readFile()读取文件
fs.appendFile()创建新文件，或将数据添加到已有文件中
fs.mkdir()创建目录
fs.rmdir()删除目录
fs.rm()删除文件
fs,rename()重命名
fs.copyFile()复制文件
 */
const path = require("node:path")
const fs = require('node:fs')
fs.appendFile(
    path.resolve(__dirname, "./hello.txt"),
    '老虎不在家',
    (err) => {
        if (err) { console.log(err); }
        else { console.log("添加成功\n", fs.readFileSync(path.resolve(__dirname, "./hello.txt").toString(), "utf8")); }
    }
)