---
title: 数组中出现次数超过一半的数字
order: 27
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


数组中出现次数超过一半的数字
===

>数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

```js
function MoreThanHalfNum_Solution(numbers)
{
    let o = {}
    numbers.forEach((item,index)=>{
        if(!o[item]){
            o[item] = 1
        }else{
            o[item]++
        }
    })
    for(let i in o){
        if(o[i]>(numbers.length/2)){
            return i
        }
    }
    return 0
}
module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};
```


