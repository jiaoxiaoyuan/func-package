---
title: getFileExtension - 获取文件扩展名
nav:
  title: 函数库
  path: /lib
group:
  path: /string
  title: 字符串操作
  order: 15
---

## getFileExtension - 获取文件扩展名

 * @param filename 文件名
 * @returns 文件扩展名，如果文件名不包含扩展名则返回空字符串

```js
function getFileExtension(filename: string): string {
    // 获取文件名中最后一个'.'的位置
    const lastIndex = filename.lastIndexOf(".");
    // 如果lastIndexOf方法返回的不是-1（即找到了'.'），则截取'.'后面的部分作为文件扩展名
    // 否则，返回空字符串
    return lastIndex !== -1 ? filename.slice(lastIndex + 1) : "";
}
```
