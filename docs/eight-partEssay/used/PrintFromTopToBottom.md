---
title: 从上往下打印二叉树
order: 21
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


从上往下打印二叉树
===

>从上往下打印出二叉树的每个节点，同层节点从左至右打印。

```js
function PrintFromTopToBottom(root)
{
    // write code here
    let arr = []
    let data = []
    if(root!=null){
        arr.push(root)
    }
     while(arr.length!=0){
        var node=arr.shift();
        if(node.left!=null){
            arr.push(node.left);
        }
        if(node.right!=null){
            arr.push(node.right);
        }
        data.push(node.val);
    }
    return data;
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};
```

