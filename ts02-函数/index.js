"use strict";
/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-16 15:56:43
 * @LastEditTime: 2022-02-16 17:33:21
 * @Email: str-liang@outlook.com
 * @FilePath: \ts-demo\ts02-函数\index.ts
 * @Environment: Win 10
 * @Description:
 */
// 一、函数的定义
// js 定义函数
// 1.函数声明
// function fun1(){
//   return 'fun1'
// }
// 2.匿名函数
// let fun2=function(){
//   return 'fun2'
// }
// ts定义函数
// 1.函数声明
// function fun1():string{
//   return 'aaa'
// }
// 2.匿名函数
// let fun2=function():string{
//   return 'bbb'
// }
// 二、ts中函数传参
// 2-1 ts中定义方法传参
// function getInfo(name:string,age:number):string{
//   return `${name}+${age}`
// }
// console.log(getInfo('张三',20))
// // ts没有返回值方法
// function fun3():void{
//   console.log('xx')
// }
// fun3()
// 2-2、可选参数
// 注意！！！！！！ (name?:string,age:number) 这样是错的，可选参数必须在后面
// js里方法实参和行参可以不一样，但是ts必须一样，如果不一样就得配置可选参数
// function getInfo(name:string,age?:number):string{
//   if(age){
//     return `${name}+${age}`
//   }else{
//     return `${name}+'保密'`
//   }
// }
// console.log(getInfo('张三',20))
// console.log(getInfo('张三'))
// 2-3、默认参数 
// function getInfo(name:string,age:number=20):string{
//     return `${name}+${age}`
// }
// console.log(getInfo('张三',10))
// console.log(getInfo('张三'))
// 2-4、剩余参数
// function sum(a:number,b:number,c:number){
//   return a+b+c
// }
// console.log(sum(1,2,3))
// 第二种写法
// function sum(...res:number[]):number{
//   // function sum(a:number,b:number,...res:number[]):number{ //也可以这样，a=1,b=2
//   let sum=0;
//   res.forEach(item=>sum+=item);
//   return sum
// }
// console.log(sum(1,2,3,4,5,6))
// 三、函数重载
// java中方法的重载:重载指的是两个或两个以上同名函数，但他们的参数不一样，这时会出现函数重载的情况
// ts中的重载:通过为同一个函数提供多个函数类型定义 来实现多种功能的目的
// ts为了兼容js 重载的写法和java中有区别
// js中出现同名，下面替换上面的
// ts中的重载
// function getInfo(name:string):string;
// function getInfo(age:number):number;
// function getInfo(str:any):any{
//   if(typeof str==='string'){
//     return '我是'+str
//   }else{
//     return '年龄'+str
//   }
// }
// console.log(getInfo('张三'))
// console.log(getInfo(12))
