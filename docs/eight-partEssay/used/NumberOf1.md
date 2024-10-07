---
title: 二进制1的个数X
order: 10
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

二进制1的个数X
===

思路：**利用逻辑与，依次与n的每一位相与。例如n=11001 flag=00001 结果若为1，则表明n的第一位是1**

```js
function NumberOf1(n)
{
    let count=0,flag=1
    while(flag){
        if(n&flag){
            count++
        }
        flag = flag<<1
    }
    return count
}
```

