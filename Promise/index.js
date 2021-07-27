class handPromise {
    static status = "pending"; //状态：pending(等待)、fulfilled(成功)、rejected(失败)
    static value = "undefined";//成功态时有一个不可变的值
    static reason = "undefined";//失败态存在一个不可变的失败原因
    constructor(executor) {
        let resolve = (value) => {
            if (this.status == "pending") {
                this.status = "fulfilled";
                this.value = value;
            }
        }
        let reject = (reason) => {
            if (this.status == "pending") {
                this.status = "rejected";
                this.reason = reason;
            }
        }
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        // 状态为fulfilled，执行onFulfilled，传入成功的值
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        };
        // 状态为rejected，执行onRejected，传入失败的原因
        if (this.state === 'rejected') {
            onRejected(this.reason);
        };
    }
}

new handPromise();