---
nav:
    title: JavaScript
    path: /js
    order: 2
group:
  path: /fundamental-Symbol
  title: 内置对象 - Symbol
  order: 7
title: Symbol.hasInstance
order: 2
---

# Symbol.hasInstance

`Symbol.hasInstance` 用于判断某对象是否为某构造器的实例。当其他对象使用 `instanceof` 运算符，判断是否为该对象的实例时，会调用这个方法。

```js
class MyArray {
  static [Symbol.hasInstance]() {
    return Array.isArray(instance);
  }
}

[] instanceof new MyArray(); // true
```
