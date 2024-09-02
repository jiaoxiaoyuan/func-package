---
title: addKeyAndSortNames - 提取名字的首个字母排序
nav:
  title: 函数库
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 11
---

## addKeyAndSortNames - 为名字数组添加键并排序


Demo:

```js
import { addKeyAndSortNames } from 'func-package';


// 示例用法
const names = [
    { name: "张三" },
    { name: "李四" },
    { name: "王五" },
    { name: "赵六" }
];


const sortedNamesWithKeys = addKeyAndSortNames(names);
console.log(sortedNamesWithKeys);
// 输出: [
//   { name: "李四", key: "l" },
//   { name: "王五", key: "w" },
//   { name: "张三", key: "z" },
//   { name: "赵六", key: "z" }
// ]

```
