/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-18 11:07:25
 * @LastEditTime: 2022-02-18 11:23:47
 * @Email: str-liang@outlook.com
 * @FilePath: \ts-note\ts07-模块\modules\db.ts
 * @Environment: Win 10
 * @Description: 
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




export {
  MysqlDb,
  MsSqlDb
}