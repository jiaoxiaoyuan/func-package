---
title: 二叉树的下一个节点
order: 56
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

二叉树的下一个节点
===

题目描述

>给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

通过给定节点的next指针一直找到根节点，然后中序遍历

```js
/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    // write code here
    let root = pNode
    while(root.next){
        root = root.next
    }
    let arr = []
    inorder(root,arr)
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==pNode) return arr[i+1]
    }
}
function inorder(root,arr){
    if(root.left) inorder(root.left,arr)
    if(root)arr.push(root)
    if(root.right) inorder(root.right,arr)
}

```

