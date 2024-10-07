---
title: 反转链表X
order: 14
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

反转链表X
===

>输入一个链表，反转链表后，输出新链表的表头。

```js
function ReverseList(pHead)
{
    var cur = pHead;
    var pre = null;
    while(cur != null){
        var temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}
module.exports = {
    ReverseList : ReverseList
};
```


