---
title: 复杂链表的复制
order: 24
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

复杂链表的复制
===

> 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

```js
function Clone(pHead)
{
    // write code here
    if(!pHead) return null
    let p = {}
    p.label = pHead.label
    p.random = pHead.random
    p.next = Clone(pHead.next)
    return p
}
```

