"use strict";
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
// 定义一个操作mysql数据库的类, 注意: 要实现泛型接口  这个类也应该是一个泛型类
class MysqlDb {
    constructor() {
        console.log('数据库建立连接');
    }
    add(info) {
        console.log(info);
        return true;
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
// 定义一个操作mssql数据库的类
class MsSqlDb {
    constructor() {
        console.log('数据库建立连接');
    }
    add(info) {
        console.log(info);
        return true;
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        let list = [
            {
                title: 'xxx',
                desc: 'xx'
            },
            {
                title: 'xxx',
                desc: 'xx'
            }
        ];
        return list;
    }
}
// 操作用户表   定义一个User类和数据库表做映射
class User {
}
let u1 = new User();
u1.name = '张三';
u1.color = 'yellow';
let u2 = new User();
u2.name = '赵四';
u2.color = 'black';
let m1 = new MysqlDb();
m1.add(u1);
let ms1 = new MsSqlDb();
ms1.add(u2);
console.log(ms1.get(1));
