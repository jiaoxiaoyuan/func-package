---
title: 连续子数组的最大和X
order: 29
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

连续子数组的最大和X
===

>例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1)

思路：最大子数组的和一定是由当前元素和之前最大连续子数组的和叠加在一起形成的

```js
function FindGreatestSumOfSubArray(arr) {
    //状态转移方程  current = dp[i-1]+arr[i]   dp[i]=max(curMax,arr[i])
    if (arr.length === 1) return arr[0]
    let max = arr[0]
    let dp = [] //来一个dp数组，保存状态
    dp[0] = arr[0]//初始状态
    for (let i = 1; i < arr.length; i++) {
        let curMax = dp[i - 1] + arr[i]
        if (curMax > arr[i]) {
            dp[i] = curMax
        } else {
            dp[i] = arr[i]
        }
        if (dp[i] > max) max = dp[i]
    }
    return max
}
```

