---
title: 字符串的排列
order: 26
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

字符串的排列
===

题目描述

>输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

输入描述

>输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。

思路:
递归 fn(a,b,c) = afn(b,c)+bfn(a,c)+cfn(a,b) fn(b,c)=bfn(c)+cfn(b)  fn(c) = c

```js
function Permutation(str)
{
    // write code here
    if (!str) return[]
    let result = []
    let arr = str.split('')
    sortString(result, '', arr)
    result = result.sort()
    return [...new Set(result)]
}
function sortString(result, str, arr) {
    if (arr.length == 1) {
        str += arr[0]
        result.push(str)
    } else {
        for (let i = 0; i < arr.length; i++) {
            let rest = arr.slice(0, i).concat(arr.slice(i + 1, arr.length))
            let curStr = arr[i] + str
            sortString(result, curStr, rest)
        }
    }
}
module.exports = {
    Permutation : Permutation
};
```

