---
title: debounce - 防抖函数
nav:
  title: 函数库
  path: /lib
group:
  path: /highFn
  title: js高级函数
  order: 10
---

## debounce

> 防抖函数

Demo:

```tsx | pure
import { debounce } from 'func-package';

function sayLove(name) {
  return name;
}

debounce(sayLove, 200)('xuxiaoxi');
```
