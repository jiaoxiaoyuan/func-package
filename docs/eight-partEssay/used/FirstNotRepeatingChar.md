---
title: 第一个只出现一次的字符
order: 33
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

第一个只出现一次的字符
===


```js
function FirstNotRepeatingChar(str)
{
    if(!str) return -1
    str = str.split('')
    let map = {}
    str.forEach((item,index)=>{
        if(map[item]){
            map[item].num++
        }else{
            let obj = {}
            obj.index = index
            obj.num = 1
            map[item] = obj
        }
    })
    let i = Infinity
    Object.values(map).forEach(item=>{
        if(item.num===1&&item.index<i) i = item.index
    })
    if(i==Infinity)i=-1
    return i
    // write code here
}
module.exports = {
    FirstNotRepeatingChar : FirstNotRepeatingChar
};
```

