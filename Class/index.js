class Example{
    constructor(a){
        this.a = a;
        console.log("constructor",this.a);
    }
    addZero(num){
        return num>=0 && num <10 ? '0'+num : num;
    }
}

Example.prototype.$ppp = function addZero2(num){
    return num>=0 && num <10 ? '0'+num : num;
}