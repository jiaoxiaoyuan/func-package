---
title: 按之字形打印二叉树
order: 58
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


按之字形打印二叉树
===

题目描述

>请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

层序遍历后再根据条件是否reverse

```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    if(!pRoot) return []
    var level = 0
    var res = []
    function BFS(node,level){
        if(node){
            if(!res[level]){
                res[level] = []
            }
            res[level].push(node.val)
            level+=1
            BFS(node.left,level)
            BFS(node.right,level)
        }
    }
    BFS(pRoot,level)
    for(var i = 0;i<res.length;i++){
        if(i%2!=0){
            res[i] = res[i].reverse()
        }
    }
    return res
}
module.exports = {
    Print : Print
};
```

