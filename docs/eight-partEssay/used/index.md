---
title: 二维数组的查找
order: 1
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

二维数组的查找
===


>在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

``` javascript
function Find(target, array)
{
    for(var i = 0;i<array.length;i++){
        for(var j = 0;j<array[i].length;j++){
            if(array[i][j]===target){
                return true;
            }
        }
    }
    return false;
    // write code here
}
module.exports = {
    Find : Find
};
```

> 思路：这段代码定义了一个名为 `Find` 的函数，该函数用于在一个二维数组 `array` 中查找一个目标值 `target`。如果找到了目标值，则返回 `true`，否则返回 `false`。
详细解释如下：

1. 函数定义：`function Find(target, array) {...}` 定义了一个名为 `Find` 的函数，它接受两个参数：`target` 是要查找的目标值，`array` 是一个二维数组。


2. 外层循环：`for(var i = 0; i < array.length; i++) {...}` 这个外层循环遍历二维数组的每一行。`array.length` 给出数组的行数。

3. 内层循环：`for(var j = 0; j < array[i].length; j++) {...}` 对于外层循环中的每一行，内层循环遍历该行的每一个元素。`array[i].length` 给出当前行的元素数量。

4. 条件判断：`if(array[i][j] === target) {...}` 检查当前元素 `array[i][j]` 是否等于目标值 `target`。如果是，函数返回 `true`，表示找到了目标值。

5. 返回值：如果函数遍历了整个二维数组都没有找到目标值，那么它将返回 false。

6. 模块导出：`module.exports = { Find : Find }`; 这行代码是将 `Find` 函数导出，以便其他 `JavaScript` 文件可以引入和使用这个函数。这是 `Node.js` 中模块系统的一部分。


>以下是一个简单的 JavaScript demo，用于在二维数组中查找特定值。这个 demo 可以在 Node.js 环境中运行，也可以稍作修改后在浏览器环境中运行。

```js
// Find 函数用于在二维数组中查找目标值
function Find(target, array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === target) {
                return true; // 找到目标值，返回 true
            }
        }
    }
    return false; // 遍历完整个数组都没找到目标值，返回 false
}

// 示例二维数组
const exampleArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 要查找的目标值
const targetValue = 5;

// 调用 Find 函数并打印结果
const found = Find(targetValue, exampleArray);
console.log(`Target value ${targetValue} found: ${found}`);
```
