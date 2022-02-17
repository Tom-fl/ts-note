"use strict";
/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-17 08:45:54
 * @LastEditTime: 2022-02-17 10:31:59
 * @Email: str-liang@outlook.com
 * @FilePath: \ts-demo\ts03-类\index.ts
 * @Environment: Win 10
 * @Description: ts中的类
 */
// es5中的类
// 在es5中没有具体的方法定义类，一般我们采用构造函数
// 1.最简单的类
// function Person(){
//     this.name='张三';
//     this.age=20
// }
// let p1=new Person()
// console.log(p1.name)
// 2.构造函数加原型
// function Person(){
//     this.name='张三';
//     this.age=20;
//     this.run=function(){
//       console.log(this.name+'方法')
//     }
// }
// // 原型链上面的属性和方法会被多个实例共享，构造函数则不会
// Person.prototype.sex='男'
// Person.prototype.colorFn=function(){
//   console.log(this.name+'喜欢绿色')
// }
// Person.work=function(){
//   console.log(this.name+'在工作')
// }
// let p1=new Person()
// console.log(p1.name)
// console.log(p1.sex)
// p1.run()
// p1.colorFn()
// Person.work() // 静态方法
// 3.es5里的继承
// 3.1、使用call实现继承，缺点就是 不能继承原型上的方法和属性
// function Person(){
//     this.name='张三';
//     this.age=20;
//     this.run=function(){
//       console.log(this.name+'方法')
//     }
// }
// Person.prototype.sex='男'
// Person.prototype.colorFn=function(){
//   console.log(this.name+'喜欢绿色')
// }
// // web类  继承Person类  
// function Web(){
//   Person.call(this)
// }
// let w1=new Web()
// w1.run() // 只能继承构造函数里的方法,不能继承原型上的方法
// 3.2、使用原型继承
// 问题就是 通过原型继承，实例化出来的子类，没法给父类传参
// function Person(name,age){
//     this.name=name
//     this.age=age
//     this.run=function(){
//       console.log(this.name+'方法')
//     }
// }
// Person.prototype.sex='男'
// Person.prototype.colorFn=function(){
//   console.log(this.name+'喜欢绿色')
// }
// // web类  继承Person类  
// function Web(){
// }
// Web.prototype=new Person();//原型链实现继承
// let w1=new Web('嘻嘻',10) // ！！！问题 实例化子类的时候 没法给父类传参
// w1.run()
// w1.colorFn() // 原型上的方法
// 3.3、原型+构造函数组合实现继承
// function Person(name,age){
//     this.name=name
//     this.age=age
//     this.run=function(){
//       console.log(this.name+'方法')
//     }
// }
// Person.prototype.sex='男'
// Person.prototype.colorFn=function(){
//   console.log(this.name+'喜欢绿色')
// }
// // web类  继承Person类  
// function Web(name,age){
//   Person.call(this,name,age) // 通过call 实例化子类可以给父类传参，可以继承构造函数里的属性和方法
// }
// Web.prototype=new Person();//原型链实现继承   // Web.prototype=Person.prototype  这样写也可以
// let w1=new Web('嘻嘻',10) // ！！！问题 实例化子类的时候 没法给父类传参
// w1.run()
// w1.colorFn() // 原型上的方法
// 1.ts中的类
/**
 * ts中的类
 *      1.类的定义
 *      2.继承     extends、super
 *      3.类里面的修饰符
 *      4.静态属性  和 静态方法
 *      5.抽象类  继承  多态
*/
// 1.1 通过类定义属性和方法
// class Person{
//   name:string; // 属性   省略了public关键词
//   constructor(n:string){// 构造函数    实例化类的时候触发的方法
//     this.name=n
//   }
//   run():void{
//     console.log(this.name)
//   }
// }
// let p1=new Person('张三')
// p1.run()
// 1.2、获取和修改类中的属性
// class Person{
//   name:string;
//   constructor(n:string){
//     this.name=n
//   }
//   getName():string{
//     return this.name
//   }
//   setName(val:string):any{
//     return  this.name=val
//   }
// }
// let p1=new Person('张三')
// console.log(p1.getName())
// console.log(p1.setName('赵四'))
// 2.ts中实现继承   extends、super
// class Person{
//   name:string;
//   constructor(n:string){
//     this.name=n
//   }
//   run():void{
//    console.log(this.name+'在嘻嘻')
//   }
// }
// class Web extends Person{
//     constructor(n:string){
//       super(n) // 初始化父类的构造函数
//     }
//     strat(){
//       // 可以使用super关键字，调用父类的方法
//       super.run()
//     }
//     // 可以扩展自己的方法
//     work():void{
//       console.log(this.name+"在工作")
//     }
//     // 有自己的run方法，会优先调用自己的
//     run():void{
//       console.log('web里的run方法')
//     }
// }
// let p1=new Person('张三')
// let w1=new Web('赵四')
// p1.run()
// w1.run()
// w1.work()
// w1.strat()
// 3.ts类中的修饰符，ts中定义类 提供了三种修饰符
/**
 * public    :公有       在当前类里面  子类 类外部都可以访问
 * protected :保护类型   在当前类里面  子类里面可以访问，在类外部无法访问
 * private   :私有       在当前类里面可以访问 子类 和 类外部无法访问
 *
 * 属性如果不加修饰符 默认就是  公有(public)
*/
class Person {
    constructor(n, a, s) {
        this.name = n;
        this.age = a;
        this.sex = s;
    }
    pRun() {
        console.log(this.sex); // 私有属性，只有自己可以访问
    }
}
class Web extends Person {
    // 子类里访问
    wRun() {
        console.log(this.name + this.age);
        // console.log(this.sex) // 这是私有属性，在子类里面是无法访问的
        // 浏览器可以打印 是因为ts转换后的es5，ts控制台会报错
    }
}
let p1 = new Person('张三', 12, '男');
let w1 = new Web('赵四', 13, '女');
// 外部访问 
console.log(p1.name);
console.log(w1.name);
p1.pRun();
w1.wRun();
