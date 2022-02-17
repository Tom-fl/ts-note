"use strict";
/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-16 14:01:10
 * @LastEditTime: 2022-02-16 15:52:00
 * @Email: str-liang@outlook.com
 * @FilePath: \ts-demo\ts01\index.ts
 * @Environment: Win 10
 * @Description:
 */
// boolean类型
// let flag:boolean=true
// flag=123  // 报错
// flag=false
// number类型
// let num:number=123
// num='666' // 报错
// num=555
// console.log(num)
// --------------------------数组类型--------------------------
// js
// var arr=[1,false,'ddd']
// ts
// 第一种定义数组的方式
// let arr:number[]=[1,2,3,4,5]
// console.log(arr)
// let str:string[]=['rr','ww']
// console.log(str)
// 第二种定义数组的方式
// let arr:Array<number>=[1,2,3,4]
// console.log(arr)
// 第三种定义数组的方式
// let arr:any[]=[1,'xx',false]
// console.log(arr)
// --------------------------元组类型(tuple)属于数组的一种--------------------------
// 可以指定数组某个数据的类型
// let arr:[string,number,boolean]=['str',123,false]
// console.log(arr)
// 枚举类型 enum
// 比如对状态进行标识: 0 未支付  1 支付  2 成功
// enum Color{red=1,blue=10,yellow}
// let c1:Color=Color.red
// let c2=Color.blue
// let c3:Color=Color.yellow
// // c3没有赋值的话，前面的值都是数字化，会自动默认紧跟前面的值
// console.log(c1,c2,c3) // 1 10 11
// 全部都不赋值情况
// enum Color{red,blue,yellow}
// let c1:Color=Color.red
// let c2:Color=Color.blue
// let c3:Color=Color.yellow
// console.log(c1,c2,c3) // 都不赋值的情况下，默认是打印他们的索引
// 任意类型
// let num:any=123
// num='add'
// console.log(num)
// 用处
// let box:any=document.querySelector('#div')
// box.style.color='red'
// console.log(box)
// null 和 undefined
// let num:number
// console.log(num) // undefined  报错
// let num1:undefined
// console.log(num1) // undefined 不提示错误
// let num2:number | undefined
// num2=123
// console.log(num2)
// void类型
// js语法
// function run(){
//   console.log('run')
// }
// run()
// ts
// 表示方法没有返回任何类型
// function run():void{
//   console.log('run')
// }
// run()
// // 表示有返回值  正确写法
// function sumfn():number{
//   return 132
// }
// sumfn()
// never类型
// var  a:never;
// a=123;// 报错
// var b:null
// b=null//正确
var a;
a = (() => {
    throw new Error('错误');
})();
