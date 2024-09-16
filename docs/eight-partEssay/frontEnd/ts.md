---
title: ts面试题
order: 5
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /frontEnd
  title: 面试题
  order: 100
---

## 1、as 的作用

1.  [类型断言](http://121.37.230.46:8088/base/02-%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html#_11%E3%80%81%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80)
2.  [重映射键值](http://121.37.230.46:8088/base/06-%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C.html#_6-3-%E9%80%9A%E8%BF%87-as-%E9%87%8D%E6%98%A0%E5%B0%84%E9%94%AE%E5%80%BC)



## 2、类型别名和接口的区别

1.  **继承**：
    -   类型别名使用 `&`
    -   接口使用 `extends` 去继承
2.  **多次声明**：
    -   类型别名无法重复声明
    -   接口可以多次声明，会自动进行声明合并
3.  **声明类型**
    -   类型别名可以声明任何类型，主要用来声明复杂类型或者联合类型
    -   接口只可以声明对象类型的数据，且接口类型是支持继承和声明合并的



## 3、泛型的作用

TypeScript 泛型是一种工具，它提供了一种创建可重用组件的方法。

**它能够创建可以处理多种数据类型而不是单一数据类型的组件**。泛型在不影响性能或生产力的情况下提供类型安全。泛型允许创建泛型类、泛型函数、泛型方法和泛型接口。 

在泛型中，类型参数写在开 (<) 和闭 (>) 括号之间，这使其成为强类型集合。泛型使用一种特殊的类型变量 <T> 来表示类型。泛型集合仅包含相似类型的对象。



## 4、TS新增了哪些类型

1.  **tuple**：元组
2.  **enum**：枚举
3.  **void**：无返回值
4.  **any**：任意类型
5.  **unknown**：未知类型，对该类型做任何操作都是违法的
6.  **never**：一个函数抛出异常、终止程序执行、死循环，那么它的返回值就是 never



## 5、常用内置类型

-   **属性修饰符**
    -   可选：Partial
    -   必选：Required
    -   只读：Readonly
-   **构造对象类型**
    -   构造类型：Record
    -   选择键值：Pick
    -   删除键值：Omit
-   **构造联合类型**
    -   排除成员：Exclude
    -   分配成员：Extract
-   **构造元组类型**
    -   函数参数：Parameters

-   **构造返回类型**

    -   函数返回：ReturnType

    -   实例类型：InstanceType

-   **提取 this**
    -   函数 this：ThisParameterType

-   **字符串操作类型**：

    -   全部大写：`Uppercase<StringType>`

    -   全部小写：`Lowercase<StringType>`

    -   全部首字母大写：`Capitalize<StringType>`

    -   全部首字母小写：`Uncapitalize<StringType>`



## 6、枚举和常量枚举的区别

-   **相同**：都是用于定义枚举类型
-   **不同**：
    -   常量枚举使用 `const enum [name]`，而普通枚举只需要 `enum [name]`
    -   **const 枚举不能有计算成员且无法直接调用枚举名，在编译其间会被完全删除**



## 7、装饰器

-   装饰器是一种**特殊的声明**，可以**附加到类**声明、方法、访问器、属性或参数上，**在类被创建的时候调用**
-   **装饰器本质上只是一个函数，根据不同的放置位置，传递进不同的参数**
-   **装饰器提供了一种为类声明和成员添加注释和元编程语法的方法**。
-   装饰器函数**返回相应的值，可以对原属性进行替换或者修改**，详情查看这篇[博客](https://jelly.jd.com/article/6163d8bac3f2f4019154ee94)
-   装饰器函数**从下至上，从右至左**开始执行

主要有五种类型，详情查看该[文档](http://121.37.230.46:8088/advanced/03-%E8%A3%85%E9%A5%B0%E5%99%A8.html#_5%E3%80%81%E7%B1%BB%E8%A3%85%E9%A5%B0%E5%99%A8)：

1. **类装饰器**：`(constructor: Class)` 

2. **原型方法装饰器**：`(constructor: Class, propertyKey: string, descriptor: PropertyDescriptor)`

3. **访问器装饰器**：`(constructor: Class, propertyKey: string, descriptor: PropertyDescriptor)`

4. **属性装饰器**：`(constructor: Class | Class.prototype, propertyKey: string)`

   **静态**成员是**类的构造函数**，**实例**成员是**类的原型**。

5. **参数装饰器**：`(constructor: Class, propertyKey: string,  parameterIndex: number)`

**使用场景**：

-   逻辑层消除繁琐的 try/catch 块，装饰器内统一输出函数日志
-   校验参数或返回值类型
