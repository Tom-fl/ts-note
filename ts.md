# ts

### 介绍

- ts是js的超集，遵循了es6语法，扩展了js语法
- ts更像java、c#这样的面向对象语言

###### 安装

- npm i typescript -g   &  yarn add typescript global

###### 运行

- tsc helloworld.ts

###### 热更新

1. 在当前目录输入`tsc --init` 会生成一个 **tsconfig.json**文件，在文件中找到 `outDir` 修改成 `"outDir": "./js" `修改的话就是js文件下，不修改就是在当前目录生成js文件
2. 编辑器里: 终端 -> 运行任务 -> 选择typescript -> 选择监视ts



### 数据类型

###### 布尔类型(boolean )

- ```js
  // js
  var a ='str'
  a=12
  a=false
  
  // ts 定义变量必须指定类型
  var flag:boolean = true
  // flag='123' // 报错
  flag=false
  ```

- **number、string 同理**

###### 数字类型(number)

###### 字符串类型(string)

###### 数组类型(array)

- ```js
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
  ```

###### 元组类型(tuple)

- 属于数组的一种

- ```js
  // 可以指定数组某个数据的类型
  // let arr:[string,number,boolean]=['str',123,false]
  // console.log(arr)
  ```

###### 枚举类型(enum)

- ```js
  // 比如对状态进行标识: 0 未支付  1 支付  2 成功
  
  // enum Color{red=1,blue=10,yellow}
  // let c1:Color=Color.red
  // let c2=Color.blue
  // let c3:Color=Color.yellow
  // // c3没有赋值的话，前面的值都是数字化，会自动默认紧跟前面的值
  // console.log(c1,c2,c3) // 1 10 11
  
  // 全部都不赋值情况
  enum Color{red,blue,yellow}
  let c1:Color=Color.red
  let c2:Color=Color.blue
  let c3:Color=Color.yellow
  console.log(c1,c2,c3) // 都不赋值的情况下，默认是打印他们的索引
  ```

###### 任意类型(any)

- ```js
  let num:any=123
  num='add'
  console.log(num)
  ```

- 用处

- ```js
  let box:any=document.querySelector('#div')
  box.style.color='red'
  console.log(box)
  ```

- 不指定任意类型的话，ts会提示你代码错误

###### null 和 undefined

- 其他数据类型的子类型

- ```js
  let num:number
  console.log(num) // undefined  报错
  
  let num1:undefined
  console.log(num1) // undefined 不提示错误
  
  let num2:number | undefined
  num2=123
  console.log(num2)
  ```

- null 道理同理

###### void类型

- ts 中的void表示没有任何类型，一般用于定义方法的时候 方法没有返回值

- ```js
  // js语法
  // function run(){
  //   console.log('run')
  // }
  // run()
  
  // ts
  // 表示方法没有返回任何类型
  function run():void{
    console.log('run')
  }
  run()
  
  // 表示有返回值  正确写法
  function sumfn():number{
    return 132
  }
  sumfn()
  ```

###### never类型

- 其他类型 (包括`null`和`undefined`)的子类型，代表从不会出现的值，**声明never的变量只能被never类型所赋值**

- ```js
  // var  a:never;
  // a=123;// 报错
  
  // var b:null
  // b=null//正确
  
  var a:never;
  a=(()=>{
    throw new Error('错误')
  })()
  ```

### 函数

###### 函数的定义

- ```js
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
  ```

###### 函数中传参

1. ts中定义方法传参

   - ```js
     // function getInfo(name:string,age:number):string{
     //   return `${name}+${age}`
     // }
     // console.log(getInfo('张三',20))
     
     // // ts没有返回值方法
     // function fun3():void{
     //   console.log('xx')
     // }
     // fun3()
     ```

2. 可选参数

   - js里方法实参和行参可以不一样，但是ts必须一样，如果不一样就得配置可选参数

   - ```js
     // function getInfo(name:string,age?:number):string{
     //   if(age){
     //     return `${name}+${age}`
     //   }else{
     //     return `${name}+'保密'`
     //   }
     // }
     // console.log(getInfo('张三',20))
     // console.log(getInfo('张三'))
     ```

   - **注意！！！！！！ (name?:string,age:number) 这样是错的，可选参数必须在后面**

3. 默认参数

   - ```js
     // function getInfo(name:string,age:number=20):string{
     //     return `${name}+${age}`
     // }
     // console.log(getInfo('张三',10))
     // console.log(getInfo('张三'))
     ```

