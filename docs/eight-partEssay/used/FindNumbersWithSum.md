---
title: 和为S的两个数字
order: 41
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

和为S的两个数字
===

>题目描述
>输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

输出描述

>对应每个测试案例，输出两个数，小的先输出。

思路：双指针

```js
function FindNumbersWithSum(arr, sum) {
    // write code here
    let left = 0,
        right = arr.length - 1
    while (left < right) {
        if (arr[left] + arr[right] > sum) {
            right--
        } else if (arr[left] + arr[right] < sum) {
            left++
        } else {
            return [arr[left], arr[right]]
        }
    }
    return []
}
module.exports = {
    FindNumbersWithSum : FindNumbersWithSum
};
```

