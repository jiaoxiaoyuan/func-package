---
title: completeIp - ip地址补全
nav:
  title: 函数库
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 12
---

## completeIp

> ip 地址补全

Demo:

```tsx | pure
import { completeIp } from 'func-package';

const newIp = completeIp('127.0.0.1');
console.log(newIp); // 127.000.000.001
```
