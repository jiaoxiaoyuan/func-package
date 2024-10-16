---
title: 矩阵中的路径X
order: 64
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

矩阵中的路径X
===

题目描述

>请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。

```js
function hasPath(matrix, rows, cols, path)
{
    if (path.length === 0) {
        return true;
    }
    if (rows * cols < path.length) {
        return false;
    }
    let status = [];
    // 初始化status
    for (let i = 0; i < rows; i++) {
        status.push([]);
        for(let j = 0; j < cols; j++) {
            status[i][j] = false;
        }
    }
    //找到第一个符合的path的
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i*cols+j] === path[0]) {
                if (path.length === 1) {
                    return true;
                }
                status[i][j] = true;
                if (find(matrix, rows, cols, i, j, path.slice(1), status)) {
                    return true;
                }
                status[i][j] = false;
            }
        }
    }
    return false;
}
function find(matrix,rows,cols,row,col,path,status){
    if(row > 0 && matrix[(row-1)*cols + col] === path[0] && status[row-1][col] === false){
        if(path.length === 1){
            return true;
        }
        status[row-1][col] = true;
        if(find(matrix,rows,cols,row-1,col,path.slice(1),status)){
            return true;
        }
        status[row-1][col] = false;
    }
    if(row < rows-1 && matrix[(row+1)*cols + col] === path[0] && status[row+1][col] === false){
        if(path.length === 1){
            return true;
        }
        status[row+1][col] = true;
        if(find(matrix,rows,cols,row+1,col,path.slice(1),status)){
            return true;
        }
        status[row+1][col] = false;
    }
    if(col > 0 && matrix[row*cols + col -1] === path[0] && status[row][col-1] === false){
        if(path.length === 1){
            return true;
        }
        status[row][col-1] = true;
        if(find(matrix,rows,cols,row,col-1,path.slice(1),status)){
            return true;
        }
        status[row][col-1] = false;
    }
    if(col < cols-1 && matrix[row*cols + col +1] === path[0] && status[row][col+1] === false){
        if(path.length === 1){
            return true;
        }
        status[row][col+1] = true;
        if(find(matrix,rows,cols,row,col+1,path.slice(1),status)){
            return true;
        }
        status[row][col+1] = false;
    }
    return false;
}

module.exports = {
    hasPath : hasPath
};
```
