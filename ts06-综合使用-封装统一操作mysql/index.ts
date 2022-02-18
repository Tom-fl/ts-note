/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-18 10:03:09
 * @LastEditTime: 2022-02-18 10:36:58
 * @Email: str-liang@outlook.com
 * @FilePath: \ts-note\ts06-综合使用-封装统一操作mysql\index.ts
 * @Environment: Win 10
 * @Description: 定义一个操作数据库的库 支持mysql  MongDb
 */

/**
 *  功能:定义一个操作数据库的库 支持 myql  MongDb
 *  要求1:mysql MongDb 功能一样，都有 add  update  delete  get 方法
 *  注意:约束统一的规范，以及代码复用
 * 
 *  解决方案: 需要约束规范所以要定义接口，需要代码重用所以用到泛型
 *          1.接口:在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
 *          2.泛型 通俗理解: 泛型就是解决 类 接口 方法的复用性
*/

// 定义接口
interface DBI<T>{
  add(info:T):boolean;
  update(info:T,id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[];
}

// 定义一个操作mysql数据库的类, 注意: 要实现泛型接口  这个类也应该是一个泛型类
class MysqlDb<T> implements DBI<T>{
  constructor(){
    console.log('数据库建立连接')
  }
  add(info: T): boolean {
    console.log(info)
    return true
  }
  update(info: T,id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

// 定义一个操作mssql数据库的类
class MsSqlDb<T> implements DBI<T>{
  constructor(){
    console.log('数据库建立连接')
  }
  add(info: T): boolean {
    console.log(info)
    return true
  }
  update(info: T,id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    let list=[
      {
        title:'xxx',
        desc:'xx'
      },
      {
        title:'xxx',
        desc:'xx'
      }
    ]
    return list
  }
}

// 操作用户表   定义一个User类和数据库表做映射
class User{
  name:string | undefined;
  color:string | undefined;
}
let u1=new User();
u1.name='张三'
u1.color='yellow'

let u2=new User();
u2.name='赵四'
u2.color='black'

let m1=new MysqlDb<User>()
m1.add(u1);

let ms1=new MsSqlDb<User>();
ms1.add(u2)
console.log(ms1.get(1))