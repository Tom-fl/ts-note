/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-18 10:38:52
 * @LastEditTime: 2022-02-18 16:00:25
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



/**
 * 命名空间:
 *    在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内
 *    同java的包、.Net的命名空间一样，ts的命名空间 可以将代码包裹起来，只对外暴露需要在外部访问的对象
 * 
 * 命名空间和模块的区别:
 *    命名空间:内部模块，主要用于组织代码，避免命名冲突
 *    模块:ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
*/
//  namespace 通过关键字 namespace 来定义命名空间,在通过 export  暴露出来
// 也可以把命名空间封装成模块

namespace A{
 export let strA:string='adasd'
}

namespace B{
 export let strB:string='popo'

 export class Dog{
   name:string | undefined;
   color:string | undefined;

    constructor(n:string,c:string){
        this.name=n,
        this.color=c
    }

   msg(){
     return `${this.name}${this.color}`
      // return{
      //   name:this.name,
      //   color:this.color
      // }
   }
 }
}
let d1=new B.Dog('小狗','绿色')
console.log(d1.msg())
console.log(A.strA)
console.log(B.strB)