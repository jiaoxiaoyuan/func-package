---
title: 剪绳子
order: 66
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


剪绳子
===

题目描述

>给你一根长度为n的绳子，请把绳子剪成m段（m、n都是整数，n>1并且m>1），每段绳子的长度记为k[0],k[1],...,k[m]。请问k[0]xk[1]x...xk[m]可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

输入描述:

>输入一个数n，意义见题面。（2 <= n <= 60）

输出描述:

>输出答案。

示例1

>输入
>8

>输出
>18

```js
function cutRope(number) {
    // write code here
    if (number < 2) return 0
    if (number === 2) return 1
    if (number === 3) return 2
    let arr = [0, 1, 2, 3]
    let max
    for (let i = 4; i <= number; i++) {
        max = 0
        for (let j = 1; j <= i / 2; j++) {
            let temp = arr[j] * arr[i - j]
            if (max < temp) {
                max = temp
            }
            arr[i] = max
        }
    }
    console.log(arr)
    max = arr[number]
    return max
}
module.exports = {
    cutRope : cutRope
};
```
