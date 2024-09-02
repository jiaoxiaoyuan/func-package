---
title: replaceBlank - 替换字符串中的空白字符
nav:
  title: 函数库
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 14
---

## replaceBlank - 替换字符串中的空白字符

 * 替换字符串中的空白字符
 * @param str 待处理的字符串
 * @returns 返回处理后的字符串，若传入null或undefined则返回空字符串


```js
const replaceBlank = (str: string) => {
    // 如果传入的字符串不为空，则使用正则表达式替换所有空白字符为空字符串
    // 否则返回空字符串
    return str ? str.replace(/\s+/g, "") : "";
};
```
