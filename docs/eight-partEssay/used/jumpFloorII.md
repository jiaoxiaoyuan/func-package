---
title: 变态跳台阶
order: 8
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

变态跳台阶
===

>思路：先来回顾上一题跳台阶，其中F(n)=F(n-1)+F(n-2),因为只能一次跳1级或者2级。这道题一次可以跳1到n级，即F(n)=1+F(1)+F(2)+···F(n-1)（①式）,同理F(n-1)=1+F(1)+F(2)···F(n-2)（②式）。①式-②式，得:
F(n)=2F(n-1),其中F(1)=1

```js
function jumpFloorII(number)
{
    if(number==1){
        return 1
    }else{
        return jumpFloorII(number-1)*2
    }
}
```


