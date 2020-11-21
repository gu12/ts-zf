// 类 静态属性 类用来调用的  实例属性  共享的原型属性

class Pointer {
    
    x!:number 
    y!:number 
    //！非空断言
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}

let pointer = new Pointer(1,2)
console.log(pointer.x)
//public 父类 子类 实例 都可以获取到这个属性
//protected 受保护的  父类 子类能访问
//private 父类自己能访问

class Person{
    protected name!:string;
    public age!:number;
    constructor(name:string,age:number) {
          this.name = name
          this.age = age
    }
    static type = '22333'  //类上调用
    say(){
        console.log('say')
    }
    private _eat:string = ''
    get eat(){
        return this._eat
    }
    //通过属性访问器能让实例访问到Private属性
    set eat(newVal){
        this._eat = newVal
    }
    
}

class Man extends Person{
    address = ''
    constructor(name:string,age:number,address:string) {
       super(name,age)
       this.address = address
  }
  say(){
      super.say()  //Person.paotype
    console.log('say2333')
    return 1
}
}
let xiaoming = new Man('xiaoming',18,'合肥')
console.log(xiaoming.say())
xiaoming.eat = '小北'
console.log(xiaoming.eat)