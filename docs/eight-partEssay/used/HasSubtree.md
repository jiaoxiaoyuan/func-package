---
title: 树的子结构X
order: 16
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

树的子结构X
===

>输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

```js
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    //不是一颗空树
    if(pRoot1==null || pRoot2==null){
        return false
    }
    return isSubTree(pRoot1,pRoot2) || HasSubtree(pRoot1.left,pRoot2) || HasSubtree(pRoot1.right,pRoot2)
}
function isSubTree(root1,root2){
    //注意要root2先返回
    if(root2==null) return true
    if(root1==null) return false
    if(root1.val==root2.val){
        //且这里也要返回
       return isSubTree(root1.left,root2.left) && isSubTree(root1.right,root2.right)
    }else{
        return false
    }
}
module.exports = {
    HasSubtree : HasSubtree
};
```

