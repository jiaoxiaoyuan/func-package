---
title: floatMul - 浮点数精度乘法
nav:
  title: 函数库
  path: /lib
group:
  path: /math
  title: 数学计算
  order: 12
---

## 浮点数精度加法

> 浮点数精度乘法, 可以实现精准乘法, 不会让小数失真

Demo:

```tsx | pure
import { floatMul } from 'func-package';
console.log(floatMul(1.255, 100)); // -> 125.5
```
