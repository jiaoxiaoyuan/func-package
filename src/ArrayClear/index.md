---
title: ArrayClear - 清空的数组
nav:
  title: 函数库
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 10
---


## ArrayClear - 清空的数组


```js
function ArrayClear<T>(array: T[]) {
    // 使用splice方法清空数组，并返回被删除的元素（这里实际是返回整个数组的元素）
    return array.splice(0, array.length);
}
```
