---
title: 从1到n整数中1出现的次数
order: 30
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

从1到n整数中1出现的次数
===

```js
function NumberOf1Between1AndN_Solution(n)
{
    var count = 0
    for(var i = 1;i<=n;i++){
        i = String(i)
        var a = i.split('')
        for(var j = 0;j<a.length;j++){
            if(a[j]==1){
                count++
            }
        }
    }
    return count
    // write code here
}
module.exports = {
    NumberOf1Between1AndN_Solution : NumberOf1Between1AndN_Solution
};
```

