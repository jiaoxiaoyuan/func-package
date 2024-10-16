---
title: 数字在排序数组中出现的次数
order: 36
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

数字在排序数组中出现的次数
===

>统计一个数字在排序数组中出现的次数。

思路1：遍历数组



```js
function GetNumberOfK(data, k)
{
    // write code here
    let count = 0
    data.forEach(item=>{
        if(item===k) count++
    })
    return count
}
module.exports = {
    GetNumberOfK : GetNumberOfK
};
```


思路2：因为数组有序，可以用二分查找。找到最左边出现的下标，找到最右边出现的下标，两者相减

```js
function GetNumberOfK(data, k)
{
    var number = 0;
    if(data.length > 0){
        var first = GetFirstK(data,k,0,data.length - 1),
            last = GetLastK(data,k,0,data.length - 1);
        if(first > -1 && last > -1){
            number = last - first + 1;
        }
    }
    return number;
    // write code here
}
function GetFirstK(data,k,start,end){
    if(start > end){
        return -1;
    }
    var midIndex = Math.floor((start + end) / 2);
    if(data[midIndex] == k){
        if((midIndex > 0 && data[midIndex - 1] != k) || midIndex == 0){
            return midIndex;
        }else{
            end = midIndex - 1;
        }
    }else if(data[midIndex] > k){
        end = midIndex - 1;
    }else{
        start = midIndex + 1;
    }
    return GetFirstK(data,k,start,end);
}
function GetLastK(data,k,start,end){
    if(start > end){
        return -1;
    }
    var midIndex = Math.floor((start + end) / 2);
    if(data[midIndex] == k){
        if((midIndex < data.length - 1 && data[midIndex + 1] != k) || midIndex == data.length - 1){
            return midIndex;
        }else{
            start = midIndex + 1;
        }
    }else if(data[midIndex] < k){
        start = midIndex + 1;
    }else{
        end = midIndex - 1;
    }
    return GetLastK(data,k,start,end);
}
```
