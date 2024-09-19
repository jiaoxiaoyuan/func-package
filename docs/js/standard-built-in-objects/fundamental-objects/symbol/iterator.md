---
nav:
    title: JavaScript
    path: /js
    order: 2
group:
  path: /fundamental-Symbol
  title: 内置对象 - Symbol
  order: 7
title: Symbol.iterator
order: 4
---

# Symbol.iterator

对象的 `Symbol.iterator` 属性，指向该对象的默认遍历器方法。

```js
const myIterable = {};
myIterable[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable]; // [1, 2, 3]
```

对象进行 `for...of` 循环时，会调用 `Symbol.iterator` 方法，返回该对象的默认遍历器。

```js
class Collection {
  *[Symbol.iterator]() {
    let i = 0;
    while (this[i] !== undefined) {
      yield this[i];
      ++i;
    }
  }
}

let myCollection = new Collection();
myCollection[0] = 1;
myCollection[1] = 2;

for (let value of myCollection) {
  console.log(value);
}
// 1
// 2
```
