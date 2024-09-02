---
title: hyphenate - 驼峰命名转横线命名
nav:
  title: 函数库
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 12
---

## hyphenate

> 驼峰命名转横线命名

Demo:

```tsx | pure
import { hyphenate } from 'func-package';

// 默认用横线分隔
const name = hyphenate('EaCdEf');
console.log(name); // EaCdEf ==> ea-cd-ef

// 自定义分隔符
const name1 = hyphenate('EaCdEf', '_');
console.log(name1); // EaCdEf ==> ea_cd_ef
```
