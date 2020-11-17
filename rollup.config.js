import ts from 'rollup-plugin-typescript2'   //解析ts
import { nodeResolve } from '@rollup/plugin-node-resolve'  //解析第三方模块的插件
import serve from 'rollup-plugin-serve'
import path from 'path'

export default {

    input:'src/index.ts',
    output:{
        format:'iife',  //立即执行 函数
        file:path.resolve(__dirname,'dist/bundle.js'),
        sourcemap:true,//源码映射
    },
    plugins:[
        nodeResolve({
            extensions:['.js','.ts']
        }),
        ts({
            tsconfig:path.resolve(__dirname,'tsconfig.json')
        }),
        serve({
            open:true,
            openPage:'/public/index.html',
            contentBase:'',
            port:'8089'
        })
    ]

}