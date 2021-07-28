class myPromise {
    constructor(executor) {
        /**
         * status  初始状态
         * 有三个状态（两种改变方式，改变后状态不会再变化）
         *          初始状态 pending
         *          成功状态 resolved
         *          失败状态 rejected
         * value    结果值接收
         * resolvedArr  成功事件池
         * rejectedArr     失败事件池
         */
        // 初始化属性值
        this.status = "pending";
        this.value = "undefined";
        this.resolvedArr = [];
        this.rejectedArr = [];
        // 改变状态的函数
        let changeStatus = (status, result) => {
            // 如果状态已经改变则不可再进行变化
            if (this.status !== "pending") return;
            this.status = status;
            this.value = result;
            // 根据状态变化接收事件池执行对应事件
            let eventPool = status === "rejected" ? this.rejectedArr : this.resolvedArr;
            eventPool.forEach(item => {
                typeof item === 'function' ? item(this.value) : null;
            })
        }
        /**
         * resolve  成功时执行的函数
         * reject  失败时执行的函数
         */
        let resolve = result => {
            if(this.resolvedArr.length>0){
                // 当成功事件池中存在事件时，改变当前状态为resolved
                changeStatus("resolved",result);
                return;
            }
            // 当成功事件池中不存在事件时，为实现promise的异步，采用setTimeout来实现，改变当前状态为resolved
            let delayTimer = setTimeout(()=>{
                clearTimeout(delayTimer);
                changeStatus("resolved",result);
            },0)
        }
        let reject = reason => {
            if(this.resolvedArr.length>0){
                // 原理同上
                changeStatus("rejected",reason);
                return;
            }
            let delayTimer = setTimeout(()=>{
                clearTimeout(delayTimer);
                changeStatus("rejected",reason);
            },0)
        }

        // 异常捕获处理
        try {
            executor(resolve,reject);
        } catch (error) {
            reject(error);
        }
    }
    // 定义与该类prototype上的 then 方法
    then(resolvedFn,rejectedFn){
        // 此处未完善，之后补充
    }
}

let aa = new myPromise();

console.log(aa);