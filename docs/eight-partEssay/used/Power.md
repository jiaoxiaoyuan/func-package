---
title: 数值的整数次方
order: 11
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

数值的整数次方
===

>给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
>保证base和exponent不同时为0

```js
function Power(base, exponent)
{
    let result = 1.0,i=0
    if(exponent==0){
        return 1
    }else if(exponent>0){
        for(i;i<exponent;i++){
            result *=base
        }
        return result
    }else{
        for(i;i<-exponent;i++){
            result *=base
        }
        return 1.0/result
    }
}
```

