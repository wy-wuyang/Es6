let name = "haha";

let arr = [1,2,3];

let obj = {
    a:1,
    b:2,
}

function add(a,b){
    return a+b
}

class Car{
    constructor(){
        console.log("car");
    }
}

export {
    name,
    arr,
    obj,
    add,
    Car,
}