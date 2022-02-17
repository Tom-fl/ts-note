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

  - 同abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现

  - abstract 抽象方法只能放在抽象类里面

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





