---
nav:
    title: Node系列
    path: /node
    order: 6

group:
  title: V8引擎
  path: /v8
  order: 7

title: V8 引擎
order: 1
---

# V8 引擎

图解 Google V8

V8 执行 JavaScript 代码的完整流程

事件循环和垃圾回收的工作机制

系统优化 JavaScript 执行效率的方法

分三篇：

- JavaScript 设计思想篇
- V8 编译流水线篇
- 事件循环和垃圾回收篇

V8 是 Google 机遇 C++ 编写的开源高性能 JavaScript 与 WebAssembly 引擎，主要应用包括 Chrome 浏览器以及 Node.js。得益于 Chrome 浏览器的市场占有率以及 Chromium 阵营的不断强大，V8 已经成为了当今最主流的 JavaScript 引擎。

---

- v8 的基础环境
    - 堆空间
    - 栈空间
    - 全局执行上下文
    - 宿主环境
    - 事件循环系统
- v8 执行流程
    - 词法分析
    - 语法分析
    - 字节码
    - 解释执行字节码
    - 优化字节码的执行速度
    - 即时编译
- 事件循环系统
    - 概念
    - 异步编程
        - 回调函数模式
        - Promise 模式
        - await/async 模式
- JavaScript 设计思想
    - 函数是一等公民
    - 类型系统和垃圾回收
    - 作用域
    - 原型链继承
- 垃圾回收系统
    - 自动垃圾回收系统
    - 回收方式
    - 代记假说
    - 分代收集
    - 垃圾回收器
    - 垃圾回收流程
