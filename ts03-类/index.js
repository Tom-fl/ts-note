"use strict";
/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-17 08:45:54
 * @LastEditTime: 2022-02-17 13:35:04
 * @Email: str-liang@outlook.com
 * @FilePath: \ts-note\ts03-类\index.ts
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
// class Person{
//   public name:string; // 表示公有属性
//   protected age:number; // 表示保护类型属性
//   private sex:string;
//   constructor(n:string,a:number,s:string){
//     this.name=n;
//     this.age=a;
//     this.sex=s;
//   }
//   pRun():void{
//     console.log(this.sex) // 私有属性，只有自己可以访问
//   }
// }
// class Web extends Person{
//   // 子类里访问
//     wRun():void{
//       console.log(this.name+this.age)
//       // console.log(this.sex) // 这是私有属性，在子类里面是无法访问的
//       // 浏览器可以打印 是因为ts转换后的es5，ts控制台会报错
//     }
// }
// let p1=new Person('张三',12,'男')
// let w1=new Web('赵四',13,'女')
// // 外部访问 
// console.log(p1.name)
// console.log(w1.name)
// p1.pRun()
// w1.wRun()
// 4、静态属性和静态方法
// 4.1、es5中 静态属性 静态方法
// function Person(){
//   this.run1=function(){ // 实例方法 必须new调用
//   }
// }
// Person.run2=function(){ // 静态方法
// }
// let p1=new Person();
// p1.run1()
// Person.run2() // 静态方法调用
// 4.2、ts中静态属性和静态方法
// class Person {
//   public name:string;
//   static staticName:string='我是静态name'
//   constructor(n:string) {
//       this.name=n
//   }
//   // 实例方法
//   run():void{
//     console.log(this.name)
//   }
//   // 静态方法
//   // 注意静态方法不能调用类里面的属性
//   static work():void{
//     console.log(Person.staticName+'静态方法')
//   }
// }
// let p1=new Person('张三')
// p1.run()
// Person.work() // 调用静态方法
// console.log(Person.staticName)
// 5、抽象类 多态
// 什么是多态:父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
// 多态 也属于继承的一种
// class Animal {
//    name:string;
//   constructor(n:string) {
//     this.name=n
//   }
//   eat():void{ // 具体吃什么，让继承他的子类去实现，每一个子类的表现都不一样
//     console.log('吃的方法')    
//   }
// }
// class Dog extends Animal {
//     constructor(n:string){
//       super(n)
//     }
//     eat() {
//       return this.name+'吃肉'
//     }
// }
// class Cat extends Animal {
//     constructor(n:string){
//       super(n)
//     }
//     eat() {
//       return this.name+'吃老鼠'
//     }
// }
// let c1=new Cat('猫')
// console.log(c1.eat())
// 4.3、抽象类
// 抽象类 他是提供其他类继承的基类，不能直接被实例化
// 同abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// abstract 抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准， 标准: Animal 这个类要求他的子类 必须包含eat方法
class Animal {
    constructor(n) {
        this.name = n;
    }
}
// let a1=new Animal() // 错误写法
class Dog extends Animal {
    constructor(n) {
        super(n);
    }
    //  子类 必须定义 eat 方法
    eat() {
        console.log(this.name + '吃肉');
    }
}
let d1 = new Dog('狗子');
d1.eat();
