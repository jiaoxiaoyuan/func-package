---
title: 数组中只出现一次的数字
order: 39
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

数组中只出现一次的数字
===

>一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

```js
function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let o  = {}
    array.forEach((item,index)=>{
        if(!o[item]){
            o[item] = 1
        }else{
            o[item]++
        }
    })
    console.log(o)
    let list = []
    for(let i in o){
        if(o[i]%2!==0){
            list.push(i)
        }
    }
    return list
}
module.exports = {
    FindNumsAppearOnce : FindNumsAppearOnce
};
```

