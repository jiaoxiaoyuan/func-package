---
nav:
    title: JavaScript
    path: /js
    order: 2
group:
  path: /fundamental-Symbol
  title: 内置对象 - Symbol
  order: 7
title: Symbol.match
order: 5
---

# Symbol.match

对象的 `Symbol.match` 属性，指向一个函数。

```js
String.prototype.match(regexp);
// 等同于
regexp[Symbol.match](this);

class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}

'e'.match(new MyMatcher()); // 1
```
