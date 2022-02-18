"use strict";
/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-17 15:53:58
 * @LastEditTime: 2022-02-18 09:51:57
 * @Email: str-liang@outlook.com
 * @FilePath: \ts-note\ts05-泛型\index.ts
 * @Environment: Win 10
 * @Description: ts 中的泛型
 */
// ts中的泛型
/**
 * 1.泛型的定义
 * 2.泛型函数
 * 3.泛型类
 * 4.泛型接口
*/
// 1.泛型的定义
// 泛型: 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重复性。
// 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能
// 在像C# 和 java 这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种的数据
// 这样用户就可以以自己的数据类型来使用组件
// 通俗理解: 泛型就是解决 类  接口 方法的复用性、以及对不特定数据类型的支持（类型校验）
// 2.泛型函数
// 只能返回string类型的数据
// function getData(val:string):string{
//   return val;
// }
// 要求:同时返回string类型和 number类型，要求传入什么类型就返回什么类型
//  方法一   缺点 any 放弃了类型检查,返回类型可以不一致
// function getData(name:any):any{
//     return name
// }
// 方法二
// 使用泛型:可以支持不特定的数据类型
// T 表示泛型，具体什么类型是调用这个方法的时候决定的
// function getData<T>(val:T):T{
//   return val
// }
// console.log(getData<number>(123))
// console.log(typeof getData<number>(123))
// 3.泛型类
// 比如有个最小堆算法，需要同时支持返回数字和字符串两种类型，通过类的泛型实现
// 不是泛型写法
// class MinClass{
//   public list:number[]=[];
//   add(num:number){
//     this.list.push(num)
//   }
//   min():number{
//     let minNum=this.list[0]
//     for(let i=0;i<this.list.length;i++){
//       if(minNum>this.list[i]){
//         minNum=this.list[i]
//       }
//     }
//     return minNum
//   }
// }
// let m1=new MinClass()
// m1.add(2)
// m1.add(1)
// m1.add(3)
// console.log(m1.min())
// 类的泛型 写法
// class MinClass<T>{
//   public list:T[]=[];
//   add(value:T):void{
//     this.list.push(value)
//   }
//   min():T{
//     let minNum=this.list[0]
//     for(let i=0;i<this.list.length;i++){
//       if(minNum>this.list[i]){
//         minNum=this.list[i]
//       }
//     }
//     return minNum
//   }
// }
// let m1=new MinClass<number>(); // 实例化类  并且制定了类的T代表的类型是number
// m1.add(2)
// m1.add(1)
// m1.add(3)
// console.log(m1.min())
// 4、泛型接口
// 函数类型接口 写法
// interface ConfigFn{
//   (value1:string,value2:string):string;
// }
// let steData:ConfigFn=function(value1:string,value2:string):string{
//   return value1+value2
// }
// console.log(steData('name','张三'))
// 泛型接口  写法1
// interface ConfigFn{
//   <T>(value1:T):T;
// }
// let steData:ConfigFn=function<T>(value1:T):T{
//   return value1
// }
// console.log(steData<string>('name'))
// 泛型接口  写法2
// interface ConfigFn<T>{
//     (value:T):T;
// }
// function getData<T>(value:T):T{
//   return value
// } 
// let myGetData:ConfigFn<string>=getData;
// console.log(myGetData('20'))
// 把类作为参数类型的泛型类
// 泛型: 泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型校验),如何把类当做参数的泛型类
// 1. 定义个类
// 2. 把类作为参数来约束数据传入的类型
// 定义一个User的类 这个类的作用就是映射数据库字段
// 然后定义一个 MysqlDb的类 这个类用于操作数据库
// 然后把User类作为参数传入到MysqlDb中
/**
  let user=new User({
    name:'张三',
    pwd:'123'
  })
  let Db=new MysqlDb();
  Db.add(user)
*/
// 把类作为参数来约束数据传入的类型
// class User{
//   userName:string | undefined;
//   password:string | undefined;
// }
// class MysqlDb{
//   add(user:User):boolean{
//     console.log(user)
//     return true;
//   }
// }
// let u1=new User();
// u1.userName='张三';
// u1.password='12312';
// let m1=new MysqlDb();
// m1.add(u1)
// 泛型写法
// 操作数据库的泛型类
class MysqlDb {
    add(user) {
        console.log(user);
        return true;
    }
}
// 1.定义一个User类和数据库进行映射
// class User{
//   userName:string | undefined;
//   password:string | undefined;
// }
// let u1=new User();
// u1.userName='张三';
// u1.password='12312';
// let m1=new MysqlDb<User>();
// m1.add(u1)
// 2.定义一个Cat类，和数据库进行映射
class Cat {
    constructor(params) {
        this.name = params.n;
        this.color = params.c;
    }
}
let c1 = new Cat({ n: '小猫', c: 'red' });
let Db = new MysqlDb();
Db.add(c1);
