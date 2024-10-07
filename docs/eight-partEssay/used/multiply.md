---
title: 构建乘积数组
order: 50
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

构建乘积数组
===

题目描述

>给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。

```js
function multiply(array)
{
    // write code here
    let rArr = []
    if(array==null) return
    array.forEach((item,index)=>{
        let temp = array.filter((item,ix)=>{
            return ix!=index
        })
        let sum = 1
        temp.forEach(item=>{
            sum*=item
        })
        rArr.push(sum)
    })
    return rArr
}
```