4. 剩余参数

   - ```js
     // 第一种写法
     // function sum(a:number,b:number,c:number){
     //   return a+b+c
     // }
     // console.log(sum(1,2,3))
     ```

   - ```js
     // 第二种写法
     // function sum(...res:number[]):number{
     //   // function sum(a:number,b:number,...res:number[]):number{ //也可以这样，a=1,b=2
     //   let sum=0;
     //   res.forEach(item=>sum+=item);
     //   return sum
     // }
     // console.log(sum(1,2,3,4,5,6))
     ```

###### 函数重载

- java中方法的重载:重载指的是两个或两个以上同名函数，但他们的参数不一样，这时会出现函数重载的情况

- ts中的重载:通过为同一个函数提供多个函数类型定义 来实现多种功能的目的,ts为了兼容js 重载的写法和java中有区别

- js中出现同名，下面方法替换上面方法

- ```js
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
  ```



### 类

##### es5中的类

- 最简单的类

  - ```js
    function Person(){
        this.name='张三';
        this.age=20
    }
    ```

- 构造函数加原型

  - ```js
    function Person(){
        this.name='张三';
        this.age=20;
        this.run=function(){
          console.log(this.name+'方法')
        }
    }
    // 原型链上面的属性和方法会被多个实例共享，构造函数则不会
    Person.prototype.sex='男'
    Person.prototype.colorFn=function(){
      console.log(this.name+'喜欢绿色')
    }
    Person.work=function(){
      console.log(this.name+'在工作')
    }
    
    let p1=new Person()
    
    console.log(p1.name)
    console.log(p1.sex)
    p1.run()
    p1.colorFn()
    Person.work() // 静态方法
    ```

###### es5中的继承

- 使用call实现继承，缺点`不能继承原型上的方法和属性`

  - ```js
    function Person(){
        this.name='张三';
        this.age=20;
        this.run=function(){
          console.log(this.name+'方法')
        }
    }
    Person.prototype.sex='男'
    Person.prototype.colorFn=function(){
      console.log(this.name+'喜欢绿色')
    }
    // web类  继承Person类  
    function Web(){
      Person.call(this)
    }
    let w1=new Web()
    w1.run() // 只能继承构造函数里的方法,不能继承原型上的方法
    ```

- 最终使用`原型+构造函数组合实现继承`

  - ```js
    function Person(name,age){
        this.name=name
        this.age=age
        this.run=function(){
          console.log(this.name+'方法')
        }
    }
    Person.prototype.sex='男'
    Person.prototype.colorFn=function(){
      console.log(this.name+'喜欢绿色')
    }
    // web类  继承Person类  
    function Web(name,age){
      Person.call(this,name,age) // 通过call 实例化子类可以给父类传参，可以继承构造函数里的属性和方法
    }
    Web.prototype=new Person();//原型链实现继承   // Web.prototype=Person.prototype  这样写也可以
    let w1=new Web('嘻嘻',10) // ！！！问题 实例化子类的时候 没法给父类传参
    w1.run()
    w1.colorFn() // 原型上的方法
    ```

##### ts中的类

###### 类的定义

- 通过类定义属性和方法

  - ```js
    class Person{
      name:string; // 属性   省略了public关键词
      constructor(n:string){// 构造函数    实例化类的时候触发的方法
        this.name=n
      }
      run():void{
        console.log(this.name)
      }
    }
    let p1=new Person('张三')
    p1.run()
    ```

- 获取和修改类中的属性

  - ```js
    class Person{
      name:string;
      constructor(n:string){
        this.name=n
      }
      getName():string{
        return this.name
      }
      setName(val:string):any{
        return  this.name=val
      }
    }
    let p1=new Person('张三')
    console.log(p1.getName())
    console.log(p1.setName('赵四'))
    ```

###### 类的继承

- ts中实现继承  extends、super

  - ```js
    class Person{
      name:string;
      constructor(n:string){
        this.name=n
      }
      run():void{
       console.log(this.name+'在嘻嘻')
      }
    }
    
    class Web extends Person{
        constructor(n:string){
          super(n) // 初始化父类的构造函数
        }
        strat(){
          // 可以使用super关键字，调用父类的方法
          super.run()
        }
        // 可以扩展自己的方法
        work():void{
          console.log(this.name+"在工作")
        }
        // 有自己的run方法，会优先调用自己的
        run():void{
          console.log('web里的run方法')
        }
    }
    let p1=new Person('张三')
    let w1=new Web('赵四')
    p1.run()
    w1.run()
    w1.work()
    w1.strat()
    ```

