---
title: 数组中重复的数字
order: 49
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

数组中重复的数字
===

题目描述

>在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。

```js
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let o = {}
    numbers.forEach(item=>{
        if(!o[item]) o[item] = 1
        else o[item]++
    })
    for(let i in o){
        if(o[i]>1) {
         duplication[0] = i
         return true}
    }
    return false
}
```

