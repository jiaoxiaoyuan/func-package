---
title: 对称的二叉树
order: 57
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


对称的二叉树
===

题目描述

>请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

```js
function isSymmetrical(pRoot)
{
    // write code here
    if(pRoot==null){
        return true
    }
    return judge(pRoot.left,pRoot.right)
}
function judge(left,right){
    if(left==null){return right==null}
    if(right==null){return false}
    if(left.val!=right.val){return false}
    return judge(left.left,right.right)&&judge(left.right,right.left)
}
```

