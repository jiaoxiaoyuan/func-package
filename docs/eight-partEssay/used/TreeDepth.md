---
title: 二叉树的深度X
order: 37
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

二叉树的深度X
===

>输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

```js
function TreeDepth(pRoot)
{
    // write code here
   if(!pRoot) return 0
   var left = 1+TreeDepth(pRoot.left)
   var right = 1 +TreeDepth(pRoot.right)
   return Math.max(left,right)
}
```

