---
title: 数据流的中位数
order: 62
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


数据流的中位数
===

题目描述

>如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。

```js
let arr = []
function Insert(num)
{
    // write code here
    arr.push(num)
    arr.sort((a,b)=> a-b)
}
function GetMedian(){
	// write code here
    if(arr.length===1) return arr[0]
    if(arr.length%2===0){
        let index= arr.length/2
        return (arr[index]+arr[index-1])/2
    }else{
        let index = (arr.length+1)/2
        return arr[index-1]
    }
}
module.exports = {
    Insert : Insert,
    GetMedian : GetMedian
};
```

