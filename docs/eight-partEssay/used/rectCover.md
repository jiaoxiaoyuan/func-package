---
title: 矩阵覆盖
order: 9
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


矩阵覆盖
===

>我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
>思路类似于跳台阶

```js
var arr = [1,2]

function rectCover(number)
{
    if(number==0){
        return 0
    }
    if(number==1||number==2){
        return arr[number-1]
    }else{
        for(let i =2;i<number;i++){
            arr[i] = arr[i-2]+arr[i-1]
        }
        return arr[number-1]
    }
}
```


