// 解构赋值
let arr = ['a',9];

// 数组解构  表示等号左边和右边结构类似（长度必须相同）
let [name,age] = arr;

console.log(name,age);


// 对象解构  名字必须相同
let obj = {
    name:"haha",
    nianling:12,
    default:"xxxxx"
}

// 遇到关键字时可通过 : 进行名称替换
let {name:mingzi,nianling,default:moren} = obj;

console.log(mingzi,nianling,moren);

// 保证结构相同即可进行嵌套解构处理
// 还可通过 = 设置默认值

let qt = [obj,arr];

let [{name:aa,nianling:bb,default:cc},[dd,ee,ff,hh=2],ii=99] = qt;
console.log(aa,bb,cc,dd,ee,ff,hh,ii);