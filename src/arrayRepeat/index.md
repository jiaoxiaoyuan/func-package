---
title: arrayRepeat - 计算数组中重复元素以及重复元素的次数
nav:
  title: 函数库
  path: /lib
group:
  path: /math
  title: 数学计算
  order: 12
---

## arrayRepeat

> 计算数组中重复元素以及重复元素的次数,数组去重并统计重复次数(数组去重并统计重复次数)
>
>  @param data 待处理的数组
> 
>  @returns 返回包含元素及其重复次数的对象

Demo:

```tsx | pure
import { arrayRepeat } from 'func-package';
const arr = ['1', '2', '1', 1, 2, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 2, c: 3}, {b: 2, c: 3, a: 1}, {c: 3, b: 2, a: 1}, {a: 1, b: 2}, {a: 1, c: 'w', b: 2}, {a: 1, b: 2, c: 'w'}]
console.log(arrayRepeat(arr)) // {"1":1,"2":1,""1"":2,""2"":1,"{"a":1,"b":2}":2,"{"a":1,"b":3}":1,"{"a":1,"b":2,"c":3}":3,"{"a":1,"c":"w","b":2}":2}
console.log(arrayRepeat([{ 1: 1 }, {a: 1, b: 2, c: 3}, {b: 2, c: 3, a: 1}, {c: 3, b: 2, a: 1}]))
console.log(arrayRepeat([{b: 2, a: 1}]))
```
