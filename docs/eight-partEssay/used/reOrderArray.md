---
title: 调整数组顺序使奇数位于偶数前面
order: 12
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

调整数组顺序使奇数位于偶数前面
===

>输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

```js
function reOrderArray(array)
{
    let ji = [],ou = []
    array.forEach(item=>{
        if(item%2==0){
            ou.push(item)
        }else{
            ji.push(item)
        }
    })
    ou.forEach(item=>{
        ji.push(item)
    })
    return ji
}
```

