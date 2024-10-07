---
nav:
    title: React系列
    path: /react
    order: 5
group:
    title: React
    order: 30
title: React.isValidElement
order: 7
---

# React.isValidElement

React 提供了`isValidElement()` 方法，用于判断传入对象是否是有效的 `ReactElement`。

## 基本用法

语法：

```js
const div = React.createElement('div');

React.isValidElement(div);
// true

React.isValidElement(document.getElementById('example'));
// false
```

> 比较多用在 ES5 的语法环境中。
