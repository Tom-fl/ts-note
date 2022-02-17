"use strict";
/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-17 13:54:10
 * @LastEditTime: 2022-02-17 15:50:58
 * @Email: str-liang@outlook.com
 * @FilePath: \ts-note\ts04-接口\index.ts
 * @Environment: Win 10
 * @Description: ts 接口
 */
class Programmer {
    constructor(n) {
        this.name = n;
    }
    coding(code) {
        console.log(this.name + code);
    }
}
class Web extends Programmer {
    // public name:string;
    constructor(n) {
        super(n);
        // this.name=n
    }
    eat() {
        console.log(this.name + '吃饭');
    }
    work() {
        console.log(this.name + '工作');
    }
}
let p1 = new Web('张三');
p1.eat();
p1.work();
p1.coding('写代码');
