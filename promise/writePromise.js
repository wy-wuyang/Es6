class myPromise {
    constructor() {
    /**
     * initialState  初始状态
     * 有三个状态（两种改变方式，改变后状态不会再变化）
     *          初始状态 pending
     *          成功状态 fulfilled
     *          失败状态 rejected
     * successList  成功事件池
     * failList     失败事件池
     */
        this.initialState = "pending";
        this.successList = [];
        this.failList = [];
        let resolve = (value) => {
            if(this.initialState == "pending"){
                this.initialState = "fulfilled";
                this.value = value;
            }
        };
        let reject = (reason) => {
            if(this.initialState == "pending"){
                this.initialState = "rejected";
                this.reason = reason;
            }
        };
        // 未完成，之后进行补充
    }
}

let aa = new myPromise();

console.log(aa);