---
title: filterArrayByCodes - 根据指定的字段数组过滤数组
nav:
  title: 函数库
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 11
---


## filterArrayByCodes - 根据指定的字段数组过滤数组


 * @param arr1 需要过滤的数组
 * @param arr2 包含有效代码的字符串数组
 * @param fieldName 用于过滤的字段名
 * @returns 过滤后的数组



```js
function filterArrayByCodes(
    arr1: any[],
    arr2: string[],
    fieldName: string
): any[] {
    // 定义一个函数来过滤数组arr1
    // 使用一个箭头函数来动态地获取属性值
    return arr1.filter((item) => {
        // 确保item对象上有fieldName这个属性，避免TypeError
        // 确保item上有该属性，避免TypeError
        return fieldName in item && arr2.includes(item[fieldName]);
    // 如果item对象上有fieldName这个属性，并且其值在arr2数组中，则返回true，否则返回false
    });
}

```
