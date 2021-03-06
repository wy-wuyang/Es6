// es6 提供了新的声明方式替代了以前的var

/**
 * var 不支持封闭作用域，会声明到全局作用域(变量提升)
 * 1.函数作用域
 * 2.全局作用域
 * 
 * let 和 {} 可以产生一个作用域
 * let 支持块级作用域，只会声明在当前作用域内
 * 
 * let 可以解决
 *      1.作用域污染问题和局部作用域问题
 *      2.同一作用域下变量被重复声明
 *      3.域解释问题，变量提升
 * 
 * 会产生暂存性死区
 *      当前作用域存在相应的变量就不会再向上级作用域查找
 * 
 * 
 * 通过const 声明的变量不可被更改，不能被修改引用空间(const 一般用于定义常量)
 */
let a = 1;
const b = 2;