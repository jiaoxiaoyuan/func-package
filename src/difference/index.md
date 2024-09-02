---
title: difference - 创建一个排除指定项的数组
nav:
  title: 函数库
  path: /lib
group:
  path: /math
  title: 数学计算
  order: 12
---

## 创建一个排除指定项的数组

> 创建一个具有唯一 array 值的数组，每个值不包含在其他给定的数组中。（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）

Demo:

```tsx | pure
import { difference } from 'func-package';

const door = difference([1, 2, 3, 4, 5], [2, 3]);
console.log(door); // -> [1, 4, 5]
```
