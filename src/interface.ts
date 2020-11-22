
//接口 描述对象形状
interface FullName {
    firstName:string,
    lastName:string,
}

type fname = (firstName:string,lastName:string)=> string //描述函数
interface faname {
    (firstName:string,lastName:string): string //描述函数
}


const fullName = (obj:FullName)=>{
    return obj
}

//混合类型 计数器
interface Icount {
    ():number,
    count:number
}

const fn:Icount = ()=>{
    return ++fn.count
}
fn.count = 0

interface Vagetables{
    taste:string,
    [xxx:string]:any  //随便加
}

interface Vagetables{
    color:string
}
//同名覆盖
interface Ttomato extends Vagetables{
    size:number
}
//继承

const toamto:Vagetables = ({
    taste:'suan'
}as Vagetables) //断言

interface Arr{ //可索引接口
    [key:number]:any
}
let arr:Arr = {0:1}
//描述类
interface Speakable{
    name:string,
    speak():void   //这里的void表示不关心这个函数的返回值
}

class Speak implements Speakable{
    name!:string;
    speak():string{
        return 'xxx'
    }
}
let s = new Speak()
s.speak()

export {}