---
title: 从尾到头打印链表
order: 3
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

从尾到头打印链表
===

> 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

```js
function printListFromTailToHead(head)
{
    var arr = []
    while(head){
        arr.unshift(head.val)
        head = head.next
    }
    return arr
    // write code here
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};
```


> 这段代码定义了一个名为 `printListFromTailToHead` 的函数，其目的是将一个链表的节点值从尾部到头部依次放入一个数组中，并返回这个数组。这里假设链表节点的结构是包含一个值 `val` 和一个指向下一个节点的指针 `next`。

讲解思路
- 初始化数组：首先，函数内部创建了一个空数组 `arr`，用于存储链表节点的值。

- 遍历链表：然后，使用一个 `while` 循环来遍历链表。循环条件是 `head` 存在（即不是 `null` 或 `undefined`），这意味着链表还没有遍历完。

- 插入值到数组：在循环体内，使用 `arr.unshift(head.val)` 将当前节点的值插入到数组的最前面。`unshift` 方法会改变原数组，将新元素添加到数组的开头，并返回新的数组长度。这里利用 unshift 的特性来实现从尾部到头部的顺序插入。

- 移动到下一个节点：接下来，通过 `head = head.next` 更新 `head` 的值为下一个节点的引用，以便在下一次循环中处理下一个节点。

- 返回结果：当链表遍历完成后，`while` 循环结束，函数返回填充好的数组 arr。

- 模块导出：最后，使用 `module.exports` 将 `printListFromTailToHead` 函数导出，以便其他 `JavaScript` 文件可以引入和使用这个函数。这是 `Node.js` 中模块系统的一部分。

 > Demo: 为了演示这个函数是如何工作的，我们可以创建一个简单的链表结构，并调用 printListFromTailToHead 函数来打印结果。

```js
// 链表节点构造函数
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

// 创建链表：1 -> 2 -> 3
const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// 引入 printListFromTailToHead 函数
const { printListFromTailToHead } = require('./printListFromTailToHead'); // 假设函数在 printListFromTailToHead.js 文件中

// 调用函数并打印结果
const result = printListFromTailToHead(node1);
console.log(result); // 输出：[3, 2, 1]

```

在这个 `demo` 中，我们首先定义了一个链表节点构造函数 `ListNode`，然后使用它创建了一个简单的链表 `1 -> 2 -> 3`。接着，我们引入了 `printListFromTailToHead` 函数，并调用它来打印链表的节点值从尾部到头部的数组表示。最后，我们打印出结果数组 `[3, 2, 1]`。
