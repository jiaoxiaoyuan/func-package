---
title: 不用加减乘除做加法
order: 47
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


不用加减乘除做加法
===


```js
function Add(num1, num2)
{
    var sum, carry;
    do {
        sum = num1 ^ num2;
        carry = (num1 & num2) << 1;
        num1 = sum;
        num2 = carry;
    } while (num2 !== 0);
    return num1;
}

```