###### 类里的修饰符

- ts类中的修饰符，ts中定义类 提供了三种修饰符

- | public (公有)        | 在当前类里面  子类 类外部都可以访问              |
  | :------------------- | ------------------------------------------------ |
  | protected (保护类型) | 在当前类里面  子类里面可以访问，在类外部无法访问 |
  | private (私有)       | 在当前类里面可以访问 子类 和 类外部无法访问      |

- **属性如果不加修饰符 默认就是  公有(public)**

  - ```js
    class Person{
      public name:string; // 表示公有属性
      protected age:number; // 表示保护类型属性
      private sex:string;
      constructor(n:string,a:number,s:string){
        this.name=n;
        this.age=a;
        this.sex=s;
      }
      pRun():void{
        console.log(this.sex) // 私有属性，只有自己可以访问
      }
    }
    
    class Web extends Person{
      // 子类里访问
        wRun():void{
          console.log(this.name+this.age)
          // console.log(this.sex) // 这是私有属性，在子类里面是无法访问的
          // 浏览器可以打印 是因为ts转换后的es5，ts控制台会报错
        }
    }
    let p1=new Person('张三',12,'男')
    let w1=new Web('赵四',13,'女')
    // 外部访问 
    console.log(p1.name)
    console.log(w1.name)
    p1.pRun()
    w1.wRun()
    ```

###### 静态属性 和 静态方法

- 通过`static`关键字 定义静态属性和静态方法

- ```js
  class Person {
    public name:string;
    static staticName:string='我是静态name'
    constructor(n:string) {
        this.name=n
    }
  
    // 实例方法
    run():void{
      console.log(this.name)
    }
  
    // 静态方法
    // 注意静态方法不能调用类里面的属性
    static work():void{
      console.log(Person.staticName+'静态方法')
    }
  }
  
  let p1=new Person('张三')
  p1.run()
  Person.work() // 调用静态方法
  console.log(Person.staticName)
  ```

###### 抽象类 多态

- 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现

- 多态 也属于继承的一种

  - ```js
    class Animal {
       name:string;
    
      constructor(n:string) {
        this.name=n
      }
    
      eat():void{ // 具体吃什么，让继承他的子类去实现，每一个子类的表现都不一样
        console.log('吃的方法')    
      }
    }
    
    class Dog extends Animal {
        constructor(n:string){
          super(n)
        }
    
        eat() {
          return this.name+'吃肉'
        }
    }
    
    class Cat extends Animal {
        constructor(n:string){
          super(n)
        }
    
        eat() {
          return this.name+'吃老鼠'
        }
    }
    let c1=new Cat('猫')
    console.log(c1.eat())
    ```

- 抽象类

  - 抽象类 他是提供其他类继承的基类，不能直接被实例化

  - `abstract`关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现

  - `abstract `抽象方法只能放在抽象类里面

  - 抽象类和抽象方法用来定义标准， 标准: Animal 这个类要求他的子类 必须包含eat方法

  - ```js
    abstract class Animal {
       name:string;
       constructor(n:string){
        this.name=n
       }
     abstract eat():any;
    }
    // let a1=new Animal() // 错误写法
    
    class Dog extends Animal{
       constructor(n:string){
        super(n)
       }
      //  子类 必须定义 eat 方法
      eat(){
        console.log(this.name+'吃肉')
      }
    }
    
    let d1=new Dog('狗子')
    d1.eat()
    ```



### 接口

- 接口的作用
  - 在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用
  - 接口定义了某一批所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类必须提供某些方法，提供这些方法的类就可以满足实际需要
  - ts中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等
  - **一种定义标准** 通过**interface**关键字来定义

##### 属性类接口

###### 对json的约束

- ```js
  function printLabel(labelInfo:{label:string}){
    console.log(labelInfo)
  }
  // printLabel('hhhh') //错误的
  // printLabel({name:'xx'}) // 错误
  printLabel({label:'xxx'})
  ```

###### 对批量方法传入参数进行约束

