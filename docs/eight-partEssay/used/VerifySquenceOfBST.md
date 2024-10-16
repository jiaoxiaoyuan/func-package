---
title: 二叉搜索树的后序遍历X
order: 22
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

二叉搜索树的后序遍历X
===

>输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

**Tips:**

 - 二叉搜索树前序遍历第一个节点是根节点
 - 二叉搜索树中序遍历是一个升序的序列
 - 二叉搜索树后序遍历最后一个节点是根节点，则可以按照大小划分左右子树，找到第一个比根节点大的节点，就是右子树的开始

```js
function VerifySquenceOfBST(sequence) {
    if(!sequence.length) {
        return false;
    }
    return adjustSquence(sequence,0,sequence.length-1);
}
  
function adjustSquence(sequence,start,end) {
    if(start >= end) {
        return true;
    }
    var i = start;
    //找到左右子树的分界 i i之后即为右子树
    while(i < end && sequence[i] < sequence[end]) {
        i++;
    }
    //判断右子树 如果右子树小于root 则直接返回false
    for(var j = i; j < end; j++){
        if(sequence[j] < sequence[end]) {
            return false;
        }
    }
    return adjustSquence(sequence,start,i-1) && adjustSquence(sequence,i,end-1)
}
```

