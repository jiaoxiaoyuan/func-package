---
title: 重建二叉树X
order: 4
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

重建二叉树X
===

>输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

**思路：前序遍历的第一个元素是一颗二叉树的根节点，然后在中序遍历中找到这个节点，设其下标为i，则中序中0~i为此二叉树的左子树，i~length-1为此二叉树的右子树。随即对其子树进行递归操作**

```js
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length===0 || vin.length===0){
        return null
    }
    let root = {}
    root.val = pre[0]
    for(let i =0;i<vin.length;i++){
        if(vin[i]===pre[0]){
            root.left = reConstructBinaryTree(pre.slice(1,i+1),vin.slice(0,i))
            root.right = reConstructBinaryTree(pre.slice(i+1,pre.length),vin.slice(i+1,vin.length))
            break
        }
    }
    return root
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};
```

>讲解思路: 这段代码定义了一个名为 `reConstructBinaryTree` 的函数，其目的是根据给定的先序遍历数组 `pre` 和中序遍历数组 `vin` 来重构二叉树。重构后的二叉树以嵌套对象的形式返回，其中每个对象代表一个节点，包含 `val（节点值）、left（左子树）和 right（右子树）`三个属性。

- 基础情况判断：首先，函数检查先序遍历数组 `pre` 和中序遍历数组 `vin` 的长度。如果任一数组的长度为 `0`，说明没有节点需要构建，函数返回 `null`。

- 创建根节点：函数创建一个空对象 `root` 作为当前子树的根节点，并将先序遍历数组的第一个元素 `pre[0]` 赋值给 `root.val`，因为先序遍历的第一个元素总是当前子树的根节点。

- 分割数组：接下来，函数遍历中序遍历数组 `vin`，找到与根节点值相等的元素 `vin[i]`。由于中序遍历的顺序是左子树、根节点、右子树，因此 `vin.slice(0, i)` 是左子树的中序遍历数组，`vin.slice(i + 1)` 是右子树的中序遍历数组。同时，根据先序遍历的特性，`pre.slice(1, i + 1)` 是左子树的先序遍历数组，`pre.slice(i + 1)` 是右子树的先序遍历数组。

- 递归构建子树：使用上述分割得到的子数组，函数递归地调用自身来构建左子树和右子树。递归调用的结果分别赋值给 `root.left` 和 `root.right`。

- 返回结果：最后，函数返回构建好的根节点 `root`。

- 模块导出：函数通过 `module.exports` 导出，以便在其他` JavaScript` 文件中使用。

> Demo: 为了演示这个函数是如何工作的，我们可以创建一个简单的先序遍历数组和中序遍历数组，并调用 `reConstructBinaryTree` 函数来重构二叉树。

```js
// 引入重构二叉树函数
const { reConstructBinaryTree } = require('./reConstructBinaryTree'); // 假设函数在 reConstructBinaryTree.js 文件中

// 先序遍历数组和中序遍历数组示例
const pre = [3, 9, 20, 15, 7]; // 先序遍历结果
const vin = [9, 3, 15, 20, 7]; // 中序遍历结果

// 调用函数重构二叉树
const tree = reConstructBinaryTree(pre, vin);

// 打印重构后的二叉树（以嵌套对象的形式）
console.log(tree);
// 输出示例（具体输出格式可能因环境而异）:
// { val: 3,
//   left: { val: 9, left: null, right: null },
//   right:
//    { val: 20,
//      left: { val: 15, left: null, right: null },
//      right: { val: 7, left: null, right: null } } }

```
在这个 `demo` 中，我们首先引入了 `reConstructBinaryTree` 函数，然后定义了两个示例数组 `pre` 和 `vin`，分别表示一个二叉树的先序遍历和中序遍历结果。接着，我们调用 `reConstructBinaryTree` 函数来重构二叉树，并将结果打印出来。
