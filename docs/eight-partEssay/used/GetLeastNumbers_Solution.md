---
title: 最小的K个数
order: 28
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


最小的K个数
===

>输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

## 思路1：排序 取前K个

## 思路2：K次快排 取左边的数字

```js
function GetLeastNumbers_Solution(input, k)
{
    for(var i = 0;i<input.length;i++){
        for(var j = 0;j<input.length;j++){
            if(input[i]<input[j]){
                var temp;
                temp = input[i]
                input[i] = input[j]
                input[j] = temp
            }
        }
    }
    var a = []
    for(var i =0;i<k;i++){
        a.push(input[i])
    }
    return k>input.length? []:a
    // write code here
}
module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};
```

