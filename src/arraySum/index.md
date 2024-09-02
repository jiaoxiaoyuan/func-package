---
title: arraySum - 计算数组中指定字段值的总和
nav:
  title: 函数库
  path: /lib
group:
  path: /math
  title: 数学计算
  order: 123
---

## arraySum - 计算数组中指定字段值的总和

 * @param data 数据数组
 * @param fieldName 字段名称
 * @returns 字段值的总和

## 代码演示

```js
import React from 'react';
import { arraySum } from 'func-package';

const data = [
  { name: '张三', age: 18 },
  { name: '李四', age: 20 },
  { name: '王五', age: 22 },
];

const Demo: React.FC = () => {
  const sum = arraySum(data, 'age');
  return <div>年龄总和：{sum}</div>;
};

export default Demo;
```

## API

```js
arraySum(data: any[], fieldName: string): number
```
## 参数

| 参数名    | 说明     | 类型   |
| --------- | -------- | ------ |
| data      | 数据数组 | any[]  |
| fieldName | 字段名称 | string |

## 返回值

| 类型   | 说明         |
| ------ | ------------ |
| number | 字段值的总和 |
