/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-18 10:38:52
 * @LastEditTime: 2022-02-18 11:25:15
 * @Email: str-liang@outlook.com
 * @FilePath: \ts-note\ts07-模块\index.ts
 * @Environment: Win 10
 * @Description: ts 中的模块化
 */

// 把ts06 综合使用 封装统一，里的代码 进行模块化处理
import {MysqlDb,MsSqlDb} from './modules/db';

// 浏览器打开是不支持的，使用node可以查看


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