---
title: 两个链表的第一个公共节点
order: 35
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

两个链表的第一个公共节点
===

>输入两个链表，找出它们的第一个公共结点。

```js
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    let p1 = pHead1
    let p2 = pHead2
    while(p1 !== p2){
         p1=p1==null?pHead2:p1.next;
        p2=p2==null?pHead1:p2.next;
    }
    return p1
    
}
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};
```

