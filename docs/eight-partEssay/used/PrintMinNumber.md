---
title: 把数组拍成最小的数
order: 31
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

把数组拍成最小的数
===

>输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

思路：两两排序，如果a1+a2>a2+a1 则a2应该在前面

```js
function PrintMinNumber(numbers) {
    // write code here
    numbers.sort(c)
    var result = ''
    numbers.forEach(item=>result+=item)
    return result
}

function c(a, b) {
    let str1 = Number(a + "" + b)
    let str2 = Number(b + "" + a)
    return str1 - str2
}
```

