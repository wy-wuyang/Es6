// 箭头函数  es6 写起来简单 可以解决this问题
// 函数  高阶函数
/**
 * 1.箭头函数没有function关键字
 * 2.小括号与大括号之间有个箭头
 * 3.如果参数是一个可以省略大小括号
 * 4.如果没有return 可以不写大括号
 */

// 普通函数

function fn(a) {
    return a;
}

// es6箭头函数

let fn1 = a => a;

// 解决this问题
/**
 * 1.跟随父级的this改变（仅箭头函数）
 */
/**
 * 2.通过 let Vm = this;设定好this的归属
 */
/**
 * 3.通过bind、call、apply改变this指向
 */
let obj = {
    b: 1,
    a: function () {
        let vm = this;
        console.log(this, 1);
        // setTimeout(() => { 
        //     console.log(this, 2);
        //     console.log(vm, 3);
        //  }, 1000)
        setTimeout(function() { 
            console.log(this, 2);
            console.log(vm, 3);
         }, 1000)
    }
}
let obj2 = {
    b: 1,
    a: function () {
        let vm = this;
        console.log(this, "obj2-1");
        setTimeout(() => { 
            console.log(this, "obj2-2");
            console.log(vm, "obj2-3");
         }, 1000)
    }
}
let obj3 = {
    b: 1,
    a: function () {
        let vm = this;
        console.log(this, "obj3-1");
        setTimeout(function() { 
            console.log(this, "obj3-2");
            console.log(vm, "obj3-3");
         }.call(this), 1000)
    }
}
let obj4 = {
    b: 1,
    a: () => {
        let vm = this;
        console.log(this, "obj4-1");
        setTimeout(function() { 
            console.log(this, "obj4-2");
            console.log(vm, "obj4-3");
         }, 1000)
    }
}
// obj.a();
// obj2.a();
// obj3.a();
obj4.a();