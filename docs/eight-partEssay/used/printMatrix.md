---
title: 顺时针打印矩阵X
order: 19
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


顺时针打印矩阵X
===


>输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

```js
function printMatrix(matrix)
{
    var row=matrix.length;
    var col=matrix[0].length;
    var res=[];
    if(row==0||col==0){
        return res;
    }
    var left=0,
        top=0,
        right=col-1,
        bottom=row-1;
    while(left<=right&&top<=bottom){
        for(var i=left;i<=right;i++)
            res.push(matrix[top][i]);
        for(var i=top+1;i<=bottom;i++)
            res.push(matrix[i][right]);
        if(top!=bottom)
            for(var i=right-1;i>=left;i--)
                res.push(matrix[bottom][i]);
        if(left!=right)
            for(var i=bottom-1;i>top;i--)
                res.push(matrix[i][left]);
        left++,top++,right--,bottom--;
    }
    return res;
}
module.exports = {
    printMatrix : printMatrix
};
```
