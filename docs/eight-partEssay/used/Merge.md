---
title: 合并两个排序的链表X
order: 15
nav:
  title: 八股文
  path: /eight-partEssay
  order: 10
group:
  path: /commonly
  title: 常用算法
  order: 2
---


合并两个排序的链表X
===


>输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

```js
function Merge(pHead1, pHead2)
{
    // write code here
    var head = null;
    if(pHead1==null || pHead2==null){
        return pHead1 || pHead2
    }else{
        if(pHead1.val>pHead2.val){
            head = pHead2
            head.next = Merge(pHead1,pHead2.next)
        }else{
            head = pHead1
            head.next = Merge(pHead1.next,pHead2)
        }
    }
    return head
}
module.exports = {
    Merge : Merge
};
```