- ```js
  interface FullName{
    firstName:string;
    lastName:string;
    age?:number; // 可选参数，可传 可不传
  }
  
  function printName(name:FullName){
    // 要求必须传入对象   firstName  lastName  
    console.log(name)
  }
  printName({firstName:'张',lastName:'三'}) 
  printName({firstName:'张',lastName:'三',age:22}) 
  
  ```

###### 小例子  封装ajax

- 通过`interface`关键字来定义约束

- ```js
  interface Ajax{
      type:string;
      url:string;
      data?:string;
      dataType:string
  }
  function ajaxFn(item:Ajax){
    let xhr=new XMLHttpRequest();
    xhr.open(item.type,item.url,true);
    xhr.send(item.data);
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        if(item.dataType=='json'){
          console.log(xhr.responseText)
        }
      }
    }
  }
  
  ajaxFn({type:'get',url:'https://httpbin.org/headers',data:'data',dataType:'json'})
  ```

##### 函数类型接口

- 对方法传入的参数  以及返回值进行约束

  - ```js
    // 小例子  加密的函数类型接口
    interface encrypt{
      (key:string,value:string):string
    }
    
    let md5:encrypt=function(key:string,value:string):string{
        // 模拟操作
        return key + value;
    }
    console.log(md5('name','zhangshan'))
    ```

##### 可索引接口

- 意思就是对 数组  对象  的约束 (不常用)

  - ```js
    // 对数组的约束
    interface UserArr{
      [index:number]:string
    }
    let arr:UserArr=['123','456']
    console.log(arr)
    
    // 对 对象的约束
    interface UserObj{
      [index:string]:string
    }
    
    let obj:UserObj={name:'张三',sex:'男'}
    console.log(obj)
    ```

##### 类 类型接口

- 对类的约束  和 抽象类有点相似

  - ```js
    interface Animal{
      name:string;
      eat(str:string):void;
    }
    // implements 关键字 实现 Animal 接口
    
    class Dog implements Animal{
        name: string;
        constructor(n:string){
          this.name=n
        }
    
        eat(val:string) {
            console.log(this.name+val)
        }
    }
    
    let d1=new Dog('狗子');
    d1.eat('爱睡觉');
    ```

##### 接口扩展

- 接口可以继承接口

  - ```js
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
    ```

### 泛型

##### 泛型的定义

- 泛型: 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重复性。
- 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能
- 在像C# 和 java 这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种的数据
- 这样用户就可以以自己的数据类型来使用组件
- **通俗理解: 泛型就是解决 类  接口 方法的复用性、以及对不特定数据类型的支持（类型校验）**

##### 泛型函数

- 要求:同时返回string类型和 number类型，要求传入什么类型就返回什么类型

- 方法一  缺点 any 放弃了类型检查,返回类型可以不一致

  - ```js
    function getData(name:any):any{
        return name
    }
    ```

- 方法二 使用泛型:可以支持不特定的数据类型

- T 表示泛型，具体什么类型是调用这个方法的时候决定的

  - ```js
    function getData<T>(val:T):T{
      return val
    }
    console.log(getData<number>(123))
    console.log(typeof getData<number>(123))
    ```

##### 泛型类

- 比如有个最小堆算法，需要同时支持返回数字和字符串两种类型，通过类的泛型实现

- 不使用泛型写法

  - ```js
    class MinClass{
      public list:number[]=[];
    
      add(num:number){
        this.list.push(num)
      }
      min():number{
        let minNum=this.list[0]
        for(let i=0;i<this.list.length;i++){
          if(minNum>this.list[i]){
            minNum=this.list[i]
          }
        }
        return minNum
      }
    }
    
    let m1=new MinClass()
    m1.add(2)
    m1.add(1)
    m1.add(3)
    console.log(m1.min())
    ```

- 泛型写法

  - ```js
    class MinClass<T>{
      public list:T[]=[];
    
      add(value:T):void{
        this.list.push(value)
      }
      min():T{
        let minNum=this.list[0]
        for(let i=0;i<this.list.length;i++){
          if(minNum>this.list[i]){
            minNum=this.list[i]
          }
        }
        return minNum
      }
    }
    let m1=new MinClass<number>(); // 实例化类  并且制定了类的T代表的类型是number
    m1.add(2)
    m1.add(1)
    m1.add(3)
    console.log(m1.min())
    ```

##### 泛型接口

