---
title: 二叉树中和为某一值的路径X
order: 23
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


二叉树中和为某一值的路径X
===

**深度优先搜索**

```js
function FindPath(root, expectNumber) {
    let result = []
    if(!root) return result
    dfs(root,expectNumber,[],0,result)
    return result
}
function dfs(root,expectNumber,path,cur,result){
    cur+=root.val
    path.push(root)
    if(cur==expectNumber && root.left==null && root.right==null){
        result.push(path.slice(0))
    }
    if(root.left){
        dfs(root.left,path,expectNumber,cur,result)
    }
    if(root.right){
        dfs(root.left,path,expectNumber,cur,result)
    }
    //弹出最后一个节点 继续dfs
    path.pop()
}
```

