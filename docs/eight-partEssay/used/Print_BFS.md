---
title: 把二叉树打印成多行
order: 59
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

把二叉树打印成多行
===

题目描述

>从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

层序遍历

```js
function Print(pRoot)
{
    // write code here
    //层序遍历二叉树
    var res= []
    var level = 0
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
    return res
}
```