- 函数类型接口 写法

  - ```js
    interface ConfigFn{
      (value1:string,value2:string):string;
    }
    
    let steData:ConfigFn=function(value1:string,value2:string):string{
      return value1+value2
    }
    console.log(steData('name','张三'))
    ```

- 泛型接口 写法1

  - ```js
    interface ConfigFn{
      <T>(value1:T):T;
    }
    
    let steData:ConfigFn=function<T>(value1:T):T{
      return value1
    }
    console.log(steData<string>('name'))
    ```

- 泛型接口 写法2

  - ```js
    interface ConfigFn<T>{
        (value:T):T;
    }
    
    function getData<T>(value:T):T{
      return value
    }
    let myGetData:ConfigFn<string>=getData;
    console.log(myGetData('20'))
    ```

- 小例子:操作数据库的泛型类

  - ```js
    class MysqlDb<T>{
      add(user:T):boolean{
        console.log(user)
        return true;
      }
    }
    // 1.定义一个User类和数据库进行映射
    class User{
      userName:string | undefined;
      password:string | undefined;
    }
    
    let u1=new User();
    u1.userName='张三';
    u1.password='12312';
    
    let m1=new MysqlDb<User>();
    m1.add(u1)
    ```

  - ```js
    class MysqlDb<T>{
      add(user:T):boolean{
        console.log(user)
        return true;
      }
    }
    // 2.定义一个Cat类，和数据库进行映射
    class Cat{
      name:string | undefined;
      color:string | undefined;
      constructor(params:{
        n:string | undefined,
        c:string | undefined
      }){
        this.name=params.n
        this.color=params.c
      }
    }
    let c1=new Cat({n:'小猫',c:'red'})
    let Db=new MysqlDb<Cat>()
    Db.add(c1)
    ```

### 小例子-封装统一操作数据库

- 功能:定义一个操作数据库的库 支持 myql  MongDb

- 要求1:mysql MongDb 功能一样，都有 add  update  delete  get 方法

- 注意:约束统一的规范，以及代码复用

- 解决方案: 需要约束规范所以要定义接口，需要代码重用所以用到泛型

  1. 接口:在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
  2. 泛型 通俗理解: 泛型就是解决 类 接口 方法的复用性

  - ```js
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
    ```

### ts模块，就是es6模块化

- export 导出，import 导入。浏览器是不识别的，通过node可以进行查看

### 命名空间

- 在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内

- 同java的包、.Net的命名空间一样，ts的命名空间 可以将代码包裹起来，只对外暴露需要在外部访问的对象

- 命名空间和模块的区别:

  - 命名空间:内部模块，主要用于组织代码，避免命名冲突
  - 模块:ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间

- **namespace** 通过关键字 namespace 来定义命名空间,在通过 **export**  暴露出来

- 也可以把命名空间封装成模块

  - ```js
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
    ```

### 装饰器

###### 定义

- 装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为
- 通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能
- 常见的装饰器: 类装饰器、属性装饰器、方法装饰器、参数装饰器
- 装饰器是过去几年中js最大的成就之一，也是es7的标准特性之一

###### 类装饰器

- 普通装饰器 (无法传参)

  - ```js
    function logClass(params:any){
      // params 就是当前类
      console.log(params)
    
      params.prototype.url='动态扩展的属性'
      params.prototype.fn=function(){
        console.log('动态扩展的方法')
      }
    }
    
    @logClass
    class HttpClient{
    
    }
    let h1:any=new HttpClient()
    h1.fn()
    console.log(h1.url)
    ```

- 装饰器工厂(可传参)

  - ```js
    function logClass(params:string){
      return function(target:any){
        console.log(target)
        console.log(params)
        target.prototype.url=params
      }
     
    }
    
    @logClass('http://')
    class HttpClient{
    
    }
    
    let h1:any=new HttpClient()
    console.log(h1.url)
    ```

- 重载构造函数的例子

  - 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数

  - 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明

  - ```js
    function logClass(target:any){
      console.log(target)
    
      // 通过继承 来修改 构造函数里的数据
      return class extends target{
        url:any='我是修改后的数据'
    
        getData(){
          console.log('也必须要写')
        }
      }
    }
    
    @logClass
    class HttpClient{
      public url:string | undefined;
    
      constructor(u:string){
        this.url=u
      }
    
      getData(){
        console.log(this.url)
      }
    }
    
    let h1=new HttpClient('http://')
    h1.getData()
    ```

###### 属性装饰器

