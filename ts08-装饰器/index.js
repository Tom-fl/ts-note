"use strict";
/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-18 16:07:26
 * @LastEditTime: 2022-02-18 18:51:31
 * @Email: str-liang@outlook.com
 * @FilePath: \ts-note\ts08-装饰器\index.ts
 * @Environment: Win 10
 * @Description: ts 中的装饰器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * 装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为
 * 通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能
 * 常见的装饰器: 类装饰器、属性装饰器、方法装饰器、参数装饰器
 * 装饰器的写法:普通装饰器(无法传参) 、 装饰器工厂(可传参)
 * 装饰器是过去几年中js最大的成就之一，也是es7的标准特性之一
 *
*/
// 1.类装饰器:类装饰器在类声明之前被声明(紧靠着类声明) 类装饰器应用于类构造函数，可以用来监视、修改或替换类定义
// 普通装饰器  (无法传参)
// function logClass(params:any){
//   // params 就是当前类
//   console.log(params)
//   params.prototype.url='动态扩展的属性'
//   params.prototype.fn=function(){
//     console.log('动态扩展的方法')
//   }
// }
// @logClass
// class HttpClient{
// }
// let h1:any=new HttpClient()
// h1.fn()
// console.log(h1.url)
// 装饰器工厂  (可传参)
// function logClass(params:string){
//   return function(target:any){
//     console.log(target)
//     console.log(params)
//     target.prototype.url=params
//   }
// }
// @logClass('http://')
// class HttpClient{
// }
// let h1:any=new HttpClient()
// console.log(h1.url)
/**
 * 重载构造函数的例子
 * 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
 * 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
 *
 * */
// function logClass(target:any){
//   console.log(target)
//   // 通过继承 来修改 构造函数里的数据
//   return class extends target{
//     url:any='我是修改后的数据'
//     getData(){
//       console.log('也必须要写')
//     }
//   }
// }
// @logClass
// class HttpClient{
//   public url:string | undefined;
//   constructor(u:string){
//     this.url=u
//   }
//   getData(){
//     console.log(this.url)
//   }
// }
// let h1=new HttpClient('http://')
// h1.getData()
// 2.属性装饰器
/**
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数:
 *      1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *      2. 成员的名字
 *
*/
// 属性装饰器
// function logProperty(params:any){
//   return function(target:any,attr:any){
//     console.log(target)
//     console.log(attr)
//     console.log(params)
//     target[attr]=params
//   }
// } 
// class HttpClient{
//   @logProperty('ppopop')
//   public url:string | undefined
//   getData(){
//     console.log(this.url)
//   }
// }
// let h1:any=new HttpClient()
// h1.getData()
/**
 * 3.方法装饰器
 *  它会被应用到方法的 属性描述符上，可以用来监视、修改、或者替换方法定义
 *
 *  方法装饰器会在运行时传入3个参数:
 *      1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *      2.成员的名字
 *      3.成员的属性描述符
 *
*/
// function logMethod(params:any){
//   return function(target:any,methodsName:any,desc:any){
//     console.log(target)
//     console.log(methodsName)
//     console.log(desc)
//     console.log(params)
//     // 修改原方法(getData)的值
//     var oMethod=desc.value;
//     // 替代了getData方法
//     desc.value=function(...args:any[]){
//       args=args.map(val=>{
//         return String(val)
//       })
//       console.log(args)
//       oMethod.apply(this,args)
//     }
//     // 也可以增加属性
//     target.addAttr='我是增加的属性'
//     // 也可以增加方法
//     target.addRun=function(){
//       console.log('我是增加的方法')
//     }
//   }
// }
// class HttpClient{
//   public url:string | undefined
//   constructor(u:any){
//     this.url=u
//   }
//   @logMethod('参数')
//   getData(...args:any[]){
//     console.log(args)
//     console.log(this.url+'----getData')
//   }
// }
// let h1:any=new HttpClient('url')
// h1.getData('12','xx')
// h1.addRun()
// console.log(h1.addAttr)
/**
 * 4.方法参数装饰器
 *  参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入3个参数
 *      1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *      2.方法的名字
 *      3.参数在函数参数列表中的索引
 *
 * */
// function logParams(params:any){
//   return function(target:any,methodName:any,paramsIndex:any){
//     console.log(params)
//     console.log(target)
//     console.log(methodName)
//     console.log(paramsIndex)
//     target.url=params
//   }
// }
// class HttpClient{
//   public url:string | undefined
//   constructor(){
//   }
//   getData(@logParams('参数') id:any){
//     console.log(id)
//   }
// }
// let h1=new HttpClient()
// h1.getData(123)
// console.log(h1.url+'---新增的参数')
// ----------------------------------------------------- 装饰器的执行顺序
/**
 * 两种结果:
 *      一、属性 -> 方法 -> 方法参数 -> 类
 *      二、属性 -> 方法参数 -> 方法 -> 类
 *   ----------------------不明白很疑惑，百度上大部分都说的是第一种，也有少部分说是第二种=------------------------------------------
 * 如果class只定义了一个函数 是第二种执行顺序
 * 如果定义了两个函数,在第二个函数的参数里，写上 方法参数装饰器的话，就会执行第一种顺序
 * */
function logClass1(params) {
    return function (target) {
        console.log('类1装饰器');
    };
}
function logClass2(params) {
    return function (target) {
        console.log('类2装饰器');
    };
}
function logProperty(params) {
    return function (target, attr) {
        console.log('属性装饰器');
    };
}
function logMethod1(params) {
    return function (target, methodsName, desc) {
        console.log('方法装饰器11111');
    };
}
function logMethod2() {
    return function (target, methodsName, desc) {
        console.log('方法装饰器2222');
    };
}
function logParams1(params) {
    return function (target, methodName, paramsIndex) {
        console.log('方法参数装饰器1');
    };
}
function logParams2(params) {
    return function (target, methodName, paramsIndex) {
        console.log('方法参数装饰器2');
    };
}
let HttpClient = class HttpClient {
    constructor() {
    }
    // --------------------------------区别在这--------------------
    // getVal(){}  // 打开这行代码，顺序就是 第一种顺序
    getData(id1, id2) {
        return true;
    }
};
__decorate([
    logProperty('属性装饰器参数')
], HttpClient.prototype, "url", void 0);
__decorate([
    logMethod1('方法装饰器参数'),
    logMethod2(),
    __param(0, logParams1('方法装饰器参数1 的 参数')),
    __param(1, logParams2('方法装饰器参数2 的 参数'))
], HttpClient.prototype, "getData", null);
HttpClient = __decorate([
    logClass1('类1装饰器参数'),
    logClass2('类2装饰器参数')
], HttpClient);
let h1 = new HttpClient();
h1.getData(1, 2);
