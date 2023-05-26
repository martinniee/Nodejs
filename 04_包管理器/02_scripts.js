/*
package.json中的属性
- scripts
    - 由键值对构成，键是名称，值是指令。可理解为为命令起别名。
    - 如 `"test":"dir"`，当运行`npm test`，相当于在命令行执行 `dir`命令。可自定义命令。
    - 如果键是非`test`,`start`，则运行自定义命令需要通过 `run`来执行。如 `"hello":"dir"`，运行需要添加`run`变为`npm run hello`。


npm镜像
- npm的仓管的服务器位于国外，有时候并不是那么的好使为了解决这个问题，可以在npm中配置一个镜像服务器
- 配置：
    - 方式1（不推荐）：配置 cnpm：`npm install -g cnpm --registry=https://registry.npmmirror.com
`
    - 方式2（推荐）：
        - 彻底修改 npm 仓库地址：`npm set registry https://registry.npmmirror.com`
        - 还原到原版下载源：`npm config delete registry`
        - 查看当前项目配置：`npm config get registry`
 */