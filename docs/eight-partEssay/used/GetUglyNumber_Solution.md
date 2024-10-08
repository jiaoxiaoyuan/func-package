---
title: 丑数X
order: 32
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

丑数X
===

>把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

思路：一个丑数乘于2/3/5，得到的还是一个丑数；有3个对列pos2/pos3/pos5，每次都取最小的数，放到数组中【小于7的数都是丑数】。

```js
function GetUglyNumber_Solution(index) {
    if (index < 7) return index
    let res = []
    res[0] = 1
    let pos2 = 0,
        pos3 = 0,
        pos5 = 0
    //一个丑数乘于2/3/5还是一个丑数
    for (let i = 1; i < index; i++) {
        res[i] = Math.min(res[pos2] * 2, res[pos3] * 3, res[pos5] * 5)
        if (res[i] == res[pos2] * 2) {
            pos2++
        }
        if (res[i] == res[pos3] * 3) {
            pos3++
        }
        if (res[i] == res[pos5] * 5) {
            pos5++
        }
    }
    return res[index - 1]
}
```

