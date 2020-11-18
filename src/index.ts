
let a:string = '123'
console.log(a,1)

let tuple:[string,number] = ['2',2]
// tuple[3] =1
//能push
tuple.push(1)

console.log(tuple)

// let arr1:number[] = [1,'2']

enum USER {
    'A' = 'A1', //这样写就不能反推了
    'B' = 0, //这样写就能反推了
    

}
// console.log(USER['A1'])
 console.log(USER[0])

const enum USE1R {
    // 'A' = 'A1', //
     A
 
 }
 //const enum xx 就是常量枚举 不能用下标查询
console.log(USE1R.A)
console.log(USE1R.A)

//void空类型 严格模式下只能将undefined赋值给void 非严格可以把null赋值
let aa:void = undefined

//null undefined是任意类型的子类型(非严格模式)
let str:string | number = 2333
// str = undefined

//never  永远不 任何类型的子类型 1.错误 2.死循环 3.类型判断

function throwError():never{
     throw new Error()
}
function whileTrue ():never {
     while(true){

     }
    
}

let key1 = Symbol('123')
let obj = {
    [key1]:1
}
console.log(obj[key1])
//ts中symbol不能作为索引使用

// let name = 1 直接写会报错 全局有name
let name = 1
export {}  //就样就不报错

//ts自带类型推导 在初始化的时候如果赋值了的话
let lei
lei = 1
lei = '2'

let lei1 = 1
lei1 = false

let number1:number = 11
let number2:number = Number(11)
let number3:Number = 11
let number4:Number = new Number(11)

// 11..toString()
// "11"
// 11.toString()
// VM121:1 Uncaught SyntaxError: Invalid or unexpected toke

//联合类型
let str1:number | boolean;   //未赋值的话 只能调用他们共有的方法
// str1.

let ele:HTMLElement | null = document.getElementById('#app');
ele!.style.color = 'red';  //非空断言 表示一定有值 !是ts的语法

(ele as HTMLElement).style.color = 'red'

// (ele as any) as any双重断言

//字面量类型
// let direction:'left'| 'up' |'right'|'down'
type Direction = 'left'| 'up' |'right'|'down' //;类型别名
let direction:Direction
direction= 'left'