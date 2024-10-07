---
title: 求1+2+3+...+n
order: 46
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

求1+2+3+...+n
===

题目描述

>求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

```js
function Sum_Solution(n)
{
    // write code here
    var res = n;
    (n>0)&&(res += Sum_Solution(n-1));
    return res;
}
module.exports = {
    Sum_Solution : Sum_Solution
};
```

