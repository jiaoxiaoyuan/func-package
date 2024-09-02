---
title: downloadFileWithText - 下载文本文件
nav:
  title: 函数库
  path: /lib
group:
  path: /dom
  title: dom操作
  order: 13
---

## downloadFileWithText(text, fileName)

> 下载文本文件
>
> 参数
>
> text: 文本内容
>
> filename: 可选参数，下载后的文件名，默认为文本的前 5 位字符。

Demo:

```tsx | pure
import { downloadFileWithText } from 'func-package';

// 下载内容为 xijs 的txt文件
downloadFileWithText('xijs');
```
