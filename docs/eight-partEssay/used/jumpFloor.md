---
title: 跳台阶
order: 7
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


跳台阶
===

```js
function jumpFloor(number)
{
    if(number ===1) return 1
    if(number === 2)return 2
    let arr = [1,2]
    for(let i = 2;i<number;i++){
        arr[i] = arr[i-1]+arr[i-2]
    }
    return arr[number-1]
}
```

