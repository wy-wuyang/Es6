// 自己实现一个模板字符串功能
let name = 'haha';
let age = 22;
let str = '${name}是一个${age}\'岁\'的单身汉';

// 通过正则来进行替换实现
let newStr = str.replace(/\$\{([^}]*)\}/g,function(){
    return eval(arguments[1])
})

console.log(newStr);

function jw(){
    console.log(arguments);
    let strings = arguments[0];
    let values = [].slice.call(arguments,1)
    console.log(strings,values);

}

let sstr = jw`${name}是一个${age}'岁'的单身汉`


let url = "https://www.baidu.com"
// includes 是否包含
console.log(url.includes('baidu'));//true
console.log(url.includes('tx'));//false
// startsWith  以xxx开头
console.log(url.startsWith("https://"));//true
console.log(url.startsWith("http://"));//false
// endsWith 以xxx结尾
console.log(url.endsWith(".com"));//true
console.log(url.endsWith(".cn"));//false

// padStart  padEnd  补全
// 进制转化
setInterval(()=>{
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let str = `${hh.toString().padStart(2,0)}:${mm.toString().padStart(2,0)}:${ss.toString().padStart(2,0)}`
    console.log(str);
},1000)