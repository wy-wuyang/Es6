// es6  模板字符串  特殊的字符串
/**
 * 替代了原有的字符串拼接·功能
 */
let name = "haha";
let age = 22;

let oldStr = name + '是一个' + age + '\'岁\'的单身汉'

let str = `${name}是一个${age}'岁'的单身汉`

console.log(oldStr);
console.log(str);

// 可以支持换行、转义

let ul = `<ul>
<li>${name}</li>
<li>${age}</li>
</ul>`

console.log(ul);