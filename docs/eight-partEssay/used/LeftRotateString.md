---
title: 左旋转字符串
order: 42
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

左旋转字符串
===

题目描述

>汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！

```js
function LeftRotateString(str, n)
{
    // write code here
    if(!str) return''
    let arr = str.split('')
    for(let i = 0;i<n;i++){
        let c = arr.shift()
        arr.push(c)
    }
    return arr.join('')
}
module.exports = {
    LeftRotateString : LeftRotateString
};
```

