
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
    

}
console.log(USER['A1'])

const enum USE1R {
    // 'A' = 'A1', //
     A
 
 }
 //const enum xx 就是常量枚举 不能用下标查询
console.log(USE1R.A)
console.log(USE1R.A)

//void空类型 严格模式下只能将unfefined赋值给void 非严格可以把null赋值
let aa:void = undefined

