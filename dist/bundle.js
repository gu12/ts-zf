(function () {
   'use strict';

   var a = '123';
   console.log(a, 1);
   var tuple = ['2', 2];
   // tuple[3] =1
   //能push
   tuple.push(1);
   console.log(tuple);
   // let arr1:number[] = [1,'2']
   var USER;
   (function (USER) {
       // 'A' = 'A1', //这样写就不能反推了
       USER[USER["A"] = 0] = "A";
   })(USER || (USER = {}));
   //const enum xx 就是常量枚举 不能用下标查询
   console.log(0 /* A */);
   console.log(0 /* A */);

}());
//# sourceMappingURL=bundle.js.map
