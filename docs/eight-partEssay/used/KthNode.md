---
title: 二叉搜索树的第K个节点
order: 61
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

二叉搜索树的第K个节点
===

题目描述

>给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

二叉搜索树的中序遍历为升序序列

```js
function KthNode(root, k)
{
    if(!root) return;
    var arr = [];
     
    inorder(root,arr)
     
    return arr[k-1];
}
function inorder(root,arr) {
    if(!root) return;
     
    inorder(root.left,arr);
    arr.push(root)
    inorder(root.right,arr);
}
```