- 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数:

  1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  2. 成员的名字

  - ```js
    function logProperty(params:any){
      return function(target:any,attr:any){
        console.log(target)
        console.log(attr)
        console.log(params)
        target[attr]=params
      }
    } 
    class HttpClient{
      @logProperty('ppopop')
      public url:string | undefined
    
      getData(){
        console.log(this.url)
      }
    }
    let h1:any=new HttpClient()
    h1.getData()
    ```

###### 方法装饰器

- 它会被应用到方法的 属性描述符上，可以用来监视、修改、或者替换方法定义

- 方法装饰器会在运行时传入3个参数:

  1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  2. 成员的名字
  3. 成员的属性描述符

  - ```js
    function logMethod(params:any){
      return function(target:any,methodsName:any,desc:any){
        console.log(target)
        console.log(methodsName)
        console.log(desc)
        console.log(params)
    
        // 修改原方法(getData)的值
        var oMethod=desc.value;
        // 替代了getData方法
        desc.value=function(...args:any[]){
          args=args.map(val=>{
            return String(val)
          })
          console.log(args)
          oMethod.apply(this,args)
        }
    
        // 也可以增加属性
        target.addAttr='我是增加的属性'
    
        // 也可以增加方法
        target.addRun=function(){
          console.log('我是增加的方法')
        }
      }
    }
    
    class HttpClient{
      public url:string | undefined
      constructor(u:any){
        this.url=u
      }
    
      @logMethod('参数')
      getData(...args:any[]){
        console.log(args)
        console.log(this.url+'----getData')
      }
    }
    let h1:any=new HttpClient('url')
    h1.getData('12','xx')
    h1.addRun()
    console.log(h1.addAttr)
    ```

###### 方法参数装饰器

- 参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入3个参数

  1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  2. 方法的名字
  3. 参数在函数参数列表中的索引

  - ```js
    function logParams(params:any){
      return function(target:any,methodName:any,paramsIndex:any){
        console.log(params)
        console.log(target)
        console.log(methodName)
        console.log(paramsIndex)
    
        target.url=params
      }
    }
    
    class HttpClient{
      public url:string | undefined
      constructor(){
      }
      getData(@logParams('参数') id:any){
        console.log(id)
      }
    }
    let h1=new HttpClient()
    h1.getData(123)
    console.log(h1.url+'---新增的参数')
    ```

###### 装饰器执行顺序

- 两种结果 (我到现在都不知道哪一个顺序是对的)

  - 属性 -> 方法 -> 方法参数 -> 类
  - 属性 -> 方法参数 -> 方法 -> 类

- **不明白很疑惑，百度上大部分都说的是第一种，也有少部分说是第二种**

  - 如果class只定义了一个函数 是第二种执行顺序
  - 如果定义了两个函数,在第二个函数的参数里，写上 方法参数装饰器的话，就会执行第一种顺序

- ```js
  function logClass1(params:any){
    return function(target:any){
      console.log('类1装饰器')
    }
  }
  function logClass2(params:any){
    return function(target:any){
      console.log('类2装饰器')
    }
  }
  
  function logProperty(params:any){
    return function(target:any,attr:any){
      console.log('属性装饰器')
    }
  } 
  
  
  function logMethod1(params:any){
    return function(target:any,methodsName:any,desc:any){
      console.log('方法装饰器11111')
    }
  }
  function logMethod2(){
    return function(target:any,methodsName:any,desc:any){
      console.log('方法装饰器2222')
    }
  }
  
  function logParams1(params:any){
    return function(target:any,methodName:any,paramsIndex:any){
      console.log('方法参数装饰器1')
    }
  }
  
  function logParams2(params:any){
    return function(target:any,methodName:any,paramsIndex:any){
      console.log('方法参数装饰器2')
    }
  }
  
  @logClass1('类1装饰器参数')
  @logClass2('类2装饰器参数')
  class HttpClient{
    @logProperty('属性装饰器参数')
    public url:string | undefined
    constructor(){
    }
    @logMethod1('方法装饰器参数')
    @logMethod2()
    
  
    // --------------------------------区别在这--------------------
    // getVal(){}   // 打开这行代码，顺序就是 第一种顺序
    getData(@logParams1('方法装饰器参数1 的 参数')id1:any, @logParams2('方法装饰器参数2 的 参数') id2:any){
      return true
    }
  }
  let h1=new HttpClient()
  h1.getData(1,2)
  ```



