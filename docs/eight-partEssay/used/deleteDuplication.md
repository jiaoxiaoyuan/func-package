---
title: 删除链表的重复节点
order: 55
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

删除链表的重复节点
===

题目描述

>在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

```js
function deleteDuplication(pHead)
{
    // write code here
    var newHead = new ListNode('head');
    newHead.next = pHead;
    var pHead = newHead;
    var qHead = pHead.next;
    while(qHead) {
        while((qHead.next!=null) && (qHead.val == qHead.next.val)) {
            qHead = qHead.next;
        }
        //没移动
        if(pHead.next == qHead) {
            pHead = qHead;
            qHead = qHead.next;
             
        }
        //移动了
        else {
            qHead = qHead.next;
            pHead.next = qHead;
             
        }
         
    }
    return newHead.next;
     
}
```

