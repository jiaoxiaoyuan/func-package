---
title: 平衡二叉树X
order: 38
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


平衡二叉树X
===

>输入一棵二叉树，判断该二叉树是否是平衡二叉树。

思路：利用求深度的方法，依次遍历左右子树，用他们的深度相减，结果大于1的，返回-1；否则返回树的深度

```js
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(TreeDepth(pRoot)==-1){
        return false
    }else{
        return true
    }
}
function TreeDepth(pRoot){
    if(!pRoot) return 0
    let left = TreeDepth(pRoot.left)
    if(left == -1) return -1
    let right = TreeDepth(pRoot.right)
    if(right ==- 1) return -1
    return Math.abs(left-right)>1?-1:Math.max(left,right)+1
}
```

