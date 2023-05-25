/*
ES 模块化
 */
// 1. 向外部导出内容
export let a = 10
export const b = 'foo'
export const c = { name: "bar" }

// 2. 设置默认导出
// 格式：export default <值>
export default function sum(a, b) {
    return a + b
}