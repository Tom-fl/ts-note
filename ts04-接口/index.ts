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

// ts中的接口
/**
 * 1.属性类接口
 * 2.函数类型接口
 * 3.可索引接口
 * 4.类 类型接口
 * 5.接口扩展
*/


// 接口的作用
//在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
// 接口定义了某一批所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类必须提供某些方法，提供这些方法的类就可以满足实际需要
// ts中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
// 一种定义标准


// 1.属性接口
// 1.1、对json的约束
// function printLabel(labelInfo:{label:string}){
//   console.log(labelInfo)
// }
// // printLabel('hhhh') //错误的
// // printLabel({name:'xx'}) // 错误
// printLabel({label:'xxx'})

// 1.2、 对批量方法传入参数进行约束
// interface FullName{
//   firstName:string;
//   lastName:string;
//   age?:number; // 可选参数，可传 可不传
// }

// function printName(name:FullName){
//   // 要求必须传入对象   firstName  lastName  
//   console.log(name)
// }
// printName({firstName:'张',lastName:'三'}) 
// printName({firstName:'张',lastName:'三',age:22}) 


// 1.3、小例子 封装ajax

// interface Ajax{
//     type:string;
//     url:string;
//     data?:string;
//     dataType:string
// }
// function ajaxFn(item:Ajax){
//   let xhr=new XMLHttpRequest();
//   xhr.open(item.type,item.url,true);
//   xhr.send(item.data);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState==4&&xhr.status==200){
//       if(item.dataType=='json'){
//         console.log(xhr.responseText)
//       }
//     }
//   }
// }

// ajaxFn({type:'get',url:'https://httpbin.org/headers',data:'data',dataType:'json'})


// 2.函数类型接口
// 对方法传入的参数  以及返回值进行约束

// 小例子  加密的函数类型接口
// interface encrypt{
//   (key:string,value:string):string
// }

// let md5:encrypt=function(key:string,value:string):string{
//     // 模拟操作
//     return key + value;
// }
// console.log(md5('name','zhangshan'))


// 3.可索引接口
//  意思就是对 数组  对象  的约束 (不常用)

// 3.1、对数组的约束
// interface UserArr{
//   [index:number]:string
// }
// let arr:UserArr=['123','456']
// console.log(arr)

// 3.2、对 对象的约束
// interface UserObj{
//   [index:string]:string
// }

// let obj:UserObj={name:'张三',sex:'男'}
// console.log(obj)


// 4、类 类型接口
// 对类的约束  和 抽象类有点相似

// interface Animal{
//   name:string;
//   eat(str:string):void;
// }
// // implements 关键字 实现 Animal 接口

// class Dog implements Animal{
//     name: string;
//     constructor(n:string){
//       this.name=n
//     }

//     eat(val:string) {
//         console.log(this.name+val)
//     }
// }

// let d1=new Dog('狗子');
// d1.eat('爱睡觉');


// 5. 接口扩展 : 接口可以继承接口

interface Animal{
  eat():void;
}
interface Person extends Animal{
  work():void;
}

class Programmer{
  public name:string;
  constructor(n:string){
    this.name=n
  }
  coding(code:string){
    console.log(this.name+code)
  }
}

class Web extends Programmer implements Person{
  // public name:string;

  constructor(n:string){
    super(n)
    // this.name=n
  }
  
  eat(){
    console.log(this.name+'吃饭');
  }
  work(){
    console.log(this.name+'工作');
  }
}
let p1=new Web('张三')
p1.eat()
p1.work()
p1.coding('写代码')