---
title: 输出链表中的倒数第K个节点
order: 13
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---

输出链表中的倒数第K个节点
===

>输入一个链表，输出该链表中倒数第k个结点。

```js
function FindKthToTail(head, k)
{
    if(head == null || k <= 0) return false;;
    var p1 = head;
    var p2 = head;
    //注意从1开始
    for (var i = 1; i < k; i++) {
        if (p1.next != null) {
            p1 = p1.next;
        }
        else {
            return false;
        }
    }
    while (p1.next != null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
    // write code here
}
module.exports = {
    FindKthToTail : FindKthToTail
};
```

