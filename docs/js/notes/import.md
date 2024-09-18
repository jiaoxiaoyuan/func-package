---
title: require 和import 的区别？
order: 12
nav:
    title: JavaScript
    path: /js
    order: 2
group:
  path: /notes
  title: 杂记
  order: 200
---



## require 和import 的区别？

require是运行时调用，所以require理论上可以运用在代码的任何地方
import是编译时调用，所以必须放在文件开头
import不能在函数、判断语句等代码块之中引用；require 可以。



require/exports 输出的是一个值的拷贝，import/export 模块输出的是值的引用
通过require引入基础数据类型时，属于复制该变量。通过require引入复杂数据类型时，属于浅拷贝该对象。
import/export 不能对引入模块重新赋值/定义



 import 是编译时运行的（require是运行时的），它必须放在文件开头，而且使用格式也是确定的，不容置疑。它不会将整个模块运行后赋值给某个变量，而是只选择import的接口进行编译，这样在性能上比require好很多。


两个阶段都采用深度优先遍历，执行顺序是子 -> 父。
import() 动态引入
import() 返回一个 Promise 对象， 返回的 Promise 的 then 成功回调中，可以获取模块的加载成功信息

 import 是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require


## require文件的加载流程

> 在当前目录下的 node_modules 目录查找。
> 如果没有，在父级目录的 node_modules 查找，如果没有在父级目录的父级目录的 node_modules 中查找。
> 沿着路径向上递归，直到根目录下的 node_modules 目录。
> 
> 在 node_modules中找到后，这个文件夹里面的 package.json 下 main 属性指向的文件，如果没有  package.json ，在 node 环境下会以此查找 index.js ，index.json ，index.node。
