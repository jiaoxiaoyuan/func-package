---
title: 数组
order: 2

nav:
  title: 八股文
  path: /eight-partEssay
  order: 10

group:
  path: /dataStructure
  title: 数据结构
  order: 1
---

数组
===

数组是最简单的内存数据结构，几乎所有的编程语言都原生支持数组类型。

大多数强类型的编程语言里面数组通常情况下都用于存储一系列同一种数据类型的值，但在 JavaScript 里，数组中可以保存不同类型的值。

## 创建和初始化数组

- 使用 `new Array()` 创建数组

  ```js
  const daysOfWeek = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  ```

- 使用 `[]` 创建数组
  ```js
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  ```

## 数组常见操作

### 添加元素

- 添加一个元素到数组的最后位置 `array.push(item)`
- 在数组首位插入一个元素 `array.unshift(item)`
- 在指定索引位置插入元素 `array.splice(index, 0, item)`
  > splice() 第二个参数为 0 时，表示插入数据。
  ```js
  const myArray = [1, 2, 3];
  // 在索引 0 的位置，插入 A
  myArray.splice(0, 0, "A");
  console.log(myArray); //--> ['A', 1, 2, 3]
  ```

### 删除元素

- 删除数组最后的元素 `array.pop()`
- 删除数组首位的元素 `array.shift()`
- 删除指定索引位置的元素 `array.splice(start, deleteCount)`
  ```js
  const myArray2 = [1, 2, 3, 4, 5];
  // 删除索引 3 位置起的 2 个元素
  myArray2.splice(3, 2);
  console.log(myArray2); //--> [1, 2, 3]
  ```

### 修改元素

- 修改指定索引位置的元素 `array.splice(index, 1, item)`
  ```js
  const myArray3 = [1, 2, 3, 4, 5, 6];
  // 修改索引 1 的位置的元素为 AA
  myArray3.splice(1, 1, "AA");
  console.log(myArray3); //--> [1, "AA", 3, 4, 5, 6]
  ```

- 修改指定索引位置的几个元素 `array.splice(index, number, item)`
  ```js
  const myArray4 = [1, 2, 3, 4, 5, 6, 7];
  // 在索引 2 的位置起，修改两个元素为 AA BB
  myArray4.splice(2, 2, "AA", "BB");
  console.log(myArray4); //--> [1, 2, "AA", "BB", 5, 6, 7]
  ```
