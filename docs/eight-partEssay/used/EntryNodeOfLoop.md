---
title: 链表中环的入口节点
order: 54
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

链表中环的入口节点
===

题目描述

>给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

思路：快慢针，当快针A与慢针B相遇时，在头结点出发一个慢针C，慢针B、C一起走，相遇时即为环的入口

```js
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(pHead == null){
        return 1;
    }
    if(pHead.next == null){
        return null;
    }
    var fast = pHead;
    var slow = pHead;
    while(slow != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(fast == slow) break;
    }
     
    var p1 = slow;
    var p2 = pHead;
    while(p1 != p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}
```

