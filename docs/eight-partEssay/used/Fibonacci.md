---
title: 斐波那契数列
order: 6
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

斐波那契数列
===

```js
function Fibonacci(n)
{
    if(n===0) return 0
    if(n===1) return 1
    if(n===2) return 1
    let arr = [0,1,1]
    for(let i = 3;i<=n;i++){
        arr[i] = arr[i-1]+arr[i-2]
    }
    return arr[n]
}
module.exports = {
    Fibonacci : Fibonacci
};
```

