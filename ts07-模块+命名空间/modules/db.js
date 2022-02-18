"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsSqlDb = exports.MysqlDb = void 0;
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
exports.MysqlDb = MysqlDb;
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
exports.MsSqlDb = MsSqlDb;
